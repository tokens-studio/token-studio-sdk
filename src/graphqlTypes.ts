/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type APIKeyOutput = {
  __typename: "APIKeyOutput",
  description?: string | null,
  name?: string | null,
  value?: string | null,
};

export type GroupInput = {
  description?: string | null,
  icon?: string | null,
  name: string,
};

export type Group = {
  __typename: "Group",
  created: string,
  description?: string | null,
  members?:  Array<User | null > | null,
  name: string,
  policy?: Policy | null,
};

export type User = {
  __typename: "User",
  name?: string | null,
  urn?: string | null,
};

export type Policy = {
  __typename: "Policy",
  created?: string | null,
  description?: string | null,
  name: string,
  value: PolicyDoc,
};

export type PolicyDoc = {
  __typename: "PolicyDoc",
  statement: PolicyStatement,
  version: string,
};

export type PolicyStatement = {
  __typename: "PolicyStatement",
  action: Array< string | null >,
  effect: string,
  resource: Array< string | null >,
};

export type OrganizationInput = {
  description?: string | null,
  icon?: string | null,
  name: string,
  tier: OrganizationTier,
  visibility: Visibility,
};

export enum OrganizationTier {
  ENTERPRISE = "ENTERPRISE",
  FREE = "FREE",
  STARTER = "STARTER",
  STUDIO = "STUDIO",
}


export enum Visibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}


export type Organization = {
  __typename: "Organization",
  name?: string | null,
  urn?: string | null,
};

export type PolicyInput = {
  description?: string | null,
  name: string,
  value: PolicyDocInput,
};

export type PolicyDocInput = {
  statement: Array< PolicyStatementInput >,
  version: string,
};

export type PolicyStatementInput = {
  action: Array< string | null >,
  effect: string,
  resource: Array< string | null >,
};

export type ProjectInput = {
  description?: string | null,
  icon?: string | null,
  name: string,
  visibility: Visibility,
};

export type Project = {
  __typename: "Project",
  created: string,
  name: string,
  urn: string,
};

export type ResolverInput = {
  alias?: Array< AliasTokenSetInput > | null,
  description?: string | null,
  name: string,
  src: Array< string >,
};

export type AliasTokenSetInput = {
  alias: string,
  set: string,
};

export type Resolver = {
  __typename: "Resolver",
  description?: string | null,
  name?: string | null,
  urn?: string | null,
};

export type TokenInput = {
  description?: string | null,
  name: string,
  type?: TokenType | null,
  value?: string | null,
};

export enum TokenType {
  ANY = "ANY",
  ASSETS = "ASSETS",
  BORDER = "BORDER",
  BORDER_RADIUS = "BORDER_RADIUS",
  BORDER_WIDTH = "BORDER_WIDTH",
  DIMENSION = "DIMENSION",
  FONT_FAMILY = "FONT_FAMILY",
  FONT_WEIGHT = "FONT_WEIGHT",
  LETTER_SPACING = "LETTER_SPACING",
  LINE_HEIGHT = "LINE_HEIGHT",
  OTHER = "OTHER",
  PARAGRAPH_SPACING = "PARAGRAPH_SPACING",
  SIZING = "SIZING",
  SPACING = "SPACING",
  TEXT_CASE = "TEXT_CASE",
  TEXT_DECORATION = "TEXT_DECORATION",
  TYPOGRAPHY = "TYPOGRAPHY",
  boxShadow = "boxShadow",
  color = "color",
  composition = "composition",
  fontSize = "fontSize",
  opacity = "opacity",
}


export type Token = Token_Composition | Token_Other | Token_Typography | Token_color | Token_sizing


export type Token_Composition = {
  __typename: "Token_Composition",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
  value?: string | null,
};

export type ResolvedTokenInterface = {
  __typename: "ResolvedTokenInterface",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
};

export type Token_Other = {
  __typename: "Token_Other",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
  value?: string | null,
};

export type Metadata = {
  __typename: "Metadata",
  created?: string | null,
  createdBy?: User | null,
  lastUpdatedBy?: User | null,
};

export type Token_Typography = {
  __typename: "Token_Typography",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
  value?: string | null,
};

export type Token_color = {
  __typename: "Token_color",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
  value?: string | null,
};

export type Token_sizing = {
  __typename: "Token_sizing",
  description?: string | null,
  metadata?: Metadata | null,
  name?: string | null,
  type?: TokenType | null,
  value?: string | null,
};

export type TokenSetInput = {
  description?: string | null,
  name: string,
};

export type TokenSet = {
  __typename: "TokenSet",
  metadata?: Metadata | null,
  name?: string | null,
  project: Project,
  tokens:  Array<Token >,
  urn?: string | null,
};

export type DeletedResource = {
  __typename: "DeletedResource",
  urn?: string | null,
};

export type Invitation = {
  __typename: "Invitation",
  organization: string,
  status?: InvitationStatus | null,
  user: string,
};

export enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  PENDING = "PENDING",
}


