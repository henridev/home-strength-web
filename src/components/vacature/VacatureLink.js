import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

export default function VacatureLink({ node }) {
  let featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Link
      style={{ boxShadow: `none` }}
      to={node.fields.slug}
      style={{ maxWidth: "300px" }}
    >
      <article key={node.id}>
        <header>
          <Img fluid={featuredImgFluid} style={{ maxWidth: "300px" }} />
          <h3 className="my-4 font-semibold text-2xl">
            {node.frontmatter.title}
          </h3>

          <small>{node.frontmatter.data}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </section>
      </article>
    </Link>
  )
}
