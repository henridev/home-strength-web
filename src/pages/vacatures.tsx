/* #region  Imports */
import React from "react"
// import { graphql } from "gatsby"
import Layout from "../blocs/common/components/Layout"
// import VacatureHeader from "../components/vacature/VacatureHeader"
// import VacatureList from "../components/vacature/VacatureList"
/* #endregion */

export default function Vacatures() {
  return (
    <div>
      <Layout title="vacatures">
        {/* <VacatureHeader title="vacatures" />
        <div className="m-4"></div>
        <VacatureList edges={data.allContentfulVacature.edges} /> */}
      </Layout>
    </div>
  )
}

// export const query = graphql`
//   query GetVacature{
//     allContentfulVacature(sort: { fields: createdAt, order: DESC }) {
//       edges {
//         node {
//           startdatum(fromNow: true, locale: "NL")
//           slug
//           titel
//           createdAt
//           contentful_id
//           afbeelding {
//             fluid(maxWidth: 444, maxHeight: 342) {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
