import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import VacatureLink from "../components/vacature/VacatureLink"

export default function vacatures({ data }) {
  // const promos = edges
  // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  // .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <Layout>
        <ul className="posts">
          <li className="post">
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return <VacatureLink node={node} />
            })}
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { glob: "**/vacatures/*.md" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          fileAbsolutePath
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
