import React from "react"
import Promo from "./Promo"

export default function PromoPosts({ edges }) {
  return (
    <div class="container mx-auto flex justify-center flex-wrap py-6">
      <section class="w-full flex flex-col items-center px-3">
        {edges.map(({ node }) => (
          <Promo node={node} />
        ))}
      </section>
    </div>
  )
}
