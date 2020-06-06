import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/Layout"
import VacatureLink from "../components/vacature/VacatureLink"
import Top from "../components/promo/Top"

export default function vacatures({ data }) {
  return (
    <div>
      <Layout title="vacatures">
        <Top title="vacatures" />
        <div className="m-4"></div>
        <div className="posts">
          {data.allContentfulVacature.edges.map(({ node }) => {
            return <VacatureLink node={node} />
          })}
        </div>
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
          afbeelding {
            fluid(maxWidth: 444, maxHeight: 342) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
