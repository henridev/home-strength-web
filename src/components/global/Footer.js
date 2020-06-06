import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCcVisa,
  faCcMastercard,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faMoneyBill, faMoneyCheck } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className=" m-8 container bg-grey-lighter p-8 border-t-2 border-grey-dark">
      <div className="sm:flex mb-4">
        <div className="sm:w-1/4 h-auto">
          <div className="text-red-dark font-semibold mb-2">Onze locatie</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-orange text-grey-darker">
              BVBA Bello Dok
            </li>
            <li className="hover:text-orange text-grey-darker">Dok-Noord 7</li>
            <li className="hover:text-orange text-grey-darker">9000 Gent</li>
          </ul>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-red-dark font-semibold mb-2">
            Aanvaarde betaalwijzen
          </div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-red-dark text-grey-darker">
              <FontAwesomeIcon icon={faCcVisa} size="lg" /> {" visa"}
            </li>
            <li className="hover:text-red-dark text-grey-darker">
              <FontAwesomeIcon icon={faCcMastercard} size="lg" />
              {" mastecard"}
            </li>
            <li className="hover:text-red-dark text-grey-darker">
              <FontAwesomeIcon icon={faMoneyBill} size="lg" />
              {" cash"}
            </li>
            <li className="hover:text-red-dark text-grey-darker">
              <FontAwesomeIcon icon={faMoneyCheck} size="lg" />
              {" bancontact"}
            </li>
            <li className="hover:text-red-dark text-grey-darker"></li>
          </ul>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-red-dark font-semibold mb-2">Contact-info</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue text-grey-darker">
              <a href="tel:+3292241119">tel: 09 224 11 19</a>
            </li>
            <li className="hover:text-blue text-grey-darker">
              <a href="mailto:bello.dok@gmail.com">mail: bello.dok@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-red-dark font-semibold mb-2">Social</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue text-grey-darker">
              <a
                className="m-3"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.facebook.com/delhaizedoknoord"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        style={{
          marginTop: "2rem",
        }}
        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-marker+ff0000(3.733121,51.066234)/3.733121,51.066234,15,0/${1000}x${300}@2x?access_token=pk.eyJ1IjoiYmVsa2UwNSIsImEiOiJjazBzNDFnY2owYzQ0M21xbGxwZnNqZW91In0.uiusgRl10zeCVqvUH6PtMg`}
        alt="Mapbox Map of 3.733121,51.066234"
      />
      <hr className="mt-6 border-t-2 border-grey-dark" />
      <div className="mt-4 flex">
        <p className="text-center text-sm md:text-base text-gray-700">
          © 2020 created by {data.site.siteMetadata.author}. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}
