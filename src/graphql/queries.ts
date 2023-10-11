/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userInvitations = /* GraphQL */ `
  query UserInvitations($limit: Int) {
    userInvitations(limit: $limit) {
      organization
      user
      status
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
        createdAt
      }
      resolvers {
        name
        description
        urn
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
        createdAt
      }
      resolvers {
        name
        description
        urn
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
      createdAt
      tokens {
        ... on Raw_Token_color {
          description
          name
          value
          urn
          setUrn
          extensions
          type
        }
        ... on Raw_Token_scalar {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_typography {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_border {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_boxShadow {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
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
      createdAt
      tokens {
        ... on Raw_Token_color {
          description
          name
          value
          urn
          setUrn
          extensions
          type
        }
        ... on Raw_Token_scalar {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_typography {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_border {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
        ... on Raw_Token_boxShadow {
          description
          name
          value
          urn
          extensions
          setUrn
          type
        }
      }
    }
  }
`;
export const token = /* GraphQL */ `
  query Token($urn: String!) {
    token(urn: $urn) {
      ... on Raw_Token_color {
        description
        name
        value
        urn
        setUrn
        extensions
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_scalar {
        description
        name
        value
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_typography {
        description
        name
        value
        typography {
          fontFamily
          fontWeight
          letterSpacing
          lineHeight
          fontSize
          paragraphIndent
          paragraphSpacing
          textCase
          textDecoration
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_border {
        description
        name
        value
        border {
          color
          style
          width
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_boxShadow {
        description
        name
        value
        boxShadow {
          x
          y
          blur
          spread
          color
          type
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
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
      ... on Raw_Token_color {
        description
        name
        value
        urn
        setUrn
        extensions
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_scalar {
        description
        name
        value
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_typography {
        description
        name
        value
        typography {
          fontFamily
          fontWeight
          letterSpacing
          lineHeight
          fontSize
          paragraphIndent
          paragraphSpacing
          textCase
          textDecoration
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_border {
        description
        name
        value
        border {
          color
          style
          width
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
      }
      ... on Raw_Token_boxShadow {
        description
        name
        value
        boxShadow {
          x
          y
          blur
          spread
          color
          type
        }
        urn
        extensions
        setUrn
        metadata {
          createdAt
        }
        type
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
  query Resolve($resolver: String!, $modifiers: [ResolverModifierValueInput]) {
    resolve(resolver: $resolver, modifiers: $modifiers) {
      ... on Token_color {
        description
        name
        value
        type
        metadata {
          createdAt
        }
      }
      ... on Token_scalar {
        description
        name
        value
        type
        metadata {
          createdAt
        }
      }
      ... on Token_typography {
        description
        name
        value
        typography {
          fontFamily
          fontWeight
          letterSpacing
          lineHeight
          fontSize
          paragraphIndent
          paragraphSpacing
          textCase
          textDecoration
        }
        metadata {
          createdAt
        }
        type
      }
      ... on Token_border {
        description
        name
        value
        border {
          color
          style
          width
        }
        metadata {
          createdAt
        }
        type
      }
      ... on Token_boxShadow {
        description
        name
        value
        boxShadow {
          x
          y
          blur
          spread
          color
          type
        }
        metadata {
          createdAt
        }
        type
      }
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
      urn
      sources {
        urn
        version
        branch
      }
      modifiers {
        name
        alias
        default
        type
      }
      release {
        urn
        name
        version
        description
        createdAt
      }
    }
  }
`;
export const resolver = /* GraphQL */ `
  query Resolver($urn: String!) {
    resolver(urn: $urn) {
      name
      description
      urn
      sources {
        urn
        version
        branch
      }
      modifiers {
        name
        alias
        default
        type
      }
      release {
        urn
        name
        version
        description
        createdAt
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
