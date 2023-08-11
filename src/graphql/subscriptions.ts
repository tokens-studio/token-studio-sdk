/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
    subscription OnCreateGroup($organization: String!) {
        onCreateGroup(organization: $organization) {
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
export const onCreateToken = /* GraphQL */ `
    subscription OnCreateToken($setUrn: String!) {
        onCreateToken(setUrn: $setUrn) {
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
export const onCreateTokenSet = /* GraphQL */ `
    subscription OnCreateTokenSet($projectUrn: String!) {
        onCreateTokenSet(projectUrn: $projectUrn) {
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
export const onDeleteToken = /* GraphQL */ `
    subscription OnDeleteToken($setUrn: String!) {
        onDeleteToken(setUrn: $setUrn) {
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
export const onDeleteTokenSet = /* GraphQL */ `
    subscription OnDeleteTokenSet($projectUrn: String!) {
        onDeleteTokenSet(projectUrn: $projectUrn) {
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
export const onUpdateToken = /* GraphQL */ `
    subscription OnUpdateToken($setUrn: String!) {
        onUpdateToken(setUrn: $setUrn) {
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
export const onUpdateTokenSet = /* GraphQL */ `
    subscription OnUpdateTokenSet($projectUrn: String!) {
        onUpdateTokenSet(projectUrn: $projectUrn) {
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
