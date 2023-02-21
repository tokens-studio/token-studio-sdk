/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const groups = /* GraphQL */ `
  query Groups($organization: String!) {
    groups(organization: $organization) {
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
export const organization = /* GraphQL */ `
  query Organization($organization: String!) {
    organization(organization: $organization) {
      name
      urn
    }
  }
`;
export const organizationAdmin = /* GraphQL */ `
  query OrganizationAdmin($organization: String) {
    organizationAdmin(organization: $organization) {
      account
      created
      description
      icon
      name
      payment
      ssoEnabled
      tier
      visibility
    }
  }
`;
export const organizations = /* GraphQL */ `
  query Organizations($offset: Int) {
    organizations(offset: $offset) {
      name
      urn
    }
  }
`;
export const policies = /* GraphQL */ `
  query Policies($first: Int, $organization: String!) {
    policies(first: $first, organization: $organization) {
      created
      description
      name
      value {
        version
      }
    }
  }
`;
export const projects = /* GraphQL */ `
  query Projects($organization: String!) {
    projects(organization: $organization) {
      created
      name
      urn
    }
  }
`;
export const resolve = /* GraphQL */ `
  query Resolve($resolver: String!) {
    resolve(resolver: $resolver) {
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
export const resolvers = /* GraphQL */ `
  query Resolvers($project: String!) {
    resolvers(project: $project) {
      description
      name
      urn
    }
  }
`;
export const self = /* GraphQL */ `
  query Self {
    self {
      authenticated
      urn
    }
  }
`;
export const token = /* GraphQL */ `
  query Token($urn: String) {
    token(urn: $urn) {
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
export const tokenSet = /* GraphQL */ `
  query TokenSet($urn: String) {
    tokenSet(urn: $urn) {
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
export const tokenSets = /* GraphQL */ `
  query TokenSets($project: String!) {
    tokenSets(project: $project) {
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
export const tokens = /* GraphQL */ `
  query Tokens($set: String!) {
    tokens(set: $set) {
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
export const userInvitations = /* GraphQL */ `
  query UserInvitations {
    userInvitations {
      organization
      status
      user
    }
  }
`;
