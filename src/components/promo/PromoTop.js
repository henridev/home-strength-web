import React from "react"

export default function PromoTop() {
  return (
    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
      <div className="bg-red-dark text-grey w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
          Promoties
        </a>
        <div className="flex items-center" id="store-nav-content"></div>
      </div>
    </nav>
  )
}
