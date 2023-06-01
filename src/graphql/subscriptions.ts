/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateToken = /* GraphQL */ `
    subscription OnCreateToken($setUrn: String!) {
        onCreateToken(setUrn: $setUrn) {
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
export const onUpdateToken = /* GraphQL */ `
    subscription OnUpdateToken($setUrn: String!) {
        onUpdateToken(setUrn: $setUrn) {
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
export const onDeleteToken = /* GraphQL */ `
    subscription OnDeleteToken($setUrn: String!) {
        onDeleteToken(setUrn: $setUrn) {
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
export const onCreateTokenSet = /* GraphQL */ `
    subscription OnCreateTokenSet($projectUrn: String!) {
        onCreateTokenSet(projectUrn: $projectUrn) {
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
export const onUpdateTokenSet = /* GraphQL */ `
    subscription OnUpdateTokenSet($projectUrn: String!) {
        onUpdateTokenSet(projectUrn: $projectUrn) {
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
export const onDeleteTokenSet = /* GraphQL */ `
    subscription OnDeleteTokenSet($projectUrn: String!) {
        onDeleteTokenSet(projectUrn: $projectUrn) {
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
export const onCreateGroup = /* GraphQL */ `
    subscription OnCreateGroup($organization: String!) {
        onCreateGroup(organization: $organization) {
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
