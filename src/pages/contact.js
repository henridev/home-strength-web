import React from "react"
import Layout from "../components/global/Layout"

export default function contact() {
  return (
    <div>
      <Layout title="contact">
        <section className="flex flex-col items-center justify-center">
          <div
            style={{
              backgroundImage: `Url(/assets/svg/contact.svg)`,
              width: "300px",
              height: "200px",
              backgroundRepeat: "no-repeat",
              justifySelf: "center",
              margin: "2rem auto",
              backgroundSize: "cover",
            }}
            className=""
          ></div>
          <h2 class=" text-3xl m-3 text- sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
            contacteer ons
            <br />
            <span class="text-red-dark text-xl ">
              Heeft u een vraag of opmerking? Aarzel niet en neem contact met
              ons op
            </span>
            <br />
          </h2>

          <form className="w-full max-w-lg">
            <div className="flex flex-wrap  mx-6 my-3">
              <div className="w-full md:w-1/2 px-3 mx-6 my-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Voornaam
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Velden zijn vereist
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3 mx-6 my-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Achternaam
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mx-6 my-3">
              <div className="w-full px-3 mx-6 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">Veld vereist</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 m-6">
              <div className="w-full px-3 mx-6 my-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Bericht
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter h-48 resize-none"
                  id="message"
                ></textarea>
                <p className="text-gray-600 text-xs italic">
                  Laat ons weten hoe we kunnen helpen
                </p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3 mx-6 my-3">
                <button
                  className="shadow bg-red-dark hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  verzenden
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </section>
      </Layout>
    </div>
  )
}
