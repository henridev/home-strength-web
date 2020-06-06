import React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import Openingsuren from "../components/index/Openingsuren"

import { graphql } from "gatsby"

import Aces from "../components/index/Aces"
import Spotlights from "../components/index/Spotlights"

export default function Home({ data }) {
  return (
    <div>
      <Layout title="home">
        <Hero />
        <Openingsuren />
        <Aces edges={data.allContentfulTroeven.edges} />
        <Spotlights edges={data.allContentfulSpotlight.edges} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulTroeven {
      edges {
        node {
          titel
          beschrijving
          afbeelding {
            fluid(maxWidth: 444, maxHeight: 342) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulSpotlight {
      edges {
        node {
          afbeelding {
            fluid(maxWidth: 300, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
          titel
        }
      }
    }
  }
`
