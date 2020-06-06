import React from "react"
import Promo from "./Promo"

export default function PromoPosts({ edges }) {
  return (
    <div class="container mx-auto flex flex-wrap py-6">
      <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        {edges.map(({ node }) => (
          <Promo node={node} />
        ))}
      </section>
    </div>
  )
}
