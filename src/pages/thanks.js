import React from "react"
import Layout from "../components/global/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <p class="uppercase tracking-loose">die is verzonden</p>
        <h1 class="font-bold text-3xl my-4">Bedankt voor u bericht</h1>
        <p class="leading-normal mb-4">
          Wij contacteren u zodra we u bericht ontvangen
        </p>

        <button class="font-semibold m-3 text-red-dark bg-white hover:bg-grey  hover: rounded shadow hover:shadow-lg py-2 px-4   hover:border-grey">
          <Link to={"/"}>terug naar home</Link>
        </button>
      </div>
      <div class="w-full lg:w-1/2 lg:py-6 text-center">
        <div
          style={{
            backgroundImage: `Url(/assets/svg/correct.svg)`,
          }}
          className="thanks-background fill-current text-gray-900 w-3/5 mx-auto"
        ></div>
      </div>
    </div>
  </Layout>
)
