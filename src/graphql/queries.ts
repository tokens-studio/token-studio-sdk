/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userInvitations = /* GraphQL */ `
  query UserInvitations($limit: Int) {
    userInvitations(limit: $limit) {
      organization
      user
      status
      urn
      confirmCode
    }
  }
`;
export const policies = /* GraphQL */ `
  query Policies($organization: String!, $limit: Int, $offset: Int) {
    policies(organization: $organization, limit: $limit, offset: $offset) {
      createdAt
      name
      urn
      description
      value {
        version
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
      urn
      createdAt
      owner {
        name
        givenName
        urn
        description
        icon
        visibility
      }
      name
      description
      visibility
      account
      payment
      ssoEnabled
      icon
      tier
      projects {
        createdAt
        name
        urn
        orgUrn
        visibility
        icon
        description
        releaseCount
        tokenCount
      }
      groups {
        organization
        createdAt
        name
        icon
        urn
        description
      }
      policies {
        createdAt
        name
        urn
        description
      }
      apiKeys {
        name
        lastUsed
        description
        urn
      }
      users {
        name
        givenName
        urn
        description
        icon
        visibility
      }
    }
  }
`;
export const projects = /* GraphQL */ `
  query Projects(
    $organization: String!
    $filter: ProjectFilterInput
    $limit: Int
    $offset: Int
  ) {
    projects(
      organization: $organization
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      createdBy {
        ... on User {
          name
          givenName
          urn
          description
          icon
          visibility
        }
        ... on APIKeyIdentity {
          name
          urn
        }
      }
      createdAt
      name
      urn
      orgUrn
      visibility
      icon
      description
      sets {
        urn
        name
        projectUrn
        type
        generatorUrn
        createdAt
      }
      resolvers {
        name
        description
        createdAt
        updatedAt
        urn
        graph
      }
      generators {
        urn
        name
        description
        createdAt
        updatedAt
        graph
      }
      releases {
        urn
        name
        version
        description
        createdAt
      }
      sdConfigs {
        urn
        name
        createdAt
        updatedAt
        projectUrn
        config
        functions
        default
      }
      themeGroups {
        urn
        name
        createdAt
        updatedAt
        projectUrn
        options
      }
      releaseCount
      tokenCount
    }
  }
`;
export const project = /* GraphQL */ `
  query Project($urn: String!) {
    project(urn: $urn) {
      createdBy {
        ... on User {
          name
          givenName
          urn
          description
          icon
          visibility
        }
        ... on APIKeyIdentity {
          name
          urn
        }
      }
      createdAt
      name
      urn
      orgUrn
      visibility
      icon
      description
      sets {
        urn
        name
        projectUrn
        type
        generatorUrn
        createdAt
      }
      resolvers {
        name
        description
        createdAt
        updatedAt
        urn
        graph
      }
      generators {
        urn
        name
        description
        createdAt
        updatedAt
        graph
      }
      releases {
        urn
        name
        version
        description
        createdAt
      }
      sdConfigs {
        urn
        name
        createdAt
        updatedAt
        projectUrn
        config
        functions
        default
      }
      themeGroups {
        urn
        name
        createdAt
        updatedAt
        projectUrn
        options
      }
      releaseCount
      tokenCount
    }
  }
`;
export const groups = /* GraphQL */ `
  query Groups(
    $organization: String!
    $filter: GroupFilterInput
    $limit: Int
    $offset: Int
  ) {
    groups(
      organization: $organization
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      organization
      createdAt
      name
      icon
      urn
      description
      members {
        ... on User {
          name
          givenName
          urn
          description
          icon
          visibility
        }
        ... on APIKeyIdentity {
          name
          urn
        }
      }
      policy {
        createdAt
        name
        urn
        description
      }
    }
  }
`;
export const tokenSet = /* GraphQL */ `
  query TokenSet($urn: String!) {
    tokenSet(urn: $urn) {
      urn
      metadata {
        createdAt
      }
      name
      projectUrn
      type
      generatorUrn
      createdAt
      tokens {
        description
        name
        urn
        extensions
        setUrn
        type
      }
    }
  }
`;
export const tokenSets = /* GraphQL */ `
  query TokenSets(
    $project: String!
    $limit: Int
    $offset: Int
    $filter: TokenSetsFilterInput
  ) {
    tokenSets(
      project: $project
      limit: $limit
      offset: $offset
      filter: $filter
    ) {
      urn
      metadata {
        createdAt
      }
      name
      projectUrn
      type
      generatorUrn
      createdAt
      tokens {
        description
        name
        urn
        extensions
        setUrn
        type
      }
    }
  }
`;
export const token = /* GraphQL */ `
  query Token($urn: String!) {
    token(urn: $urn) {
      description
      name
      urn
      extensions
      setUrn
      metadata {
        createdAt
      }
      type
      value {
        ... on Raw_Token_scalar {
          value
        }
        ... on Raw_Token_typography {
          value
        }
        ... on Raw_Token_border {
          value
        }
        ... on Raw_Token_boxShadow {
          value
        }
      }
    }
  }
`;
export const tokens = /* GraphQL */ `
  query Tokens(
    $set: String!
    $filter: TokenFilterInput
    $limit: Int
    $offset: Int
  ) {
    tokens(set: $set, filter: $filter, limit: $limit, offset: $offset) {
      description
      name
      urn
      extensions
      setUrn
      metadata {
        createdAt
      }
      type
      value {
        ... on Raw_Token_scalar {
          value
        }
        ... on Raw_Token_typography {
          value
        }
        ... on Raw_Token_border {
          value
        }
        ... on Raw_Token_boxShadow {
          value
        }
      }
    }
  }
`;
export const self = /* GraphQL */ `
  query Self {
    self {
      identity {
        urn
        authenticated
      }
      invitations {
        organization
        user
        status
        urn
        confirmCode
      }
      user {
        name
        givenName
        urn
        description
        icon
        visibility
      }
      organizations {
        urn
        createdAt
        name
        description
        visibility
        account
        payment
        ssoEnabled
        icon
        tier
      }
      permissions {
        version
      }
    }
  }
`;
export const resolve = /* GraphQL */ `
  query Resolve($resolver: String!, $options: [ResolverOptionsInput]) {
    resolve(resolver: $resolver, options: $options) {
      description
      name
      value {
        ... on Token_border {
          value
        }
        ... on Token_boxShadow {
          value
        }
        ... on Token_scalar {
          value
        }
        ... on Token_typography {
          value
        }
      }
      type
    }
  }
`;
export const resolvers = /* GraphQL */ `
  query Resolvers(
    $project: String!
    $filter: ResolverFilterInput
    $limit: Int
    $offset: Int
  ) {
    resolvers(
      project: $project
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      name
      description
      createdAt
      updatedAt
      urn
      graph
      options {
        name
        description
        values
      }
    }
  }
`;
export const resolver = /* GraphQL */ `
  query Resolver($urn: String!) {
    resolver(urn: $urn) {
      name
      description
      createdAt
      updatedAt
      urn
      graph
      options {
        name
        description
        values
      }
    }
  }
`;
export const generator = /* GraphQL */ `
  query Generator($urn: String!) {
    generator(urn: $urn) {
      urn
      name
      description
      createdAt
      updatedAt
      graph
    }
  }
`;
export const generators = /* GraphQL */ `
  query Generators(
    $project: String!
    $filter: GeneratorFilterInput
    $limit: Int
    $offset: Int
  ) {
    generators(
      project: $project
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      urn
      name
      description
      createdAt
      updatedAt
      graph
    }
  }
`;
export const releases = /* GraphQL */ `
  query Releases(
    $project: String!
    $filter: ReleaseFilterInput
    $limit: Int
    $offset: Int
  ) {
    releases(
      project: $project
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      urn
      name
      version
      description
      tokenSets {
        path
        name
        type
      }
      generators {
        path
        name
        type
      }
      createdAt
      releasedBy {
        ... on User {
          name
          givenName
          urn
          description
          icon
          visibility
        }
        ... on APIKeyIdentity {
          name
          urn
        }
      }
    }
  }
`;
export const apiKeys = /* GraphQL */ `
  query ApiKeys(
    $organization: String!
    $filter: ApiKeyFilterInput
    $limit: Int
    $offset: Int
  ) {
    apiKeys(
      organization: $organization
      filter: $filter
      limit: $limit
      offset: $offset
    ) {
      name
      lastUsed
      description
      urn
    }
  }
`;
export const releaseCount = /* GraphQL */ `
  query ReleaseCount($project: String!) {
    releaseCount(project: $project)
  }
`;
export const tokenCount = /* GraphQL */ `
  query TokenCount($project: String!) {
    tokenCount(project: $project)
  }
`;
export const adminOrganizations = /* GraphQL */ `
  query AdminOrganizations(
    $filter: OrganizationFilterInput
    $limit: Int
    $offset: Int
  ) {
    adminOrganizations(filter: $filter, limit: $limit, offset: $offset) {
      urn
      name
      tier
      account
      createdAt
    }
  }
`;
export const adminOrganization = /* GraphQL */ `
  query AdminOrganization($urn: String!) {
    adminOrganization(urn: $urn) {
      urn
      name
      tier
      account
      createdAt
    }
  }
`;
