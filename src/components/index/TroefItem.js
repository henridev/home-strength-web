import React from "react"
import Img from "gatsby-image"

const TroefItem = ({ node }) => {
  const { titel, beschrijving } = node
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6 text-left">
      <div className="bg-red-dark text-grey h-full shadow-sm rounded-md overflow-hidden group">
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={node.afbeelding.fluid} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{titel}</h1>
          <p className="text-sm sm:text-base text-gray-700">{beschrijving}</p>
        </div>
      </div>
    </div>
  )
}

export default TroefItem
