import React from 'react'
// import Img from 'gatsby-image'
// import {graphql} from 'gatsby'
// import {Link} from 'gatsby'
import Layout from '../blocs/common/components/Layout'
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export default function vacature() {
	// const options = {
	// 	renderNode: {
	// 		'embedded-asset-block': node => {
	// 			const alt = node.data.target.fields.title['en-US']
	// 			const url = node.data.target.fields.file['en-US'].url
	// 			return <img alt={alt} src={url} />
	// 		}
	// 	}
	// }
	// const post = data.contentfulVacature
	return (
		<Layout title="vacature">
			{/* <div className="container vacature-template rounded bg-blue bg-opacity-25 p-4">
				<h1>{post.title}</h1>
				<Img
					className="mx-auto border-none max-w-screen-sm h-auto rounded-lg"
					fluid={post.afbeelding.fluid}
				/>
				<small>gepost: {post.startdatum}</small>
				{documentToReactComponents(post.body.json, options)}
				<div className="mt-4">
					<Link to="/vacatures">
						<button className="font-semibold m-3 text-red-dark bg-white hover:bg-grey  hover: rounded shadow hover:shadow-lg py-2 px-4   hover:border-grey">
              terug naar vacatures
						</button>
					</Link>
					<Link to={'/solliciteren'}>
						<button className="font-semibold m-3 text-red-dark bg-white hover:bg-grey  hover: rounded shadow hover:shadow-lg py-2 px-4   hover:border-grey">
              ik heb interesse
						</button>
					</Link>
				</div>
			</div> */}
		</Layout>
	)
}

// export const query = graphql`
//   query getVacature($slug: String!) {
//     contentfulVacature(slug: { eq: $slug }) {
//       startdatum(fromNow: true, locale: "NL")
//       createdAt
//       slug
//       titel
//       contentful_id
//       body {
//         json
//       }
//       afbeelding {
//         fluid(maxWidth: 350, maxHeight: 250) {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `
