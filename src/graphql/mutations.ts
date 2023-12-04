/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const acceptInvitation = /* GraphQL */ `
    mutation AcceptInvitation($confirmCode: String!, $urn: String!) {
        acceptInvitation(confirmCode: $confirmCode, urn: $urn) {
            account
            apiKeys {
                description
                lastUsed
                name
                urn
            }
            createdAt
            description
            groups {
                createdAt
                description
                icon
                name
                urn
            }
            icon
            name
            owner {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            payment
            policies {
                createdAt
                description
                name
                urn
            }
            projects {
                createdAt
                description
                icon
                name
                orgUrn
                releaseCount
                tokenCount
                urn
                visibility
            }
            ssoEnabled
            tier
            urn
            users {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            visibility
        }
    }
`;
export const addMemberToGroup = /* GraphQL */ `
    mutation AddMemberToGroup($entity: String!, $group: String!) {
        addMemberToGroup(entity: $entity, group: $group)
    }
`;
export const attachPolicyToGroup = /* GraphQL */ `
    mutation AttachPolicyToGroup($group: String!, $policy: String!) {
        attachPolicyToGroup(group: $group, policy: $policy) {
            createdAt
            description
            icon
            members {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            name
            policy {
                createdAt
                description
                name
                urn
            }
            urn
        }
    }
`;
export const bulkCreateToken = /* GraphQL */ `
    mutation BulkCreateToken($input: [TokenInput]!, $set: String!) {
        bulkCreateToken(input: $input, set: $set) {
            ... on Raw_Token_border {
                border {
                    color
                    style
                    width
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_boxShadow {
                boxShadow {
                    blur
                    color
                    spread
                    type
                    x
                    y
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_color {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_scalar {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_typography {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                typography {
                    fontFamily
                    fontSize
                    fontWeight
                    letterSpacing
                    lineHeight
                    paragraphIndent
                    paragraphSpacing
                    textCase
                    textDecoration
                }
                urn
                value
            }
        }
    }
`;
export const convertToStaticSet = /* GraphQL */ `
    mutation ConvertToStaticSet($urn: String!) {
        convertToStaticSet(urn: $urn) {
            createdAt
            generatorUrn
            metadata {
                createdAt
            }
            name
            projectUrn
            tokens {
                ... on Raw_Token_border {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_boxShadow {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_color {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_scalar {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_typography {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
            }
            type
            urn
        }
    }
`;
export const createAPIKey = /* GraphQL */ `
    mutation CreateAPIKey($input: APIKeyInput!, $organization: String!) {
        createAPIKey(input: $input, organization: $organization) {
            description
            name
            urn
            value
        }
    }
`;
export const createGenerator = /* GraphQL */ `
    mutation CreateGenerator($input: GeneratorInput!, $project: String!) {
        createGenerator(input: $input, project: $project) {
            createdAt
            description
            graph
            name
            updatedAt
            urn
        }
    }
`;
export const createGroup = /* GraphQL */ `
    mutation CreateGroup($input: GroupInput!, $organization: String!) {
        createGroup(input: $input, organization: $organization) {
            createdAt
            description
            icon
            members {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            name
            policy {
                createdAt
                description
                name
                urn
            }
            urn
        }
    }
`;
export const createOrganization = /* GraphQL */ `
    mutation CreateOrganization($input: OrganizationInput!) {
        createOrganization(input: $input) {
            account
            apiKeys {
                description
                lastUsed
                name
                urn
            }
            createdAt
            description
            groups {
                createdAt
                description
                icon
                name
                urn
            }
            icon
            name
            owner {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            payment
            policies {
                createdAt
                description
                name
                urn
            }
            projects {
                createdAt
                description
                icon
                name
                orgUrn
                releaseCount
                tokenCount
                urn
                visibility
            }
            ssoEnabled
            tier
            urn
            users {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            visibility
        }
    }
`;
export const createPolicy = /* GraphQL */ `
    mutation CreatePolicy($input: PolicyInput!, $organization: String!) {
        createPolicy(input: $input, organization: $organization) {
            createdAt
            description
            name
            urn
            value {
                version
            }
        }
    }
`;
export const createProject = /* GraphQL */ `
    mutation CreateProject($input: ProjectInput!, $organization: String!) {
        createProject(input: $input, organization: $organization) {
            createdAt
            createdBy {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            description
            generators {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            icon
            name
            orgUrn
            releaseCount
            releases {
                createdAt
                description
                name
                urn
                version
            }
            resolvers {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            sdConfigs {
                config
                createdAt
                functions
                name
                projectUrn
                updatedAt
                urn
            }
            sets {
                createdAt
                generatorUrn
                name
                projectUrn
                type
                urn
            }
            tokenCount
            urn
            visibility
        }
    }
`;
export const createRelease = /* GraphQL */ `
    mutation CreateRelease($input: ReleaseInput!, $project: String!) {
        createRelease(input: $input, project: $project) {
            createdAt
            description
            generators {
                name
                path
                type
            }
            name
            releasedBy {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            tokenSets {
                name
                path
                type
            }
            urn
            version
        }
    }
`;
export const createResolver = /* GraphQL */ `
    mutation CreateResolver($input: ResolverInput!, $project: String!) {
        createResolver(input: $input, project: $project) {
            createdAt
            description
            graph
            name
            options {
                description
                name
                values
            }
            updatedAt
            urn
        }
    }
`;
export const createSDConfig = /* GraphQL */ `
    mutation CreateSDConfig($input: SDConfigInput!, $urn: String!) {
        createSDConfig(input: $input, urn: $urn) {
            config
            createdAt
            functions
            name
            projectUrn
            updatedAt
            urn
        }
    }
`;
export const createToken = /* GraphQL */ `
    mutation CreateToken($input: TokenInput!, $set: String!) {
        createToken(input: $input, set: $set) {
            ... on Raw_Token_border {
                border {
                    color
                    style
                    width
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_boxShadow {
                boxShadow {
                    blur
                    color
                    spread
                    type
                    x
                    y
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_color {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_scalar {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_typography {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                typography {
                    fontFamily
                    fontSize
                    fontWeight
                    letterSpacing
                    lineHeight
                    paragraphIndent
                    paragraphSpacing
                    textCase
                    textDecoration
                }
                urn
                value
            }
        }
    }
`;
export const createTokenSet = /* GraphQL */ `
    mutation CreateTokenSet($input: TokenSetInput!, $project: String!) {
        createTokenSet(input: $input, project: $project) {
            createdAt
            generatorUrn
            metadata {
                createdAt
            }
            name
            projectUrn
            tokens {
                ... on Raw_Token_border {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_boxShadow {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_color {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_scalar {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_typography {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
            }
            type
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
            urn
            value
        }
    }
`;
export const deleteGenerator = /* GraphQL */ `
    mutation DeleteGenerator($urn: String!) {
        deleteGenerator(urn: $urn) {
            createdAt
            description
            graph
            name
            updatedAt
            urn
        }
    }
`;
export const deleteGroup = /* GraphQL */ `
    mutation DeleteGroup($urn: String!) {
        deleteGroup(urn: $urn) {
            createdAt
            description
            icon
            members {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            name
            policy {
                createdAt
                description
                name
                urn
            }
            urn
        }
    }
`;
export const deleteInvitation = /* GraphQL */ `
    mutation DeleteInvitation($urn: String!) {
        deleteInvitation(urn: $urn) {
            confirmCode
            organization
            status
            urn
            user
        }
    }
`;
export const deleteOrganization = /* GraphQL */ `
    mutation DeleteOrganization($urn: String!) {
        deleteOrganization(urn: $urn) {
            account
            apiKeys {
                description
                lastUsed
                name
                urn
            }
            createdAt
            description
            groups {
                createdAt
                description
                icon
                name
                urn
            }
            icon
            name
            owner {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            payment
            policies {
                createdAt
                description
                name
                urn
            }
            projects {
                createdAt
                description
                icon
                name
                orgUrn
                releaseCount
                tokenCount
                urn
                visibility
            }
            ssoEnabled
            tier
            urn
            users {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            visibility
        }
    }
`;
export const deletePolicy = /* GraphQL */ `
    mutation DeletePolicy($urn: String!) {
        deletePolicy(urn: $urn) {
            createdAt
            description
            name
            urn
            value {
                version
            }
        }
    }
`;
export const deleteProject = /* GraphQL */ `
    mutation DeleteProject($urn: String!) {
        deleteProject(urn: $urn) {
            createdAt
            createdBy {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            description
            generators {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            icon
            name
            orgUrn
            releaseCount
            releases {
                createdAt
                description
                name
                urn
                version
            }
            resolvers {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            sdConfigs {
                config
                createdAt
                functions
                name
                projectUrn
                updatedAt
                urn
            }
            sets {
                createdAt
                generatorUrn
                name
                projectUrn
                type
                urn
            }
            tokenCount
            urn
            visibility
        }
    }
`;
export const deleteResolver = /* GraphQL */ `
    mutation DeleteResolver($urn: String!) {
        deleteResolver(urn: $urn) {
            createdAt
            description
            graph
            name
            options {
                description
                name
                values
            }
            updatedAt
            urn
        }
    }
`;
export const deleteSDConfig = /* GraphQL */ `
    mutation DeleteSDConfig($urn: String!) {
        deleteSDConfig(urn: $urn) {
            config
            createdAt
            functions
            name
            projectUrn
            updatedAt
            urn
        }
    }
`;
export const deleteToken = /* GraphQL */ `
    mutation DeleteToken($urn: String!) {
        deleteToken(urn: $urn) {
            ... on Raw_Token_border {
                border {
                    color
                    style
                    width
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_boxShadow {
                boxShadow {
                    blur
                    color
                    spread
                    type
                    x
                    y
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_color {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_scalar {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_typography {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                typography {
                    fontFamily
                    fontSize
                    fontWeight
                    letterSpacing
                    lineHeight
                    paragraphIndent
                    paragraphSpacing
                    textCase
                    textDecoration
                }
                urn
                value
            }
        }
    }
`;
export const deleteTokenSet = /* GraphQL */ `
    mutation DeleteTokenSet($urn: String!) {
        deleteTokenSet(urn: $urn) {
            createdAt
            generatorUrn
            metadata {
                createdAt
            }
            name
            projectUrn
            tokens {
                ... on Raw_Token_border {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_boxShadow {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_color {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_scalar {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_typography {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
            }
            type
            urn
        }
    }
`;
export const detachPolicyFromGroup = /* GraphQL */ `
    mutation DetachPolicyFromGroup($group: String!, $policy: String!) {
        detachPolicyFromGroup(group: $group, policy: $policy) {
            createdAt
            description
            icon
            members {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            name
            policy {
                createdAt
                description
                name
                urn
            }
            urn
        }
    }
`;
export const inviteToOrganization = /* GraphQL */ `
    mutation InviteToOrganization(
        $email: String!
        $groups: [String!]
        $organization: String!
    ) {
        inviteToOrganization(
            email: $email
            groups: $groups
            organization: $organization
        ) {
            confirmCode
            organization
            status
            urn
            user
        }
    }
`;
export const regenerateApiKey = /* GraphQL */ `
    mutation RegenerateApiKey($urn: String!) {
        regenerateApiKey(urn: $urn) {
            description
            name
            urn
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
export const updateGenerator = /* GraphQL */ `
    mutation UpdateGenerator($input: GeneratorInput!, $urn: String!) {
        updateGenerator(input: $input, urn: $urn) {
            createdAt
            description
            graph
            name
            updatedAt
            urn
        }
    }
