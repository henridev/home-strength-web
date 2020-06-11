import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/global/Layout"

export default function vacature({ data }) {
  const post = data.contentfulProduct
  return (
    <Layout title="product">
      <div className="container vacature-template rounded bg-blue bg-opacity-25 p-4">
        <h1>{post.naam}</h1>
        <Img
          className="mx-auto border-none max-w-screen-sm h-auto rounded-lg"
          fluid={post.afbeelding.fluid}
        />
        <small>prijs: {post.prijs}</small>
        <div className="mt-4">
          <Link to="/shop">
            <button className="font-semibold m-3 text-red-dark bg-white hover:bg-grey  hover: rounded shadow hover:shadow-lg py-2 px-4   hover:border-grey">
              terug naar shop
            </button>
          </Link>
          <button
            data-item-id={post.contentful_id}
            data-item-price={post.prijs}
            data-item-image={post.afbeelding.fluid.src}
            data-item-url={`${data.site.siteMetadata.siteUrl}/shop`}
            data-item-name={post.naam}
            data-item-description={post.omschrijving}
            className="snipcart-add-item font-semibold m-3 text-red-dark bg-white hover:bg-grey  hover: rounded shadow hover:shadow-lg py-2 px-4   hover:border-grey"
          >
            voeg-toe aan bestelling
          </button>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      afbeelding {
        fluid(maxWidth: 350, maxHeight: 250) {
          ...GatsbyContentfulFluid
        }
      }
      contentful_id
      slug
      prijs
      omschrijving
      ingredienten
      categorie
      naam
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
