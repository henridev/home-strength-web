import React from "react"
import Img from "gatsby-image"

export default function Spotlight({ node }) {
  return (
    <div className="w-full lg:w-4/12 px-4">
      <h5 className="text-xl font-semibold pb-4 text-center bg-white">
        {node.titel}
      </h5>
      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <Img
          className="align-middle border-none max-w-full h-auto rounded-lg"
          fluid={node.afbeelding.fluid}
        />
      </div>
    </div>
  )
}
