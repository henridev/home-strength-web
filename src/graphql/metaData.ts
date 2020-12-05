import {graphql} from "gatsby";

export const queryMetaData = graphql`
  query queryMetaData{
    site {
      siteMetadata {
        author
      }
    }
  }
`;