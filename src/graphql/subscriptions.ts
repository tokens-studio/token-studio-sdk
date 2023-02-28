/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken($setUrn: String!) {
    onDeleteToken(setUrn: $setUrn) {
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
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
        created
      }
      name
      project {
        created
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
      tokens {
        ... on Raw_Token_color {
          description
          name
          setUrn
          type
          urn
          value
        }
        ... on Raw_Token_scalar {
          description
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
export const onNewGroup = /* GraphQL */ `
  subscription OnNewGroup($organization: String!) {
    onNewGroup(organization: $organization) {
      created
      description
      members {
        ... on APIKeyIdentity {
          name
          urn
        }
        ... on User {
          description
          icon
          name
          urn
          visibility
        }
      }
      name
      policy {
        created
        description
        name
      }
    }
  }
`;
export const onNewToken = /* GraphQL */ `
  subscription OnNewToken($setUrn: String!) {
    onNewToken(setUrn: $setUrn) {
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
    }
  }
`;
export const onNewTokenSet = /* GraphQL */ `
  subscription OnNewTokenSet($projectUrn: String!) {
    onNewTokenSet(projectUrn: $projectUrn) {
      metadata {
        created
      }
      name
      project {
        created
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
      tokens {
        ... on Raw_Token_color {
          description
          name
          setUrn
          type
          urn
          value
        }
        ... on Raw_Token_scalar {
          description
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
      ... on Raw_Token_color {
        description
        metadata {
          created
        }
        name
        setUrn
        type
        urn
        value
      }
      ... on Raw_Token_scalar {
        description
        metadata {
          created
        }
        name
        setUrn
        type
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
        created
      }
      name
      project {
        created
        description
        icon
        name
        urn
        visibility
      }
      projectUrn
      tokens {
        ... on Raw_Token_color {
          description
          name
          setUrn
          type
          urn
          value
        }
        ... on Raw_Token_scalar {
          description
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
