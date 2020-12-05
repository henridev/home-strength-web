/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMain
// ====================================================

export interface GetMain_allContentfulTroeven_edges_node_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetMain_allContentfulTroeven_edges_node_afbeelding {
  fluid: GetMain_allContentfulTroeven_edges_node_afbeelding_fluid | null;
}

export interface GetMain_allContentfulTroeven_edges_node {
  titel: string | null;
  beschrijving: string | null;
  afbeelding: GetMain_allContentfulTroeven_edges_node_afbeelding | null;
}

export interface GetMain_allContentfulTroeven_edges {
  node: GetMain_allContentfulTroeven_edges_node;
}

export interface GetMain_allContentfulTroeven {
  edges: GetMain_allContentfulTroeven_edges[];
}

export interface GetMain_allContentfulSpotlight_edges_node_afbeelding_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface GetMain_allContentfulSpotlight_edges_node_afbeelding {
  fluid: GetMain_allContentfulSpotlight_edges_node_afbeelding_fluid | null;
}

export interface GetMain_allContentfulSpotlight_edges_node {
  afbeelding: GetMain_allContentfulSpotlight_edges_node_afbeelding | null;
  titel: string | null;
}

export interface GetMain_allContentfulSpotlight_edges {
  node: GetMain_allContentfulSpotlight_edges_node;
}

export interface GetMain_allContentfulSpotlight {
  edges: GetMain_allContentfulSpotlight_edges[];
}

export interface GetMain {
  allContentfulTroeven: GetMain_allContentfulTroeven;
  allContentfulSpotlight: GetMain_allContentfulSpotlight;
}
