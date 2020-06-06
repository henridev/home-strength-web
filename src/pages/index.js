import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Openingsuren from "../components/Openingsuren"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="flex ">
          <div className="hero1 flex-1 bg-red-dark bg-opacity-80 px-4 py-2 ">
            <Hero />
          </div>
          <div className="hero2 flex-1 bg-blue bg-opacity-80 px-4 py-2 ">
            Medium length
          </div>
        </div>
        <div className="flex ">
          <div className=" flex-1 bg-grey bg-opacity-80 px-4 py-2 text-center">
            <Openingsuren />
          </div>
        </div>
        {/* <div className="flex ">
          <div className=" flex-1 bg-grey bg-opacity-80 px-4 py-2 ">
            <Openingsuren />
          </div>
        </div> */}
      </Layout>
    </div>
  )
}
