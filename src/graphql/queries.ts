/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const apiKeys = /* GraphQL */ `
    query ApiKeys(
        $filter: ApiKeyFilterInput
        $limit: Int
        $offset: Int
        $organization: String!
    ) {
        apiKeys(
            filter: $filter
            limit: $limit
            offset: $offset
            organization: $organization
        ) {
            description
            lastUsed
            name
            urn
        }
    }
`;
export const generator = /* GraphQL */ `
    query Generator($urn: String!) {
        generator(urn: $urn) {
            createdAt
            description
            graph
            name
            updatedAt
            urn
        }
    }
`;
export const generators = /* GraphQL */ `
    query Generators(
        $filter: GeneratorFilterInput
        $limit: Int
        $offset: Int
        $project: String!
    ) {
        generators(
            filter: $filter
            limit: $limit
            offset: $offset
            project: $project
        ) {
            createdAt
            description
            graph
            name
            updatedAt
            urn
        }
    }
`;
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
export const policies = /* GraphQL */ `
    query Policies($limit: Int, $offset: Int, $organization: String!) {
        policies(limit: $limit, offset: $offset, organization: $organization) {
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
export const project = /* GraphQL */ `
    query Project($urn: String!) {
        project(urn: $urn) {
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
export const releaseCount = /* GraphQL */ `
    query ReleaseCount($project: String!) {
        releaseCount(project: $project)
    }
`;
export const releases = /* GraphQL */ `
    query Releases(
        $filter: ReleaseFilterInput
        $limit: Int
        $offset: Int
        $project: String!
    ) {
        releases(
            filter: $filter
            limit: $limit
            offset: $offset
            project: $project
        ) {
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
export const resolve = /* GraphQL */ `
    query Resolve($options: [ResolverOptionsInput], $resolver: String!) {
        resolve(options: $options, resolver: $resolver) {
            ... on Token_border {
                border {
                    color
                    style
                    width
                }
                description
                metadata {
                    createdAt
                }
                name
                type
                value
            }
            ... on Token_boxShadow {
                boxShadow {
                    blur
                    color
                    spread
                    type
                    x
                    y
                }
                description
                metadata {
                    createdAt
                }
                name
                type
                value
            }
            ... on Token_color {
                description
                metadata {
                    createdAt
                }
                name
                type
                value
            }
            ... on Token_scalar {
                description
                metadata {
                    createdAt
                }
                name
                type
                value
            }
            ... on Token_typography {
                description
                metadata {
                    createdAt
                }
                name
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
                value
            }
        }
    }
`;
export const resolver = /* GraphQL */ `
    query Resolver($urn: String!) {
        resolver(urn: $urn) {
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
export const resolvers = /* GraphQL */ `
    query Resolvers(
        $filter: ResolverFilterInput
        $limit: Int
        $offset: Int
        $project: String!
    ) {
        resolvers(
            filter: $filter
            limit: $limit
            offset: $offset
            project: $project
        ) {
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
export const self = /* GraphQL */ `
    query Self {
        self {
            identity {
                authenticated
                urn
            }
            invitations {
                confirmCode
                organization
                status
                urn
                user
            }
            organizations {
                account
                createdAt
                description
                icon
                name
                payment
                ssoEnabled
                tier
                urn
                visibility
            }
            permissions {
                version
            }
            user {
                description
                givenName
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
export const tokenCount = /* GraphQL */ `
    query TokenCount($project: String!) {
        tokenCount(project: $project)
    }
`;
export const tokenSet = /* GraphQL */ `
    query TokenSet($urn: String!) {
        tokenSet(urn: $urn) {
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
export const tokenSets = /* GraphQL */ `
    query TokenSets(
        $filter: TokenSetsFilterInput
        $limit: Int
        $offset: Int
        $project: String!
    ) {
        tokenSets(
            filter: $filter
            limit: $limit
            offset: $offset
            project: $project
        ) {
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
export const tokens = /* GraphQL */ `
    query Tokens(
        $filter: TokenFilterInput
        $limit: Int
        $offset: Int
        $set: String!
    ) {
        tokens(filter: $filter, limit: $limit, offset: $offset, set: $set) {
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
export const userInvitations = /* GraphQL */ `
    query UserInvitations($limit: Int) {
        userInvitations(limit: $limit) {
            confirmCode
            organization
            status
            urn
            user
        }
    }
`;
