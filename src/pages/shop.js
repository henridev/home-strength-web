/* #region  Imports */
import React, { useState, useEffect } from "react"
import Layout from "../components/global/Layout"
import { graphql } from "gatsby"
import ProductList from "../components/shop/ProductList"
import ShopHeader from "../components/shop/ShopHeader"
/* #endregion */

export default function Shop({ data }) {
  const allProducts = data.allContentfulProduct.edges
  const [products, setProducts] = useState(data.allContentfulProduct.edges)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    createCategories()
  }, [])

  useEffect(() => {
    applyFilter()
  }, [filters])

  function applyFilter() {
    const checkedFilter = filters
      .filter(filter => filter.isChecked)
      .map(({ name }) => name)
    console.log("checkedFilter", checkedFilter)
    setProducts(
      allProducts.filter(({ node }) => checkedFilter.includes(node.categorie))
    )
  }
  function createCategories() {
    let categories = Array.from(
      new Set(products.map(({ node }) => node.categorie))
    )
    setFilters(
      categories.map(category => ({
        name: category,
        isChecked: true,
      }))
    )
    console.log("filters", filters)
  }

  return (
    <div>
      <Layout title="shop">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <ShopHeader setFilters={setFilters} filters={filters} />
          <ProductList edges={products} />
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