export type OrganizationAdmin = {
  __typename: "OrganizationAdmin",
  account?: string | null,
  created?: number | null,
  description?: string | null,
  icon?: string | null,
  name?: string | null,
  payment?: string | null,
  ssoEnabled?: boolean | null,
  tier?: OrgTier | null,
  visibility?: Visibility | null,
};

export enum OrgTier {
  ENTERPRISE = "ENTERPRISE",
  FREE = "FREE",
}


export type Identity = {
  __typename: "Identity",
  authenticated: boolean,
  urn?: string | null,
};

export type AddMemberToGroupMutationVariables = {
  group: string,
  user: string,
};

export type AddMemberToGroupMutation = {
  addMemberToGroup?: string | null,
};

export type CreateAPIKeyMutationVariables = {
  name?: string | null,
  organization: string,
};

export type CreateAPIKeyMutation = {
  createAPIKey?:  {
    __typename: "APIKeyOutput",
    description?: string | null,
    name?: string | null,
    value?: string | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: GroupInput,
  organization: string,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    created: string,
    description?: string | null,
    members?:  Array< {
      __typename: "User",
      name?: string | null,
      urn?: string | null,
    } | null > | null,
    name: string,
    policy?:  {
      __typename: "Policy",
      created?: string | null,
      description?: string | null,
      name: string,
    } | null,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: OrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    name?: string | null,
    urn?: string | null,
  } | null,
};

export type CreatePolicyMutationVariables = {
  input: PolicyInput,
  organization: string,
};

export type CreatePolicyMutation = {
  createPolicy?:  {
    __typename: "Policy",
    created?: string | null,
    description?: string | null,
    name: string,
    value:  {
      __typename: "PolicyDoc",
      version: string,
    },
  } | null,
};

export type CreateProjectMutationVariables = {
  input: ProjectInput,
  organization: string,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    created: string,
    name: string,
    urn: string,
  } | null,
};

export type CreateResolverMutationVariables = {
  input: ResolverInput,
  project: string,
};

export type CreateResolverMutation = {
  createResolver?:  {
    __typename: "Resolver",
    description?: string | null,
    name?: string | null,
    urn?: string | null,
  } | null,
};

export type CreateTokenMutationVariables = {
  input: TokenInput,
  set: string,
};

export type CreateTokenMutation = {
  createToken: ( {
      __typename: "Token_Composition",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Other",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Typography",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_color",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_sizing",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    }
  ) | null,
};

export type CreateTokenSetMutationVariables = {
  input: TokenSetInput,
  project: string,
};

