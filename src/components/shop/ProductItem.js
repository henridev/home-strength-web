import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, Link } from "gatsby"

export default function Product({ node }) {
  const { site } = useStaticQuery(metaQuery)
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col border-2 border-blue m-2">
      <Link
        style={{ boxShadow: `none`, maxWidth: "300px" }}
        to={`/shop/${node.slug}`}
        className="text-red-dark"
      >
        <Img
          className="hover:grow hover:shadow-lg rounded-lg"
          fluid={node.afbeelding.fluid}
        />
      </Link>
      <div className="pt-3 flex items-center justify-between">
        <p className="">{node.naam}</p>
        <button
          class="snipcart-add-item"
          data-item-id={node.contentful_id}
          data-item-price={node.prijs}
          data-item-image={node.afbeelding.fluid.src}
          data-item-url={`/`}
          data-item-name={node.naam}
        >
          <FontAwesomeIcon
            className="h-6 w-6 fill-current text-gray-500 hover:text-black"
            icon={faCartArrowDown}
            size="lg"
          />
        </button>
      </div>
      <p className="pt-1 text-gray-900">{node.prijs} euro</p>
    </div>
  )
}

const metaQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
