/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const groups = /* GraphQL */ `
  query Groups(
    $filter: GroupFilterInput
    $limit: Int
    $offset: Int
    $organization: String!
  ) {
    groups(
      filter: $filter
      limit: $limit
      offset: $offset
      organization: $organization
    ) {
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
export const organizations = /* GraphQL */ `
  query Organizations(
    $filter: OrganizationFilterInput
    $limit: Int
    $offset: Int
  ) {
    organizations(filter: $filter, limit: $limit, offset: $offset) {
      account
      apiKeys {
        description
        name
        urn
      }
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
      policies {
        created
        description
        name
      }
      projects {
        created
        description
        icon
        name
        orgUrn
        urn
        visibility
      }
      ssoEnabled
      tier
      urn
      users {
        description
        icon
        name
        urn
        visibility
      }
      visibility
    }
  }
`;
export const policies = /* GraphQL */ `
  query Policies($limit: Int, $offset: Int, $organization: String!) {
    policies(limit: $limit, offset: $offset, organization: $organization) {
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
  query Projects(
    $filter: ProjectFilterInput
    $limit: Int
    $offset: Int
    $organization: String!
  ) {
    projects(
      filter: $filter
      limit: $limit
      offset: $offset
      organization: $organization
    ) {
      created
      description
      icon
      name
      orgUrn
      resolvers {
        description
        name
        urn
      }
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
export const resolve = /* GraphQL */ `
  query Resolve($aliases: [AliasTuple], $resolver: String!) {
    resolve(aliases: $aliases, resolver: $resolver) {
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
      ... on Token_scalar {
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
  query Resolvers($limit: Int, $offset: Int, $project: String!) {
    resolvers(limit: $limit, offset: $offset, project: $project) {
      description
      name
      release {
        created
        urn
        version
      }
      tokens {
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
        ... on Token_scalar {
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
export const self = /* GraphQL */ `
  query Self {
    self {
      identity {
        authenticated
        urn
      }
      invitations {
        organization
        status
        user
      }
      organizations {
        account
        created
        description
        icon
        name
        payment
        ssoEnabled
        tier
        urn
        visibility
      }
      user {
        description
        icon
        name
        urn
        visibility
      }
    }
  }
`;
export const token = /* GraphQL */ `
  query Token($urn: String!) {
    token(urn: $urn) {
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
export const tokenSet = /* GraphQL */ `
  query TokenSet($urn: String!) {
    tokenSet(urn: $urn) {
      metadata {
        created
      }
      name
      project {
        created
        description
        icon
        name
        orgUrn
        urn
        visibility
      }
      projectUrn
      tokens {
        ... on Raw_Token_color {
          description
          name
          setUrn
          type
          urn
          value
        }
        ... on Raw_Token_scalar {
          description
          name
          setUrn
          type
          urn
          value
        }
      }
      urn
    }
  }
`;
export const tokenSets = /* GraphQL */ `
  query TokenSets($limit: Int, $offset: Int, $project: String!) {
    tokenSets(limit: $limit, offset: $offset, project: $project) {
      metadata {
        created
      }
      name
      project {
        created
        description
        icon
        name
        orgUrn
        urn
        visibility
      }
      projectUrn
      tokens {
        ... on Raw_Token_color {
          description
          name
          setUrn
          type
          urn
          value
        }
        ... on Raw_Token_scalar {
          description
          name
          setUrn
          type
          urn
          value
        }
      }
      urn
    }
  }
`;
export const tokens = /* GraphQL */ `
  query Tokens(
    $filter: TokenFilterInput
    $limit: Int
    $offset: Int
    $set: String!
  ) {
    tokens(filter: $filter, limit: $limit, offset: $offset, set: $set) {
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
export const userInvitations = /* GraphQL */ `
  query UserInvitations($limit: Int) {
    userInvitations(limit: $limit) {
      organization
      status
      user
    }
  }
`;
