/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContent
// ====================================================

export interface GetContent_allContentfulTroeven_edges_node_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetContent_allContentfulTroeven_edges_node_afbeelding {
  fluid: GetContent_allContentfulTroeven_edges_node_afbeelding_fluid | null;
}

export interface GetContent_allContentfulTroeven_edges_node {
  titel: string | null;
  beschrijving: string | null;
  afbeelding: GetContent_allContentfulTroeven_edges_node_afbeelding | null;
}

export interface GetContent_allContentfulTroeven_edges {
  node: GetContent_allContentfulTroeven_edges_node;
}

export interface GetContent_allContentfulTroeven {
  edges: GetContent_allContentfulTroeven_edges[];
}

export interface GetContent_allContentfulSpotlight_edges_node_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetContent_allContentfulSpotlight_edges_node_afbeelding {
  fluid: GetContent_allContentfulSpotlight_edges_node_afbeelding_fluid | null;
}

export interface GetContent_allContentfulSpotlight_edges_node {
  afbeelding: GetContent_allContentfulSpotlight_edges_node_afbeelding | null;
  titel: string | null;
}

export interface GetContent_allContentfulSpotlight_edges {
  node: GetContent_allContentfulSpotlight_edges_node;
}

export interface GetContent_allContentfulSpotlight {
  edges: GetContent_allContentfulSpotlight_edges[];
}

export interface GetContent {
  allContentfulTroeven: GetContent_allContentfulTroeven;
  allContentfulSpotlight: GetContent_allContentfulSpotlight;
}
