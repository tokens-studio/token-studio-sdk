/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addMemberToGroup = /* GraphQL */ `
  mutation AddMemberToGroup($group: String!, $user: String!) {
    addMemberToGroup(group: $group, user: $user)
  }
`;
export const createAPIKey = /* GraphQL */ `
  mutation CreateAPIKey($name: String, $organization: String!) {
    createAPIKey(name: $name, organization: $organization) {
      description
      name
      value
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup($input: GroupInput!, $organization: String!) {
    createGroup(input: $input, organization: $organization) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization($input: OrganizationInput!) {
    createOrganization(input: $input) {
      name
      urn
    }
  }
`;
export const createPolicy = /* GraphQL */ `
  mutation CreatePolicy($input: PolicyInput!, $organization: String!) {
    createPolicy(input: $input, organization: $organization) {
      created
      description
      name
      value {
        version
      }
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject($input: ProjectInput!, $organization: String!) {
    createProject(input: $input, organization: $organization) {
      created
      name
      urn
    }
  }
`;
export const createResolver = /* GraphQL */ `
  mutation CreateResolver($input: ResolverInput!, $project: String!) {
    createResolver(input: $input, project: $project) {
      description
      name
      urn
    }
  }
`;
export const createToken = /* GraphQL */ `
  mutation CreateToken($input: TokenInput!, $set: String!) {
    createToken(input: $input, set: $set) {
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
export const createTokenSet = /* GraphQL */ `
  mutation CreateTokenSet($input: TokenSetInput!, $project: String!) {
    createTokenSet(input: $input, project: $project) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup($urn: String!) {
    deleteGroup(urn: $urn) {
      urn
    }
  }
`;
export const deletePolicy = /* GraphQL */ `
  mutation DeletePolicy($urn: String!) {
    deletePolicy(urn: $urn) {
      urn
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($urn: String!) {
    deleteProject(urn: $urn) {
      urn
    }
  }
`;
export const deleteResolver = /* GraphQL */ `
  mutation DeleteResolver($urn: String!) {
    deleteResolver(urn: $urn) {
      urn
    }
  }
`;
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken($urn: String!) {
    deleteToken(urn: $urn) {
      urn
    }
  }
`;
export const deleteTokenSet = /* GraphQL */ `
  mutation DeleteTokenSet($urn: String!) {
    deleteTokenSet(urn: $urn) {
      urn
    }
  }
`;
export const inviteToOrganization = /* GraphQL */ `
  mutation InviteToOrganization($organization: String!, $user: String!) {
    inviteToOrganization(organization: $organization, user: $user) {
      organization
      status
      user
    }
  }
`;
