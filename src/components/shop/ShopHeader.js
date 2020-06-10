import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

export default function ShopHeader({ filters, setFilters }) {
  function handleFilterChange(name) {
    const newFilters = filters.map(filter => {
      if (filter.name === name) {
        filter.isChecked = !filter.isChecked
      }
      return filter
    })
    setFilters(newFilters)
    console.log("newFilters", newFilters)
  }

  return (
    <nav id="store" className="w-full bg-red-dark  top-0 px-6 py-1">
      <div className="text-grey w-full  mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl ">
          Uw delhaize van nabij
        </a>
        <div className="text-xl dropdown inline-block relative z-10">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Filter</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className=" text-black text-base border rounded bg-white dropdown-menu absolute hidden text-gray-700 pt-1">
            {filters.map((filter, i) => {
              return (
                <li
                  key={i}
                  className={`m-1 ${
                    i === filters.length - 1 ? "" : "border-b-2 border-gray"
                  }`}
                >
                  <a
                    className="rounded-t py-1 px-3 block whitespace-no-wrap"
                    href="#"
                  >
                    <input
                      className="m-3"
                      type="checkbox"
                      name={filter.name}
                      checked={filter.isChecked}
                      onChange={e => handleFilterChange(filter.name)}
                    />
                    <label
                      for={filter.name}
                      onClick={e => handleFilterChange(filter.name)}
                    >
                      {filter.name}
                    </label>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

ShopHeader.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  setFilters: PropTypes.func,
}
