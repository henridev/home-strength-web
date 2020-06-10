import React from "react"
import ProductItem from "./ProductItem"

export default function ProductList({ edges }) {
  return (
    <>
      {edges.map(({ node }) => {
        return <ProductItem key={node.contentful_id} node={node} />
      })}
    </>
  )
}
