import React from "react"
import Spotlight from "./Spotlight"

export default function Spotlights({ edges }) {
  return (
    <>
      <div className="spotlight">
        <div className="justify-center text-center flex flex-wrap pt-16 mt-4">
          <div className="w-full md:w-6/12 px-12 md:px-4 rounded bg-white text-red-dark">
            <h2 className="font-semibold text-4xl">
              Spotlights van het moment
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              laat u telkens weer verassen en ontdek onze spotlights van het
              moment
            </p>
          </div>
        </div>
        <section className="block ">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  mt-24">
                <div className="flex flex-wrap">
                  {edges.map(({ node }) => (
                    <Spotlight node={node} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
