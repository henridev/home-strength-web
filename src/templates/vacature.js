import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/global/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function vacature({ data }) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} url={url} />
      },
    },
  }
  const post = data.contentfulVacature
  return (
    <Layout title="vacature">
      <div
        className="vacature-template"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{post.title}</h1>
        <img src={post.afbeelding.resize.src} />
        <small>{post.startdatum}</small>
        {documentToReactComponents(post.body.json, options)}
        <Link to="/vacatures">
          <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
            terug naar vacatures
          </button>
        </Link>
        <Link to="/postuleren">
          <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
            ik heb interesse
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulVacature(slug: { eq: $slug }) {
      startdatum(fromNow: true, locale: "NL")
      createdAt
      slug
      titel
      contentful_id
      body {
        json
      }
      afbeelding {
        resize(height: 300, width: 300) {
          src
        }
      }
    }
  }
`
