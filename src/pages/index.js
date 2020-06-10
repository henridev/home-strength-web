import React, { useEffect } from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import Openingsuren from "../components/index/Openingsuren"

import { graphql } from "gatsby"

import TroevenList from "../components/index/TroevenList"
import SpotlightList from "../components/index/SpotlightList"

export default function Home({ data }) {
  useEffect(() => {
    if (window.Snipcart) {
      // var count = window.Snipcart.api.items.count()
      console.log("window.Snipcart", window.Snipcart)

      window.Snipcart.subscribe("cart.ready", data => {
        console.log("data", data)
        // this.updateItemTotal(count)
      })
    }
    return () => {}
  }, [])
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
