/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken($setUrn: String!) {
    onCreateToken(setUrn: $setUrn) {
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
        ... on Raw_Token_composition {
          value
        }
      }
    }
  }
`;
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken($setUrn: String!) {
    onUpdateToken(setUrn: $setUrn) {
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
        ... on Raw_Token_composition {
          value
        }
      }
    }
  }
`;
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken($setUrn: String!) {
    onDeleteToken(setUrn: $setUrn) {
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
        ... on Raw_Token_composition {
          value
        }
      }
    }
  }
`;
export const onCreateTokenSet = /* GraphQL */ `
  subscription OnCreateTokenSet($projectUrn: String!) {
    onCreateTokenSet(projectUrn: $projectUrn) {
      urn
      metadata {
        createdAt
      }
      name
      projectUrn
      type
      generatorUrn
      orderIndex
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
export const onUpdateTokenSet = /* GraphQL */ `
  subscription OnUpdateTokenSet($projectUrn: String!) {
    onUpdateTokenSet(projectUrn: $projectUrn) {
      urn
      metadata {
        createdAt
      }
      name
      projectUrn
      type
      generatorUrn
      orderIndex
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
export const onDeleteTokenSet = /* GraphQL */ `
  subscription OnDeleteTokenSet($projectUrn: String!) {
    onDeleteTokenSet(projectUrn: $projectUrn) {
      urn
      metadata {
        createdAt
      }
      name
      projectUrn
      type
      generatorUrn
      orderIndex
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($organization: String!) {
    onCreateGroup(organization: $organization) {
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
