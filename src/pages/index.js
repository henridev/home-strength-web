import React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import Openingsuren from "../components/index/Openingsuren"

import { graphql } from "gatsby"

import TroevenList from "../components/index/TroevenList"
import SpotlightList from "../components/index/SpotlightList"

export default function Home({ data }) {
  return (
    <div>
      <Layout title="home">
        <Hero />
        <Openingsuren />
        <TroevenList edges={data.allContentfulTroeven.edges} />
        <SpotlightList edges={data.allContentfulSpotlight.edges} />
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
