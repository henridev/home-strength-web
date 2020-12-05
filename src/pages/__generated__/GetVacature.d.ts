/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVacature
// ====================================================

export interface GetVacature_allContentfulVacature_edges_node_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetVacature_allContentfulVacature_edges_node_afbeelding {
  fluid: GetVacature_allContentfulVacature_edges_node_afbeelding_fluid | null;
}

export interface GetVacature_allContentfulVacature_edges_node {
  startdatum: any | null;
  slug: string | null;
  titel: string | null;
  createdAt: any | null;
  contentful_id: string | null;
  afbeelding: GetVacature_allContentfulVacature_edges_node_afbeelding | null;
}

export interface GetVacature_allContentfulVacature_edges {
  node: GetVacature_allContentfulVacature_edges_node;
}

export interface GetVacature_allContentfulVacature {
  edges: GetVacature_allContentfulVacature_edges[];
}

export interface GetVacature {
  allContentfulVacature: GetVacature_allContentfulVacature;
}
