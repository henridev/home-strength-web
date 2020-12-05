// const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require('path')

exports.createPages = executePageCreation

async function executePageCreation({graphql, actions, reporter}) {
	const {createPage} = actions
	const response = await graphql(`
    {
      allContentfulVacature(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

	if (response.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.')
		return
	}
	response.data.allContentfulVacature.edges.forEach(({node}) => {
		createVacaturePages(node, createPage)
	})
	response.data.allContentfulProduct.edges.forEach(({node}) => {
		createProductPages(node, createPage)
	})
}

function createVacaturePages(node, createPage, resolve) {
	const vacancyTemplate = path.resolve('./src/templates/vacature.tsx')
	createPage({
		path: `/vacatures/${node.slug}`,
		component: vacancyTemplate,
		context: {
			slug: node.slug
		}
	})
}

function createProductPages(node, createPage, resolve) {
	const productTemplate = path.resolve('./src/templates/product.tsx')
	createPage({
		path: `/shop/${node.slug}`,
		component: productTemplate,
		context: {
			slug: node.slug
		}
	})
}
