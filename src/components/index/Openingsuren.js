import React, { useEffect, useState } from "react"

export default function Openingsuren() {
  const [highlight, setHighlight] = useState({
    index: 0,
    isOpen: null,
  })

  useEffect(() => {
    checkDate()
    return () => {}
  }, [])

  function checkDate() {
    const today = new Date()
    const day = today.getDay()
    const hour = today.getHours()

    if (day !== 1 && day !== 5) {
      if (8 <= hour && hour < 20) {
        setHighlight({
          index: 1,
          isOpen: true,
        })
      } else {
        setHighlight({
          index: 1,
          isOpen: false,
        })
      }
    } else if (day === 7) {
      if (8 <= hour && hour < 13) {
        setHighlight({
          index: 2,
          isOpen: true,
        })
      } else {
        setHighlight({
          index: 2,
          isOpen: false,
        })
      }
    } else if (day === 1) {
      if (13 <= hour && hour < 20) {
        setHighlight({
          index: 3,
          isOpen: true,
        })
      } else {
        setHighlight({
          index: 3,
          isOpen: false,
        })
      }
    }
  }

  return (
    <div className="flex ">
      <div className=" flex-1 px-4 py-2 text-center">
        <h1 className="my-4 font-semibold text-2xl">openingsuren</h1>
        <ul className="sm:text-lg text-gray-900 font-semibold mb-4">
          <li
            className={
              highlight.index === 1
                ? `current-day-${highlight.isOpen ? "open" : "closed"}`
                : `other-day`
            }
          >
            dinsdag tot en met zaterdag: van 8u tot 20u
          </li>
          <li
            className={
              highlight.index === 1
                ? `current-day-${highlight.isOpen ? "open" : "closed"}`
                : `other-day`
            }
          >
            zondag: van 8u tot 13u
          </li>
          <li
            className={
              highlight.index === 1
                ? `current-day-${highlight.isOpen ? "open" : "closed"}`
                : `other-day`
            }
          >
            maandag: van 13u tot 20u
          </li>
        </ul>
      </div>
    </div>
  )
}