export type CreateTokenSetMutation = {
  createTokenSet?:  {
    __typename: "TokenSet",
    metadata?:  {
      __typename: "Metadata",
      created?: string | null,
    } | null,
    name?: string | null,
    project:  {
      __typename: "Project",
      created: string,
      name: string,
      urn: string,
    },
    tokens:  Array<( {
        __typename: "Token_Composition",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Other",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Typography",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_color",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_sizing",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      }
    ) >,
    urn?: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  urn: string,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type DeletePolicyMutationVariables = {
  urn: string,
};

export type DeletePolicyMutation = {
  deletePolicy?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  urn: string,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type DeleteResolverMutationVariables = {
  urn: string,
};

export type DeleteResolverMutation = {
  deleteResolver?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type DeleteTokenMutationVariables = {
  urn: string,
};

export type DeleteTokenMutation = {
  deleteToken?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type DeleteTokenSetMutationVariables = {
  urn: string,
};

export type DeleteTokenSetMutation = {
  deleteTokenSet?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};

export type InviteToOrganizationMutationVariables = {
  organization: string,
  user: string,
};

export type InviteToOrganizationMutation = {
  inviteToOrganization?:  {
    __typename: "Invitation",
    organization: string,
    status?: InvitationStatus | null,
    user: string,
  } | null,
};

export type GroupsQueryVariables = {
  organization: string,
};

export type GroupsQuery = {
  groups?:  Array< {
    __typename: "Group",
    created: string,
    description?: string | null,
    members?:  Array< {
      __typename: "User",
      name?: string | null,
      urn?: string | null,
    } | null > | null,
    name: string,
    policy?:  {
      __typename: "Policy",
      created?: string | null,
      description?: string | null,
      name: string,
    } | null,
  } | null > | null,
};

export type OrganizationQueryVariables = {
  organization: string,
};

export type OrganizationQuery = {
  organization?:  {
    __typename: "Organization",
    name?: string | null,
    urn?: string | null,
  } | null,
};

export type OrganizationAdminQueryVariables = {
  organization?: string | null,
};

export type OrganizationAdminQuery = {
  organizationAdmin?:  {
    __typename: "OrganizationAdmin",
    account?: string | null,
    created?: number | null,
    description?: string | null,
    icon?: string | null,
    name?: string | null,
    payment?: string | null,
    ssoEnabled?: boolean | null,
    tier?: OrgTier | null,
    visibility?: Visibility | null,
  } | null,
};

export type OrganizationsQueryVariables = {
  offset?: number | null,
};

export type OrganizationsQuery = {
  organizations?:  Array< {
    __typename: "Organization",
    name?: string | null,
    urn?: string | null,
  } | null > | null,
};

export type PoliciesQueryVariables = {
  first?: number | null,
  organization: string,
};

export type PoliciesQuery = {
  policies?:  Array< {
    __typename: "Policy",
    created?: string | null,
    description?: string | null,
    name: string,
    value:  {
      __typename: "PolicyDoc",
      version: string,
    },
  } | null > | null,
};

export type ProjectsQueryVariables = {
  organization: string,
};

export type ProjectsQuery = {
  projects?:  Array< {
    __typename: "Project",
    created: string,
    name: string,
    urn: string,
  } | null > | null,
};

export type ResolveQueryVariables = {
  resolver: string,
};

export type ResolveQuery = {
  resolve:  Array<( {
      __typename: "Token_Composition",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Other",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Typography",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_color",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_sizing",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    }
  ) | null > | null,
};

export type ResolversQueryVariables = {
  project: string,
};

export type ResolversQuery = {
  resolvers?:  Array< {
    __typename: "Resolver",
    description?: string | null,
    name?: string | null,
    urn?: string | null,
  } | null > | null,
};

export type SelfQuery = {
  self?:  {
    __typename: "Identity",
    authenticated: boolean,
    urn?: string | null,
  } | null,
};

export type TokenQueryVariables = {
  urn?: string | null,
};

export type TokenQuery = {
  token: ( {
      __typename: "Token_Composition",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Other",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Typography",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_color",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_sizing",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    }
  ) | null,
};

export type TokenSetQueryVariables = {
  urn?: string | null,
};

export type TokenSetQuery = {
  tokenSet?:  {
    __typename: "TokenSet",
    metadata?:  {
      __typename: "Metadata",
      created?: string | null,
    } | null,
    name?: string | null,
    project:  {
      __typename: "Project",
      created: string,
      name: string,
      urn: string,
    },
    tokens:  Array<( {
        __typename: "Token_Composition",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Other",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Typography",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_color",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_sizing",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      }
    ) >,
    urn?: string | null,
  } | null,
};

export type TokenSetsQueryVariables = {
  project: string,
};

export type TokenSetsQuery = {
  tokenSets:  Array< {
    __typename: "TokenSet",
    metadata?:  {
      __typename: "Metadata",
      created?: string | null,
    } | null,
    name?: string | null,
    project:  {
      __typename: "Project",
      created: string,
      name: string,
      urn: string,
    },
    tokens:  Array<( {
        __typename: "Token_Composition",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Other",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Typography",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_color",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_sizing",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      }
    ) >,
    urn?: string | null,
  } >,
};

export type TokensQueryVariables = {
  set: string,
};

export type TokensQuery = {
  tokens:  Array<( {
      __typename: "Token_Composition",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Other",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Typography",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_color",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_sizing",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    }
  ) >,
};

export type UserInvitationsQuery = {
  userInvitations?:  Array< {
    __typename: "Invitation",
    organization: string,
    status?: InvitationStatus | null,
    user: string,
  } | null > | null,
};

export type OnNewGroupSubscriptionVariables = {
  organization: string,
};

export type OnNewGroupSubscription = {
  onNewGroup?:  {
    __typename: "Group",
    created: string,
    description?: string | null,
    members?:  Array< {
      __typename: "User",
      name?: string | null,
      urn?: string | null,
    } | null > | null,
    name: string,
    policy?:  {
      __typename: "Policy",
      created?: string | null,
      description?: string | null,
      name: string,
    } | null,
  } | null,
};

export type OnNewTokenSubscriptionVariables = {
  set: string,
};

export type OnNewTokenSubscription = {
  onNewToken: ( {
      __typename: "Token_Composition",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Other",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_Typography",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_color",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    } | {
      __typename: "Token_sizing",
      description?: string | null,
      metadata?:  {
        __typename: string,
        created?: string | null,
      } | null,
      name?: string | null,
      type?: TokenType | null,
      value?: string | null,
    }
  ) | null,
};

export type OnNewTokenSetSubscriptionVariables = {
  project: string,
};

export type OnNewTokenSetSubscription = {
  onNewTokenSet?:  {
    __typename: "TokenSet",
    metadata?:  {
      __typename: "Metadata",
      created?: string | null,
    } | null,
    name?: string | null,
    project:  {
      __typename: "Project",
      created: string,
      name: string,
      urn: string,
    },
    tokens:  Array<( {
        __typename: "Token_Composition",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Other",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_Typography",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_color",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      } | {
        __typename: "Token_sizing",
        description?: string | null,
        name?: string | null,
        type?: TokenType | null,
        value?: string | null,
      }
    ) >,
    urn?: string | null,
  } | null,
};

export type OnTokenDeletedSubscriptionVariables = {
  urn: string,
};

export type OnTokenDeletedSubscription = {
  onTokenDeleted?:  {
    __typename: "DeletedResource",
    urn?: string | null,
  } | null,
};