`;
export const updateGroup = /* GraphQL */ `
    mutation UpdateGroup($input: GroupUpdateInput!, $urn: String!) {
        updateGroup(input: $input, urn: $urn) {
            createdAt
            createdBy {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            description
            generators {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            icon
            name
            orgUrn
            releaseCount
            releases {
                createdAt
                description
                name
                urn
                version
            }
            resolvers {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            sdConfigs {
                config
                createdAt
                functions
                name
                projectUrn
                updatedAt
                urn
            }
            sets {
                createdAt
                generatorUrn
                name
                projectUrn
                type
                urn
            }
            tokenCount
            urn
            visibility
        }
    }
`;
export const updateOrganization = /* GraphQL */ `
    mutation UpdateOrganization(
        $input: OrganizationUpdateInput!
        $urn: String!
    ) {
        updateOrganization(input: $input, urn: $urn) {
            account
            apiKeys {
                description
                lastUsed
                name
                urn
            }
            createdAt
            description
            groups {
                createdAt
                description
                icon
                name
                urn
            }
            icon
            name
            owner {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            payment
            policies {
                createdAt
                description
                name
                urn
            }
            projects {
                createdAt
                description
                icon
                name
                orgUrn
                releaseCount
                tokenCount
                urn
                visibility
            }
            ssoEnabled
            tier
            urn
            users {
                description
                givenName
                icon
                name
                urn
                visibility
            }
            visibility
        }
    }
`;
export const updatePolicy = /* GraphQL */ `
    mutation UpdatePolicy($input: PolicyInputUpdate!, $urn: String!) {
        updatePolicy(input: $input, urn: $urn) {
            createdAt
            description
            name
            urn
            value {
                version
            }
        }
    }
`;
export const updateProject = /* GraphQL */ `
    mutation UpdateProject($input: ProjectUpdateInput!, $urn: String!) {
        updateProject(input: $input, urn: $urn) {
            createdAt
            createdBy {
                ... on APIKeyIdentity {
                    name
                    urn
                }
                ... on User {
                    description
                    givenName
                    icon
                    name
                    urn
                    visibility
                }
            }
            description
            generators {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            icon
            name
            orgUrn
            releaseCount
            releases {
                createdAt
                description
                name
                urn
                version
            }
            resolvers {
                createdAt
                description
                graph
                name
                updatedAt
                urn
            }
            sdConfigs {
                config
                createdAt
                functions
                name
                projectUrn
                updatedAt
                urn
            }
            sets {
                createdAt
                generatorUrn
                name
                projectUrn
                type
                urn
            }
            tokenCount
            urn
            visibility
        }
    }
`;
export const updateResolver = /* GraphQL */ `
    mutation UpdateResolver($input: ResolverUpdateInput!, $urn: String!) {
        updateResolver(input: $input, urn: $urn) {
            createdAt
            description
            graph
            name
            options {
                description
                name
                values
            }
            updatedAt
            urn
        }
    }
`;
export const updateSDConfig = /* GraphQL */ `
    mutation UpdateSDConfig($input: SDConfigInput!, $urn: String!) {
        updateSDConfig(input: $input, urn: $urn) {
            config
            createdAt
            functions
            name
            projectUrn
            updatedAt
            urn
        }
    }
`;
export const updateSelf = /* GraphQL */ `
    mutation UpdateSelf($input: UpdateSelfInput) {
        updateSelf(input: $input) {
            description
            givenName
            groups {
                createdAt
                description
                icon
                name
                urn
            }
            icon
            name
            urn
            visibility
        }
    }
`;
export const updateToken = /* GraphQL */ `
    mutation UpdateToken($input: TokenUpdateInput!, $urn: String!) {
        updateToken(input: $input, urn: $urn) {
            ... on Raw_Token_border {
                border {
                    color
                    style
                    width
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_boxShadow {
                boxShadow {
                    blur
                    color
                    spread
                    type
                    x
                    y
                }
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_color {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_scalar {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                urn
                value
            }
            ... on Raw_Token_typography {
                description
                extensions
                metadata {
                    createdAt
                }
                name
                setUrn
                type
                typography {
                    fontFamily
                    fontSize
                    fontWeight
                    letterSpacing
                    lineHeight
                    paragraphIndent
                    paragraphSpacing
                    textCase
                    textDecoration
                }
                urn
                value
            }
        }
    }
`;
export const updateTokenSet = /* GraphQL */ `
    mutation UpdateTokenSet($input: TokenSetUpdateInput!, $urn: String!) {
        updateTokenSet(input: $input, urn: $urn) {
            createdAt
            generatorUrn
            metadata {
                createdAt
            }
            name
            projectUrn
            tokens {
                ... on Raw_Token_border {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_boxShadow {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_color {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_scalar {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
                ... on Raw_Token_typography {
                    description
                    extensions
                    name
                    setUrn
                    type
                    urn
                    value
                }
            }
            type
            urn
        }
    }
`;
