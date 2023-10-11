/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject($organization: String!, $input: ProjectInput!) {
    createProject(organization: $organization, input: $input) {
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
export const createPolicy = /* GraphQL */ `
  mutation CreatePolicy($organization: String!, $input: PolicyInput!) {
    createPolicy(organization: $organization, input: $input) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup($organization: String!, $input: GroupInput!) {
    createGroup(organization: $organization, input: $input) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization($input: OrganizationInput!) {
    createOrganization(input: $input) {
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
export const createAPIKey = /* GraphQL */ `
  mutation CreateAPIKey($organization: String!, $input: APIKeyInput!) {
    createAPIKey(organization: $organization, input: $input) {
      name
      description
      value
      urn
    }
  }
`;
export const createToken = /* GraphQL */ `
  mutation CreateToken($set: String!, $input: TokenInput!) {
    createToken(set: $set, input: $input) {
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
export const bulkCreateToken = /* GraphQL */ `
  mutation BulkCreateToken($set: String!, $input: [TokenInput]!) {
    bulkCreateToken(set: $set, input: $input) {
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
export const createTokenSet = /* GraphQL */ `
  mutation CreateTokenSet($project: String!, $input: TokenSetInput!) {
    createTokenSet(project: $project, input: $input) {
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
export const createResolver = /* GraphQL */ `
  mutation CreateResolver($project: String!, $input: ResolverInput!) {
    createResolver(project: $project, input: $input) {
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
export const createRelease = /* GraphQL */ `
  mutation CreateRelease($project: String!, $input: ReleaseInput!) {
    createRelease(project: $project, input: $input) {
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
export const createGenerator = /* GraphQL */ `
  mutation CreateGenerator($project: String!, $input: GeneratorInput!) {
    createGenerator(project: $project, input: $input) {
      urn
      name
      description
      createdAt
      updatedAt
      graph
    }
  }
`;
export const addMemberToGroup = /* GraphQL */ `
  mutation AddMemberToGroup($group: String!, $entity: String!) {
    addMemberToGroup(group: $group, entity: $entity)
  }
`;
export const removeMemberFromGroup = /* GraphQL */ `
  mutation RemoveMemberFromGroup($group: String!, $user: String!) {
    removeMemberFromGroup(group: $group, user: $user)
  }
`;
export const inviteToOrganization = /* GraphQL */ `
  mutation InviteToOrganization(
    $organization: String!
    $user: String!
    $groups: [String!]
  ) {
    inviteToOrganization(
      organization: $organization
      user: $user
      groups: $groups
    ) {
      organization
      user
      status
    }
  }
`;
export const removeFromOrganization = /* GraphQL */ `
  mutation RemoveFromOrganization($organization: String!, $user: String!) {
    removeFromOrganization(organization: $organization, user: $user)
  }
`;
export const acceptInvitation = /* GraphQL */ `
  mutation AcceptInvitation($urn: String!) {
    acceptInvitation(urn: $urn)
  }
`;
export const declineInvitation = /* GraphQL */ `
  mutation DeclineInvitation($urn: String!) {
    declineInvitation(urn: $urn)
  }
`;
export const updateSelf = /* GraphQL */ `
  mutation UpdateSelf($input: UpdateSelfInput) {
    updateSelf(input: $input) {
      name
      givenName
      urn
      description
      icon
      visibility
    }
  }
`;
export const updateGenerator = /* GraphQL */ `
  mutation UpdateGenerator($urn: String!, $input: GeneratorInput!) {
    updateGenerator(urn: $urn, input: $input) {
      urn
      name
      description
      createdAt
      updatedAt
      graph
    }
  }
`;
export const updateToken = /* GraphQL */ `
  mutation UpdateToken($urn: String!, $input: TokenUpdateInput!) {
    updateToken(urn: $urn, input: $input) {
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
export const updateTokenSet = /* GraphQL */ `
  mutation UpdateTokenSet($urn: String!, $input: TokenSetUpdateInput!) {
    updateTokenSet(urn: $urn, input: $input) {
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
export const updateResolver = /* GraphQL */ `
  mutation UpdateResolver($urn: String!, $input: ResolverInput!) {
    updateResolver(urn: $urn, input: $input) {
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
export const updatePolicy = /* GraphQL */ `
  mutation UpdatePolicy($urn: String!, $input: PolicyInputUpdate!) {
    updatePolicy(urn: $urn, input: $input) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($urn: String!, $input: ProjectUpdateInput!) {
    updateProject(urn: $urn, input: $input) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup($urn: String!, $input: GroupUpdateInput!) {
    updateGroup(urn: $urn, input: $input) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization($urn: String!, $input: OrganizationUpdateInput!) {
    updateOrganization(urn: $urn, input: $input) {
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
export const regenerateApiKey = /* GraphQL */ `
  mutation RegenerateApiKey($urn: String!) {
    regenerateApiKey(urn: $urn) {
      name
      description
      value
      urn
    }
  }
`;
export const deletePolicy = /* GraphQL */ `
  mutation DeletePolicy($urn: String!) {
    deletePolicy(urn: $urn) {
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
export const deleteAPIKey = /* GraphQL */ `
  mutation DeleteAPIKey($urn: String!) {
    deleteAPIKey(urn: $urn) {
      name
      description
      value
      urn
    }
  }
`;
export const deleteGenerator = /* GraphQL */ `
  mutation DeleteGenerator($urn: String!) {
    deleteGenerator(urn: $urn) {
      urn
      name
      description
      createdAt
      updatedAt
      graph
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup($urn: String!) {
    deleteGroup(urn: $urn) {
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
export const deleteResolver = /* GraphQL */ `
  mutation DeleteResolver($urn: String!) {
    deleteResolver(urn: $urn) {
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
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken($urn: String!) {
    deleteToken(urn: $urn) {
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
export const deleteTokenSet = /* GraphQL */ `
  mutation DeleteTokenSet($urn: String!) {
    deleteTokenSet(urn: $urn) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($urn: String!) {
    deleteProject(urn: $urn) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization($urn: String!) {
    deleteOrganization(urn: $urn) {
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation($urn: String!) {
    deleteInvitation(urn: $urn) {
      organization
      user
      status
    }
  }
`;
export const attachPolicyToGroup = /* GraphQL */ `
  mutation AttachPolicyToGroup($group: String!, $policy: String!) {
    attachPolicyToGroup(group: $group, policy: $policy) {
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
export const detachPolicyFromGroup = /* GraphQL */ `
  mutation DetachPolicyFromGroup($group: String!, $policy: String!) {
    detachPolicyFromGroup(group: $group, policy: $policy) {
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
