import {useStaticQuery, graphql} from 'gatsby'
import {SiteMetaData} from "./__generated__/SiteMetaData";

 const useSiteMetadata = () => {
	const siteMetadata = useStaticQuery<SiteMetaData>(
		graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
	)
	return siteMetadata
}

export default useSiteMetadata