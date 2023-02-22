/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const acceptInvitation = /* GraphQL */ `
  mutation AcceptInvitation($urn: String!) {
    acceptInvitation(urn: $urn)
  }
`;
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
        ... on APIKeyIdentity {
          name
          urn
        }
        ... on User {
          description
          icon
          name
          urn
          visibility
        }
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
      account
      created
      description
      groups {
        created
        description
        name
      }
      icon
      name
      payment
      projects {
        created
        description
        icon
        name
        urn
        visibility
      }
      ssoEnabled
      tier
      urn
      visibility
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
      description
      icon
      name
      sets {
        name
        projectUrn
        urn
      }
      urn
      visibility
    }
  }
`;
export const createRelease = /* GraphQL */ `
  mutation CreateRelease($input: ReleaseInput!, $resolver: String!) {
    createRelease(input: $input, resolver: $resolver) {
      created
      releasedBy {
        ... on APIKeyIdentity {
          name
          urn
        }
        ... on User {
          description
          icon
          name
          urn
          visibility
        }
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
      version
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
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
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
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
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
export const declineInvitation = /* GraphQL */ `
  mutation DeclineInvitation($urn: String!) {
    declineInvitation(urn: $urn)
  }
`;
export const deleteAPIKey = /* GraphQL */ `
  mutation DeleteAPIKey($urn: String!) {
    deleteAPIKey(urn: $urn) {
      description
      name
      value
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup($urn: String!) {
    deleteGroup(urn: $urn) {
      created
      description
      members {
        ... on APIKeyIdentity {
          name
          urn
        }
        ... on User {
          description
          icon
          name
          urn
          visibility
        }
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation($urn: String!) {
    deleteInvitation(urn: $urn) {
      organization
      status
      user
    }
  }
`;
export const deletePolicy = /* GraphQL */ `
  mutation DeletePolicy($urn: String!) {
    deletePolicy(urn: $urn) {
      created
      description
      name
      value {
        version
      }
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($urn: String!) {
    deleteProject(urn: $urn) {
      created
      description
      icon
      name
      sets {
        name
        projectUrn
        urn
      }
      urn
      visibility
    }
  }
`;
export const deleteResolver = /* GraphQL */ `
  mutation DeleteResolver($urn: String!) {
    deleteResolver(urn: $urn) {
      description
      name
      urn
    }
  }
`;
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken($urn: String!) {
    deleteToken(urn: $urn) {
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
    }
  }
`;
export const deleteTokenSet = /* GraphQL */ `
  mutation DeleteTokenSet($urn: String!) {
    deleteTokenSet(urn: $urn) {
      metadata {
        created
      }
      name
      project {
        created
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
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
export const inviteToOrganization = /* GraphQL */ `
  mutation InviteToOrganization($organization: String!, $user: String!) {
    inviteToOrganization(organization: $organization, user: $user) {
      organization
      status
      user
    }
  }
`;
export const regenerateApiKey = /* GraphQL */ `
  mutation RegenerateApiKey($urn: String!) {
    regenerateApiKey(urn: $urn) {
      description
      name
      value
    }
  }
`;
export const removeFromOrganization = /* GraphQL */ `
  mutation RemoveFromOrganization($organization: String!, $user: String!) {
    removeFromOrganization(organization: $organization, user: $user)
  }
`;
export const removeMemberFromGroup = /* GraphQL */ `
  mutation RemoveMemberFromGroup($group: String!, $user: String!) {
    removeMemberFromGroup(group: $group, user: $user)
  }
`;
export const updatePolicy = /* GraphQL */ `
  mutation UpdatePolicy($input: PolicyInput!, $urn: String!) {
    updatePolicy(input: $input, urn: $urn) {
      created
      description
      name
      value {
        version
      }
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: ProjectInput!, $urn: String!) {
    updateProject(input: $input, urn: $urn) {
      created
      description
      icon
      name
      sets {
        name
        projectUrn
        urn
      }
      urn
      visibility
    }
  }
`;
export const updateResolver = /* GraphQL */ `
  mutation UpdateResolver($input: ResolverInput!, $urn: String!) {
    updateResolver(input: $input, urn: $urn) {
      description
      name
      urn
    }
  }
`;
export const updateToken = /* GraphQL */ `
  mutation UpdateToken($input: TokenInput!, $urn: String!) {
    updateToken(input: $input, urn: $urn) {
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
    }
  }
`;
export const updateTokenSet = /* GraphQL */ `
  mutation UpdateTokenSet($input: TokenSetInput!, $urn: String!) {
    updateTokenSet(input: $input, urn: $urn) {
      metadata {
        created
      }
      name
      project {
        created
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
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
