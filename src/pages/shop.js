/* #region  Imports */
import React from "react"
import Layout from "../components/global/Layout"
import { graphql } from "gatsby"
import ProductList from "../components/shop/ProductList"
import ShopHeader from "../components/shop/ShopHeader"
/* #endregion */

export default function shop({ data }) {
  console.log("data", data)
  return (
    <div>
      <Layout title="shop">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <ShopHeader />
          <ProductList edges={data.allContentfulProduct.edges} />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          contentful_id
          naam
          categorie
          ingredienten
          omschrijving
          prijs
          slug
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
