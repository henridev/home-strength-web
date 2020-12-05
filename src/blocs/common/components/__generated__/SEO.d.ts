/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEO
// ====================================================

export interface SEO_site_siteMetadata {
  defaultTitle: string | null;
  defaultDescription: string | null;
  defaultKeywords: (string | null)[] | null;
  author: string | null;
  titleTemplate: string | null;
  siteUrl: string | null;
}

export interface SEO_site {
  siteMetadata: SEO_site_siteMetadata | null;
}

export interface SEO {
  site: SEO_site | null;
}
