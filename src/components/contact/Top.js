import React from "react"

export default function Top() {
  return (
    <>
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
          Heeft u een vraag of opmerking? Aarzel niet en neem contact met ons op
        </span>
        <br />
      </h2>
    </>
  )
}
