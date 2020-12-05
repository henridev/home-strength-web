import {useStaticQuery, graphql} from 'gatsby'
import {GetContent} from "./__generated__/GetContent";

const useContent = () => {
	const content = useStaticQuery<GetContent>(
    graphql`
    query GetContent {
      allContentfulTroeven {
        edges {
          node {
            titel
            beschrijving
            afbeelding {
              fluid(maxWidth: 444, maxHeight: 342) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulSpotlight {
        edges {
          node {
            afbeelding {
              fluid(maxWidth: 300, maxHeight: 400) {
                ...GatsbyContentfulFluid
              }
            }
            titel
          }
        }
      }
    }
  `
	)
	return content
}

export default useContent