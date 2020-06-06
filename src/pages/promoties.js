import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/Layout"

import PromoTop from "../components/promo/PromoTop"
import Article from "../components/promo/Article"
import PromoPosts from "../components/promo/PromoPosts"

export default function promoties({
  data: {
    allContentfulPromotie: { edges },
  },
}) {
  const promos = edges

  return (
    <div>
      <Layout title="promoties">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <PromoTop />
          <PromoPosts>
            {/* {promos.map(promo => {
              return <Article node={promo.node} />
            })} */}
          </PromoPosts>
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
          eindDatum(locale: "NL")
          beginDatum(locale: "NL")
        }
      }
    }
  }
`
