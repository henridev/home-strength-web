/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_contentfulProduct_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetProducts_contentfulProduct_afbeelding {
  fluid: GetProducts_contentfulProduct_afbeelding_fluid | null;
}

export interface GetProducts_contentfulProduct {
  afbeelding: GetProducts_contentfulProduct_afbeelding | null;
  contentful_id: string | null;
  slug: string | null;
  prijs: number | null;
  omschrijving: string | null;
  ingredienten: (string | null)[] | null;
  categorie: string | null;
  naam: string | null;
}

export interface GetProducts_site_siteMetadata {
  siteUrl: string | null;
}

export interface GetProducts_site {
  siteMetadata: GetProducts_site_siteMetadata | null;
}

export interface GetProducts {
  contentfulProduct: GetProducts_contentfulProduct | null;
  site: GetProducts_site | null;
}

export interface GetProductsVariables {
  slug: string;
}
