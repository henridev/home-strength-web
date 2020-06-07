import React from "react"
import Layout from "../components/global/Layout"
import { Link } from "gatsby"

export default function shop() {
  return (
    <div>
      <Layout title="shop">
        <div className="flex ">
          <div className="flex flex-1 bg-blue bg-opacity-80 px-4 py-2 ">
            <div className=" flex justify-center text-grey text-xl container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
              <div className="flex flex justify-center bg-red-dark flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 rounded">
                <p className="text-3xl font-bold uppercase tracking-loose ">
                  Shop
                </p>
                <h1 className="my-4 ">binnenkort beschikbaar</h1>
                <p className="leading-normal mb-4">
                  Kom later nog eens terug op dit moment is de shop gesloten
                </p>
                <div>
                  <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
                    <Link to="/">terug naar home</Link>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:py-6 text-center">
                <img
                  src={"/assets/svg/store.svg"}
                  alt="store"
                  className="store-svg"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
