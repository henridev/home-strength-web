import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/Layout"
import VacatureLink from "../components/vacature/VacatureLink"

export default function vacatures({ data }) {
  return (
    <div>
      <Layout title="vacatures">
        <ul className="posts">
          <li className="post">
            {data.allContentfulVacature.edges.map(({ node }) => {
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
    allContentfulVacature(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          startdatum(fromNow: true, locale: "NL")
          slug
          titel
          createdAt
          contentful_id
          omschrijving {
            omschrijving
            childMarkdownRemark {
              excerpt(pruneLength: 200)
              html
            }
          }
          afbeelding {
            resize(height: 300, width: 300) {
              src
            }
          }
        }
      }
    }
  }
`
