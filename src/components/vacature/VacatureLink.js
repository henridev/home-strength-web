import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export default function VacatureLink({ node }) {
  return (
    <Link
      style={{ boxShadow: `none` }}
      to={`/vacatures/${node.slug}`}
      style={{ maxWidth: "300px" }}
    >
      <article key={node.contentful_id}>
        <header>
          <img src={node.afbeelding.resize.src} style={{ maxWidth: "300px" }} />
          <h3 className="my-4 font-semibold text-2xl">{node.title}</h3>

          <small>{node.startdatum}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.omschrijving.childMarkdownRemark.excerpt,
            }}
          />
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </section>
      </article>
    </Link>
  )
}
