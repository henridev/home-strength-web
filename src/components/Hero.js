import React from "react"

export default function Hero() {
  return (
    <div className=" flex justify-center text-grey text-xl container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex justify-center flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <p className="text-3xl font-bold uppercase tracking-loose ">
          Gezellige supermarkt
        </p>
        <h1 className="my-4 ">voor onze klanten</h1>
        <p className="leading-normal mb-4">
          Een combinatie van het gemak van een supermarkt met de service van een
          buurtwinkel.
        </p>
        <div>
          <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
            shop
          </button>
          <button className="m-3 bg-transparent hover:bg-black  hover: rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">
            contact
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:py-6 text-center"></div>
    </div>
  )
}
