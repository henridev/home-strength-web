/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetaData
// ====================================================

export interface SiteMetaData_site_siteMetadata {
  title: string | null;
  siteUrl: string | null;
}

export interface SiteMetaData_site {
  siteMetadata: SiteMetaData_site_siteMetadata | null;
}

export interface SiteMetaData {
  site: SiteMetaData_site | null;
}
