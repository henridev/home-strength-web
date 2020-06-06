import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/global/Layout"

import PromoTop from "../components/promo/PromoTop"
import Article from "../components/promo/Article"
import PromoPosts from "../components/promo/PromoPosts"

export default function promoties({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const promos = edges

  return (
    <div>
      <Layout title="promoties">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <PromoTop />
          <PromoPosts>
            {promos.map(promo => {
              return <Article node={promo.node} />
            })}
          </PromoPosts>
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { glob: "**/promoties/*.md" } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
