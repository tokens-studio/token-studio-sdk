/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewGroup = /* GraphQL */ `
  subscription OnNewGroup($organization: String!) {
    onNewGroup(organization: $organization) {
      created
      description
      members {
        name
        urn
      }
      name
      policy {
        created
        description
        name
      }
    }
  }
`;
export const onNewToken = /* GraphQL */ `
  subscription OnNewToken($set: String!) {
    onNewToken(set: $set) {
      ... on Token_Composition {
        description
        metadata {
          created
        }
        name
        type
        value
      }
      ... on Token_Other {
        description
        metadata {
          created
        }
        name
        type
        value
      }
      ... on Token_Typography {
        description
        metadata {
          created
        }
        name
        type
        value
      }
      ... on Token_color {
        description
        metadata {
          created
        }
        name
        type
        value
      }
      ... on Token_sizing {
        description
        metadata {
          created
        }
        name
        type
        value
      }
    }
  }
`;
export const onNewTokenSet = /* GraphQL */ `
  subscription OnNewTokenSet($project: String!) {
    onNewTokenSet(project: $project) {
      metadata {
        created
      }
      name
      project {
        created
        name
        urn
      }
      tokens {
        ... on Token_Composition {
          description
          name
          type
          value
        }
        ... on Token_Other {
          description
          name
          type
          value
        }
        ... on Token_Typography {
          description
          name
          type
          value
        }
        ... on Token_color {
          description
          name
          type
          value
        }
        ... on Token_sizing {
          description
          name
          type
          value
        }
      }
      urn
    }
  }
`;
export const onTokenDeleted = /* GraphQL */ `
  subscription OnTokenDeleted($urn: String!) {
    onTokenDeleted(urn: $urn) {
      urn
    }
  }
`;
