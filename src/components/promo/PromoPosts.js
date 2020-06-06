import React from "react"
import Aside from "./Aside"
import Pagination from "./Pagination"

export default function PromoPosts(props) {
  return (
    <div class="container mx-auto flex flex-wrap py-6">
      <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        {props.children}
        <Pagination />
      </section>
      <Aside />
    </div>
  )
}
