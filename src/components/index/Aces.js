import React from "react"
import Card from "./Card"

export default function Aces({ edges }) {
  return (
    <>
      <div className="flex bg-grey p-3 lg:py-4 ">
        <h2 class="container text-3xl m-3 text- sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
          Onze troeven
          <br />
          <span class="text-red-dark text-xl ">
            Ontdek wat wij u te bieden hebben
          </span>
          <br />
        </h2>
      </div>
      <div className="flex py-4 bg-grey lg:py-4">
        <div className=" flex-1  px-4 py-2 text-center container">
          <div className="flex flex-wrap -mx-3 lg:-mx-6 ">
            {edges.map(({ node }) => (
              <Card node={node} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
