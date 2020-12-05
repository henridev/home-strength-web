import React, {ReactElement, FC} from "react";
// import {Helmet} from "react-helmet";
// import {useLocation} from "@reach/router";
// import {useStaticQuery, graphql} from "gatsby";

type Props = {title: string; description?: string; keywords?: Array<string>; article?: any};

const SEO: FC<Props> = ({}): ReactElement => {
  // const {pathname} = useLocation();
  // const {site} = useStaticQuery(query);

  // const {
  //   defaultTitle,
  //   defaultDescription,
  //   defaultKeywords,
  //   author,
  //   titleTemplate,

  //   siteUrl,
  // } = site.siteMetadata;

  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   author: author,
  //   titleTemplate: titleTemplate,
  //   url: `${siteUrl}${pathname}`,
  //   keywords: keywords || defaultKeywords,
  // };
  return <></>
  // return (
  //   <Helmet title={`${seo.title} | ${defaultTitle}`}>
  //     <meta name="description" content={seo.description} />
  //     {/* <meta name="image" content={seo.image} /> */}
  //     {seo.url && <meta property="og:url" content={seo.url} />}
  //     {(article ? true : null) && <meta property="og:type" content="article" />}
  //     {seo.title && <meta property="og:title" content={seo.title} />}
  //     {seo.description && <meta property="og:description" content={seo.description} />}
  //     {seo.keywords && <meta property="og:keywords" content={seo.keywords.join(",")} />}
  //   </Helmet>
  // );
};

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         defaultDescription: description
//         defaultKeywords: keywords
//         author
//         titleTemplate
//         siteUrl: url
//       }
//     }
//   }
// `;

export default SEO;
