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
    query Policies($organization: String!, $limit: Int = 40, $offset: Int) {
        policies(organization: $organization, limit: $limit, offset: $offset) {
            created
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
        $limit: Int = 40
        $offset: Int
    ) {
        organizations(filter: $filter, limit: $limit, offset: $offset) {
            urn
            created
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
                created
                name
                urn
                orgUrn
                visibility
                icon
                description
            }
            groups {
                created
                name
                urn
                description
            }
            policies {
                created
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
        $limit: Int = 40
        $offset: Int
    ) {
        projects(
            organization: $organization
            filter: $filter
            limit: $limit
            offset: $offset
        ) {
            created
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
            }
            resolvers {
                name
                description
                urn
            }
        }
    }
`;
export const project = /* GraphQL */ `
    query Project($urn: String!) {
        project(urn: $urn) {
            created
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
            }
            resolvers {
                name
                description
                urn
            }
        }
    }
`;
export const groups = /* GraphQL */ `
    query Groups(
        $organization: String!
        $filter: GroupFilterInput
        $limit: Int = 40
        $offset: Int
    ) {
        groups(
            organization: $organization
            filter: $filter
            limit: $limit
            offset: $offset
        ) {
            created
            name
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
                created
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
                created
            }
            name
            projectUrn
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
            }
        }
    }
`;
export const tokenSets = /* GraphQL */ `
    query TokenSets(
        $project: String!
        $limit: Int = 40
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
                created
            }
            name
            projectUrn
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
                    created
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
                    created
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
                    created
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
        $limit: Int = 40
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
                    created
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
                    created
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
                    created
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
                created
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
    query Resolve(
        $resolver: String!
        $modifiers: [ResolverModifierValueInput]
    ) {
        resolve(resolver: $resolver, modifiers: $modifiers) {
            ... on Token_color {
                description
                name
                value
                type
                metadata {
                    created
                }
            }
            ... on Token_scalar {
                description
                name
                value
                type
                metadata {
                    created
                }
            }
            ... on Token_Typography {
                description
                name
                value
                metadata {
                    created
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
        $limit: Int = 40
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
                updatedAt
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
                updatedAt
            }
        }
    }
`;
export const apiKeys = /* GraphQL */ `
    query ApiKeys(
        $organization: String!
        $filter: ApiKeyFilterInput
        $limit: Int = 40
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
