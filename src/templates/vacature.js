import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function vacature({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        className="vacature-template"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <span>{post.frontmatter.date}</span>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
