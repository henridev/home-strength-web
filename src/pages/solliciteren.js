import React from "react"
import Layout from "../components/global/Layout"
import { navigate } from "gatsby-link"
import Top from "../components/solliciteren/Top"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Solliciteren() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div>
      <Layout title="contact">
        <section className="flex flex-col items-center justify-center">
          <Top />
          <form
            className="w-full max-w-lg"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="solliciatie"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className="flex flex-wrap my-3 justify-center align-center">
              <div className="w-full md:w-1/2 px-3 mx-6 my-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Voornaam
                </label>
                <input
                  name="voornaam"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jan"
                />
                <p className="text-red-500 text-xs italic">Veld vereist</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mx-6 my-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Achternaam
                </label>
                <input
                  name="achternaam"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="grid-last-name"
                  type="text"
                  placeholder="Met De Pet"
                />
                <p className="text-red-500 text-xs italic">Veld vereist</p>
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
                  name="email"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">Veld vereist</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mx-6 my-3">
              <div className="w-full px-3 mx-6 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  telefoon
                </label>
                <input
                  name="telefoon"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter"
                  id="tel"
                  type="tel"
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
                  Motivatie
                </label>
                <textarea
                  name="motivatie"
                  onChange={handleChange}
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-lighter h-48 resize-none"
                  id="message"
                ></textarea>
                <p className="text-gray-600 text-xs italic">
                  Laat ons weten waarom jij de geschikte kandidaat bent
                </p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3 mx-6 my-3">
                <button
                  className="shadow bg-red-dark hover:bg-red-lighter focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
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
