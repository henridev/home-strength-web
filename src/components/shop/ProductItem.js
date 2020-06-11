import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, Link } from "gatsby"

export default function Product({ node }) {
  const data = useStaticQuery(metaQuery)
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col  rounded">
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
          className="snipcart-add-item"
          data-item-id={node.contentful_id}
          data-item-price={node.prijs}
          data-item-image={node.afbeelding.fluid.src}
          data-item-url={`${data.site.siteMetadata.siteUrl}/shop`}
          data-item-name={node.naam}
          data-item-description={node.omschrijving}
          data-item-categories={node.categorie}
          data-item-custom1-name={
            node.categorie === "broodjes" ? "brood soort" : null
          }
          data-item-custom1-options={
            node.categorie === "broodjes"
              ? "wit|bruin (0.5 extra) [+0.50]"
              : null
          }
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
