import React from "react"
import { Link } from "gatsby"

export default function Hero() {
  return (
    <div className="flex ">
      <div className="flex flex-1 bg-blue bg-opacity-80 px-4 py-2 ">
        <div className=" flex justify-center text-grey text-xl container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex justify-center bg-red-dark flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 rounded">
            <p className="text-3xl font-bold uppercase tracking-loose ">
              delhaize dok-noord
            </p>
            <h1 className="my-4 ">
              het adress voor kwaliteit, aanbod en services
            </h1>
            <p className="leading-normal mb-4">
              Een combinatie van het gemak van een supermarkt met de service van
              een buurtwinkel.
            </p>
            <div>
              <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
                <Link to="/shop">shop</Link>
              </button>
              <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
                <Link to="/contact">contact</Link>
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
  )
}
