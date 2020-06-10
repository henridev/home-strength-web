import React from "react"
import VacatureItem from "./VacatureItem"

export default function VacatureList({ edges }) {
  return (
    <div className="vacature-lijst w-full overflow-y-scroll  flex flex-col items-start px-3">
      {edges.map(({ node }) => {
        return <VacatureItem node={node} />
      })}
    </div>
  )
}
