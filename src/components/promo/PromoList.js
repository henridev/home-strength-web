import React from "react"
import PromoItem from "./PromoItem"

export default function PromoPosts({ edges }) {
  return (
    <div className="container mx-auto flex justify-center flex-wrap py-6">
      <section className="w-full min-h-screen overflow-y-scroll items-center px-3 promos">
        {edges.map(({ node }) => (
          <PromoItem node={node} />
        ))}
      </section>
    </div>
  )
}
