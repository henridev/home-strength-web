// const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = handleNodeCreation
exports.createPages = executePageCreation

function handleNodeCreation({ node, getNode, actions }) {
  switch (node.internal.type) {
    case "MarkdownRemark":
      console.log("FOUND MARKDOWN NODE")
      if (!node.hasOwnProperty("fileAbsolutePath")) return
      const { createNodeField } = actions
      const slug = createFilePath({ node, getNode, basePath: "markdown" })
      createNodeField({
        node,
        name: "slug",
        value: slug,
      })
      break
    case "SitePage":
      console.log("FOUND SITEPAGE NODE")
      break
  }
}

async function executePageCreation({ graphql, actions, reporter }) {
  const { createPage } = actions
  const response = await graphql(`
    {
      allContentfulVacature(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            startdatum
            omschrijving {
              omschrijving
            }
            titel
            createdAt
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  response.data.allContentfulVacature.edges.forEach(({ node }) => {
    createVacaturePages(node, createPage)
  })
}

function createVacaturePages(node, createPage, resolve) {
  const vacancyTemplate = path.resolve("./src/templates/vacature.js")
  createPage({
    path: node.titel,
    component: vacancyTemplate,
    context: {
      slug: node.titel,
    },
  })
}
