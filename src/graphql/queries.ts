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
    query Resolve(
        $modifiers: [ResolverModifierValueInput]
        $resolver: String!
    ) {
        resolve(modifiers: $modifiers, resolver: $resolver) {
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
            description
            modifiers {
                alias
                default
                name
                type
            }
            name
            release {
                createdAt
                description
                name
                updatedAt
                urn
                version
            }
            sources {
                branch
                urn
                version
            }
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
            description
            modifiers {
                alias
                default
                name
                type
            }
            name
            release {
                createdAt
                description
                name
                updatedAt
                urn
                version
            }
            sources {
                branch
                urn
                version
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
export const tokenSet = /* GraphQL */ `
    query TokenSet($urn: String!) {
        tokenSet(urn: $urn) {
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
            organization
            status
            user
        }
    }
`;
