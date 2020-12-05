/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getVacature
// ====================================================

export interface getVacature_contentfulVacature_body {
  json: any | null;
}

export interface getVacature_contentfulVacature_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface getVacature_contentfulVacature_afbeelding {
  fluid: getVacature_contentfulVacature_afbeelding_fluid | null;
}

export interface getVacature_contentfulVacature {
  startdatum: any | null;
  createdAt: any | null;
  slug: string | null;
  titel: string | null;
  contentful_id: string | null;
  body: getVacature_contentfulVacature_body | null;
  afbeelding: getVacature_contentfulVacature_afbeelding | null;
}

export interface getVacature {
  contentfulVacature: getVacature_contentfulVacature | null;
}

export interface getVacatureVariables {
  slug: string;
}
