import React from "react"

export default function Top() {
  return (
    <>
      <div
        style={{
          backgroundImage: `Url(/assets/svg/team.svg)`,
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
        Sluit je aan bij ons team
        <br />
        <span class="text-red-dark text-xl ">
          Spreekt een toffe werkomgeving, verantwoordelijkheidsgevoel en social
          contact je aan neem dan contact op
        </span>
        <br />
      </h2>
    </>
  )
}
