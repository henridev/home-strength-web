import React from "react"
import Promo from "./Promo"

export default function PromoPosts({ edges }) {
  return (
    <div className="container mx-auto flex justify-center flex-wrap py-6">
      <section className="w-full min-h-screen overflow-y-scroll items-center px-3">
        {edges.map(({ node }) => (
          <Promo node={node} />
        ))}
      </section>
    </div>
  )
}
