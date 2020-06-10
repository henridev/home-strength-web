import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

export default function VacatureItem({ node }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between m-6">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {node.titel}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div className="m-2 ml-0  flex items-center text-sm leading-5 text-gray-500">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            geplaatst: {node.startdatum}
          </div>

          <div className="my-4 mr-4 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
            <Link
              style={{ boxShadow: `none`, maxWidth: "300px" }}
              to={`/vacatures/${node.slug}`}
              className="text-red-dark"
            >
              <FontAwesomeIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 "
                icon={faInfoCircle}
                size="lg mr-2"
              />
              klik hier voor meer informatie
            </Link>
          </div>
        </div>
      </div>
      <Img
        className="flex-1 align-middle border-none max-w-full h-auto rounded-lg"
        fluid={node.afbeelding.fluid}
      />
    </div>
  )
}
