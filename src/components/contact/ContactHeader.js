import React from "react"

export default function ContactHeader() {
  return (
    <>
      <div
        style={{
          backgroundImage: `Url(/assets/svg/contact.svg)`,
        }}
        className="contact-background"
      ></div>
      <h2 class=" text-3xl m-3 text- sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
        contacteer ons
        <br />
        <span class="text-red-dark text-xl ">
          Heeft u een vraag of opmerking? Aarzel niet en neem contact met ons op
        </span>
        <br />
      </h2>
    </>
  )
}
