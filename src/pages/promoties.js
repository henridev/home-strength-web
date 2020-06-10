import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/Layout"
import PromoList from "../components/promo/PromoList"
import PromoHeader from "../components/promo/PromoHeader"

export default function promoties({ data }) {
  return (
    <div>
      <Layout title="promoties">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <PromoHeader />
          <PromoList edges={data.allContentfulPromotie.edges} />
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allContentfulPromotie(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          titel
          createdAt
          omschrijving
          budget
          eindDatum(locale: "NL", formatString: "DD MMMM YY")
          beginDatum(locale: "NL", formatString: "DD MMMM YY")
          afbeelding {
            fluid(maxWidth: 350, maxHeight: 250) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
