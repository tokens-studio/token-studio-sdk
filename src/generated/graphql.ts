import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type ApiKey = {
  __typename?: 'APIKey';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ApiKeyIdentity = {
  __typename?: 'APIKeyIdentity';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ApiKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
};

export type ApiKeyWithoutValue = {
  __typename?: 'APIKeyWithoutValue';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastUsed?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AliasTokenSetInput = {
  alias: Scalars['String']['input'];
  set: Scalars['String']['input'];
};

export type AliasTuple = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ApiKeyFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type Border = {
  __typename?: 'Border';
  color?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type BorderInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type BoxShadow = {
  __typename?: 'BoxShadow';
  blur?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  spread?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['String']['output']>;
  y?: Maybe<Scalars['String']['output']>;
};

export type BoxShadowInput = {
  blur?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  spread?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
};

export type ColorValue = {
  __typename?: 'ColorValue';
  hex?: Maybe<Scalars['String']['output']>;
  hsla?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  raw?: Maybe<Scalars['String']['output']>;
  rgba?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type Entity = ApiKeyIdentity | User;

export type FileInput = {
  data: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Generator = {
  __typename?: 'Generator';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type GeneratorFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type GeneratorInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GeneratorInputUpdate = {
  description?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<Entity>>>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  policy?: Maybe<Policy>;
};

export type GroupFilterInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<GroupStringFilterInput>;
};

export type GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  policy?: InputMaybe<Scalars['String']['input']>;
};

export type GroupStringFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type GroupUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policy?: InputMaybe<Scalars['String']['input']>;
};

export type Groupid = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type Identity = {
  __typename?: 'Identity';
  authenticated: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['String']['output']>;
};

export type IntFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Invitation = {
  __typename?: 'Invitation';
  confirmCode: Scalars['String']['output'];
  id: Scalars['String']['output'];
  organization: Scalars['String']['output'];
  status?: Maybe<InvitationStatus>;
  user: Scalars['String']['output'];
};

export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type Metadata = {
  __typename?: 'Metadata';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Entity>;
  lastUpdatedBy?: Maybe<Entity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation?: Maybe<Organization>;
  addMemberToGroup?: Maybe<Scalars['String']['output']>;
  attachPolicyToGroup?: Maybe<Group>;
  bulkCreateToken?: Maybe<Array<Maybe<RawToken>>>;
  convertToStaticSet?: Maybe<TokenSet>;
  createAPIKey?: Maybe<ApiKey>;
  createGenerator?: Maybe<Generator>;
  createGroup?: Maybe<Group>;
  createOrganization?: Maybe<Organization>;
  createPolicy?: Maybe<Policy>;
  createProject?: Maybe<Project>;
  createRelease?: Maybe<Release>;
  createResolver?: Maybe<Resolver>;
  createSDConfig?: Maybe<SdConfig>;
  createToken?: Maybe<RawToken>;
  createTokenSet?: Maybe<TokenSet>;
  declineInvitation?: Maybe<Scalars['String']['output']>;
  deleteAPIKey?: Maybe<ApiKey>;
  deleteGenerator?: Maybe<Generator>;
  deleteGroup?: Maybe<Group>;
  deleteInvitation?: Maybe<Invitation>;
  deleteOrganization?: Maybe<Organization>;
  deletePolicy?: Maybe<Policy>;
  deleteProject?: Maybe<Project>;
  deleteResolver?: Maybe<Resolver>;
  deleteSDConfig?: Maybe<SdConfig>;
  deleteToken?: Maybe<RawToken>;
  deleteTokenSet?: Maybe<TokenSet>;
  detachPolicyFromGroup?: Maybe<Group>;
  inviteToOrganization?: Maybe<Invitation>;
  regenerateApiKey?: Maybe<ApiKey>;
  removeFromOrganization?: Maybe<Scalars['Boolean']['output']>;
  removeMemberFromGroup?: Maybe<Scalars['String']['output']>;
  updateGenerator?: Maybe<Generator>;
  updateGroup?: Maybe<Project>;
  updateOrganization?: Maybe<Organization>;
  updatePolicy?: Maybe<Policy>;
  updateProject?: Maybe<Project>;
  updateResolver?: Maybe<Resolver>;
  updateSDConfig?: Maybe<SdConfig>;
  updateSelf?: Maybe<User>;
  updateToken?: Maybe<RawToken>;
  updateTokenSet?: Maybe<TokenSet>;
};


export type MutationAcceptInvitationArgs = {
  confirmCode: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationAddMemberToGroupArgs = {
  entity: Scalars['String']['input'];
  group: Scalars['String']['input'];
};


export type MutationAttachPolicyToGroupArgs = {
  group: Scalars['String']['input'];
  policy: Scalars['String']['input'];
};


export type MutationBulkCreateTokenArgs = {
  input: Array<InputMaybe<TokenInput>>;
  set: Scalars['String']['input'];
};


export type MutationConvertToStaticSetArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateApiKeyArgs = {
  input: ApiKeyInput;
  organization: Scalars['String']['input'];
};


export type MutationCreateGeneratorArgs = {
  input: GeneratorInput;
  project: Scalars['String']['input'];
};


export type MutationCreateGroupArgs = {
  input: GroupInput;
  organization: Scalars['String']['input'];
};


export type MutationCreateOrganizationArgs = {
  input: OrganizationInput;
};


export type MutationCreatePolicyArgs = {
  input: PolicyInput;
  organization: Scalars['String']['input'];
};


export type MutationCreateProjectArgs = {
  input: ProjectInput;
  organization: Scalars['String']['input'];
};


export type MutationCreateReleaseArgs = {
  input: ReleaseInput;
  project: Scalars['String']['input'];
};


export type MutationCreateResolverArgs = {
  input: ResolverInput;
  project: Scalars['String']['input'];
};


export type MutationCreateSdConfigArgs = {
  id: Scalars['String']['input'];
  input: SdConfigInput;
};


export type MutationCreateTokenArgs = {
  input: TokenInput;
  set: Scalars['String']['input'];
};


export type MutationCreateTokenSetArgs = {
  input: TokenSetInput;
  project: Scalars['String']['input'];
};


export type MutationDeclineInvitationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGeneratorArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInvitationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePolicyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteResolverArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSdConfigArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTokenArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTokenSetArgs = {
  id: Scalars['String']['input'];
};


export type MutationDetachPolicyFromGroupArgs = {
  group: Scalars['String']['input'];
  policy: Scalars['String']['input'];
};


export type MutationInviteToOrganizationArgs = {
  email: Scalars['String']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  organization: Scalars['String']['input'];
};


export type MutationRegenerateApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveFromOrganizationArgs = {
  organization: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type MutationRemoveMemberFromGroupArgs = {
  group: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type MutationUpdateGeneratorArgs = {
  id: Scalars['String']['input'];
  input: GeneratorInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['String']['input'];
  input: GroupUpdateInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['String']['input'];
  input: OrganizationUpdateInput;
};


export type MutationUpdatePolicyArgs = {
  id: Scalars['String']['input'];
  input: PolicyInputUpdate;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateInput;
};


export type MutationUpdateResolverArgs = {
  id: Scalars['String']['input'];
  input: ResolverUpdateInput;
};


export type MutationUpdateSdConfigArgs = {
  id: Scalars['String']['input'];
  input: SdConfigInput;
};


export type MutationUpdateSelfArgs = {
  input?: InputMaybe<UpdateSelfInput>;
};


export type MutationUpdateTokenArgs = {
  id: Scalars['String']['input'];
  input: TokenUpdateInput;
};


export type MutationUpdateTokenSetArgs = {
  id: Scalars['String']['input'];
  input: TokenSetUpdateInput;
};

export type Order = {
  direction: OrderDirection;
  field: Scalars['String']['input'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Organization = {
  __typename?: 'Organization';
  account?: Maybe<Scalars['String']['output']>;
  apiKeys?: Maybe<Array<Maybe<ApiKeyWithoutValue>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  payment?: Maybe<Scalars['String']['output']>;
  policies?: Maybe<Array<Maybe<Policy>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  ssoEnabled?: Maybe<Scalars['Boolean']['output']>;
  tier?: Maybe<OrganizationTier>;
  users?: Maybe<Array<Maybe<User>>>;
  visibility?: Maybe<Visibility>;
};


export type OrganizationGroupsArgs = {
  filter?: InputMaybe<GroupFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationPoliciesArgs = {
  filter?: InputMaybe<PolicyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationUsersArgs = {
  filter?: InputMaybe<UserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  owner?: InputMaybe<StringFilterInput>;
  visibility?: InputMaybe<VisibilityInput>;
};

export type OrganizationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
  tier: OrganizationTier;
  visibility: Visibility;
};

export type OrganizationMemberShip = {
  __typename?: 'OrganizationMemberShip';
  createdAt: Scalars['String']['output'];
};

export enum OrganizationTier {
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Starter = 'STARTER',
  Studio = 'STUDIO'
}

export type OrganizationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<OrganizationTier>;
  visibility?: InputMaybe<Visibility>;
};

export type Policy = {
  __typename?: 'Policy';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  value: PolicyDoc;
};

export type PolicyDoc = {
  __typename?: 'PolicyDoc';
  statement: Array<Maybe<PolicyStatement>>;
  version: Scalars['String']['output'];
};

export type PolicyDocInput = {
  statement: Array<PolicyStatementInput>;
  version: Scalars['String']['input'];
};

export type PolicyFilterInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<PolicyStringFilterInput>;
};

export type PolicyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: PolicyDocInput;
};

export type PolicyInputUpdate = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<PolicyDocInput>;
};

export type PolicyStatement = {
  __typename?: 'PolicyStatement';
  action: Array<Maybe<Scalars['String']['output']>>;
  effect: Scalars['String']['output'];
  resource: Array<Maybe<Scalars['String']['output']>>;
};

export type PolicyStatementInput = {
  action: Array<InputMaybe<Scalars['String']['input']>>;
  effect: Scalars['String']['input'];
  resource: Array<InputMaybe<Scalars['String']['input']>>;
};

export type PolicyStringFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Entity>;
  description?: Maybe<Scalars['String']['output']>;
  generators?: Maybe<Array<Maybe<Generator>>>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  releaseCount?: Maybe<Scalars['Int']['output']>;
  releases?: Maybe<Array<Maybe<Release>>>;
  resolvers?: Maybe<Array<Maybe<Resolver>>>;
  sdConfigs?: Maybe<Array<Maybe<SdConfig>>>;
  sets?: Maybe<Array<Maybe<TokenSet>>>;
  summary?: Maybe<ProjectSummary>;
  themeGroups?: Maybe<Array<Maybe<ThemeGroup>>>;
  tokenCount?: Maybe<Scalars['Int']['output']>;
  visibility: Visibility;
};


export type ProjectGeneratorsArgs = {
  filter?: InputMaybe<GeneratorFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectReleasesArgs = {
  filter?: InputMaybe<ReleaseFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectResolversArgs = {
  filter?: InputMaybe<ResolverFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectSdConfigsArgs = {
  filter?: InputMaybe<SdConfigFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectSetsArgs = {
  filter?: InputMaybe<TokenSetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectThemeGroupsArgs = {
  filter?: InputMaybe<ThemeGroupFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  visibility?: InputMaybe<VisibilityInput>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
  visibility: Visibility;
};

export type ProjectSummary = {
  __typename?: 'ProjectSummary';
  generators?: Maybe<SummarizedValue>;
  resolvers?: Maybe<SummarizedValue>;
  sets?: Maybe<SummarizedValue>;
  tokens?: Maybe<SummarizedValue>;
};

export type ProjectUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type Query = {
  __typename?: 'Query';
  apiKeys?: Maybe<Array<Maybe<ApiKeyWithoutValue>>>;
  generator?: Maybe<Generator>;
  generators?: Maybe<Array<Maybe<Generator>>>;
  groups?: Maybe<Array<Maybe<Group>>>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  policies?: Maybe<Array<Maybe<Policy>>>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  releaseCount?: Maybe<Scalars['Int']['output']>;
  releases?: Maybe<Array<Maybe<Release>>>;
  resolve?: Maybe<Array<Maybe<ResolvedToken>>>;
  resolver?: Maybe<Resolver>;
  resolvers?: Maybe<Array<Maybe<Resolver>>>;
  self?: Maybe<Self>;
  token?: Maybe<RawToken>;
  tokenCount?: Maybe<Scalars['Int']['output']>;
  tokenSet?: Maybe<TokenSet>;
  tokenSets: Array<TokenSet>;
  tokens: Array<RawToken>;
  userInvitations?: Maybe<Array<Maybe<Invitation>>>;
};


export type QueryApiKeysArgs = {
  filter?: InputMaybe<ApiKeyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
};


export type QueryGeneratorArgs = {
  id: Scalars['String']['input'];
};


export type QueryGeneratorsArgs = {
  filter?: InputMaybe<GeneratorFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  project: Scalars['String']['input'];
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<GroupFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
};


export type QueryOrganizationsArgs = {
  filter?: InputMaybe<OrganizationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPoliciesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
};


export type QueryReleaseCountArgs = {
  project: Scalars['String']['input'];
};


export type QueryReleasesArgs = {
  filter?: InputMaybe<ReleaseFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  project: Scalars['String']['input'];
};


export type QueryResolveArgs = {
  options?: InputMaybe<Array<InputMaybe<ResolverOptionsInput>>>;
  resolver: Scalars['String']['input'];
};


export type QueryResolverArgs = {
  id: Scalars['String']['input'];
};


export type QueryResolversArgs = {
  filter?: InputMaybe<ResolverFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  project: Scalars['String']['input'];
};


export type QueryTokenArgs = {
  id: Scalars['String']['input'];
};


export type QueryTokenCountArgs = {
  project: Scalars['String']['input'];
};


export type QueryTokenSetArgs = {
  id: Scalars['String']['input'];
};


export type QueryTokenSetsArgs = {
  filter?: InputMaybe<TokenSetsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  project: Scalars['String']['input'];
};


export type QueryTokensArgs = {
  filter?: InputMaybe<TokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  set: Scalars['String']['input'];
};


export type QueryUserInvitationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RawToken = {
  __typename?: 'RawToken';
  description?: Maybe<Scalars['String']['output']>;
  extensions?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']['output']>;
  setId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TokenType>;
  value?: Maybe<RawTokenValue>;
};

export type RawTokenValue = Raw_Token_Border | Raw_Token_BoxShadow | Raw_Token_Scalar | Raw_Token_Typography;

export type Raw_Token_Border = {
  __typename?: 'Raw_Token_border';
  border?: Maybe<Border>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Raw_Token_BoxShadow = {
  __typename?: 'Raw_Token_boxShadow';
  boxShadow?: Maybe<Array<Maybe<BoxShadow>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Raw_Token_Scalar = {
  __typename?: 'Raw_Token_scalar';
  value?: Maybe<Scalars['String']['output']>;
};

export type Raw_Token_Typography = {
  __typename?: 'Raw_Token_typography';
  typography?: Maybe<Typography>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Release = {
  __typename?: 'Release';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  download?: Maybe<ReleaseDownload>;
  generators?: Maybe<Array<ReleaseFile>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releasedBy?: Maybe<Entity>;
  tokenSets?: Maybe<Array<ReleaseFile>>;
  version: Scalars['String']['output'];
};

export type ReleaseDownload = {
  __typename?: 'ReleaseDownload';
  file?: Maybe<Array<Maybe<ReleaseFile>>>;
  zipUrl?: Maybe<ReleaseFile>;
};


export type ReleaseDownloadFileArgs = {
  filter?: InputMaybe<ReleaseDownloadFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ReleaseDownloadFilter = {
  name?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<ReleaseDownloadType>;
};

export enum ReleaseDownloadType {
  Fullzip = 'FULLZIP',
  Generator = 'GENERATOR',
  Set = 'SET'
}

export type ReleaseFile = {
  __typename?: 'ReleaseFile';
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ReleaseFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type ReleaseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  generators?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  tokenSets?: InputMaybe<Array<Scalars['String']['input']>>;
  version: Scalars['String']['input'];
};

export type ResolvedToken = {
  __typename?: 'ResolvedToken';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TokenType>;
  value?: Maybe<ResolvedTokenValue>;
};

export type ResolvedTokenInterface = {
  description?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TokenType>;
};

export type ResolvedTokenValue = Token_Border | Token_BoxShadow | Token_Scalar | Token_Typography;

export type Resolver = {
  __typename?: 'Resolver';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<ResolverOption>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ResolverFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type ResolverInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  graph: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ResolverOption = {
  __typename?: 'ResolverOption';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ResolverOptionsInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ResolverUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SdConfig = {
  __typename?: 'SDConfig';
  config?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  themeOptions?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SdConfigFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type SdConfigInput = {
  config: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  functions: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SdConfigUpdateInput = {
  config?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  functions?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Self = {
  __typename?: 'Self';
  identity?: Maybe<Identity>;
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  permissions?: Maybe<Array<Maybe<PolicyDoc>>>;
  user?: Maybe<User>;
};


export type SelfPermissionsArgs = {
  orgid?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateGroup?: Maybe<Group>;
  onCreateToken?: Maybe<RawToken>;
  onCreateTokenSet?: Maybe<TokenSet>;
  onDeleteToken?: Maybe<RawToken>;
  onDeleteTokenSet?: Maybe<TokenSet>;
  onUpdateToken?: Maybe<RawToken>;
  onUpdateTokenSet?: Maybe<TokenSet>;
};


export type SubscriptionOnCreateGroupArgs = {
  organization: Scalars['String']['input'];
};


export type SubscriptionOnCreateTokenArgs = {
  setid: Scalars['String']['input'];
};


export type SubscriptionOnCreateTokenSetArgs = {
  projectId: Scalars['String']['input'];
};


export type SubscriptionOnDeleteTokenArgs = {
  setid: Scalars['String']['input'];
};


export type SubscriptionOnDeleteTokenSetArgs = {
  projectId: Scalars['String']['input'];
};


export type SubscriptionOnUpdateTokenArgs = {
  setid: Scalars['String']['input'];
};


export type SubscriptionOnUpdateTokenSetArgs = {
  projectId: Scalars['String']['input'];
};

export type SummarizedValue = {
  __typename?: 'SummarizedValue';
  total: Scalars['Int']['output'];
};

export type ThemeGroup = {
  __typename?: 'ThemeGroup';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<ThemeOption>>>;
  projectId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type ThemeGroupFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type ThemeOption = {
  __typename?: 'ThemeOption';
  figmaStyleReferences?: Maybe<Scalars['JSON']['output']>;
  figmaVariableReferences?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  selectedTokenSets?: Maybe<Scalars['JSON']['output']>;
  urn: Scalars['String']['output'];
};

export type TokenFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<TokenTypeFilterInput>;
};

export type TokenInput = {
  border?: InputMaybe<BorderInput>;
  boxShadow?: InputMaybe<Array<InputMaybe<BoxShadowInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  extensions?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: TokenType;
  typography?: InputMaybe<TypographyInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TokenSet = {
  __typename?: 'TokenSet';
  createdAt?: Maybe<Scalars['String']['output']>;
  generatorId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']['output']>;
  orderIndex?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  tokens: Array<RawToken>;
  type?: Maybe<TokenSetType>;
};


export type TokenSetTokensArgs = {
  filter?: InputMaybe<TokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TokenSetFilterInput = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type TokenSetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<TokenSetType>;
};

export enum TokenSetType {
  Dynamic = 'DYNAMIC',
  Static = 'STATIC'
}

export type TokenSetUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TokenSetsFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export enum TokenType {
  Any = 'any',
  Assets = 'assets',
  Border = 'border',
  BorderRadius = 'borderRadius',
  BorderWidth = 'borderWidth',
  BoxShadow = 'boxShadow',
  Color = 'color',
  Composition = 'composition',
  Dimension = 'dimension',
  FontFamilies = 'fontFamilies',
  FontSizes = 'fontSizes',
  FontWeights = 'fontWeights',
  LetterSpacing = 'letterSpacing',
  LineHeights = 'lineHeights',
  Opacity = 'opacity',
  Other = 'other',
  ParagraphSpacing = 'paragraphSpacing',
  Sizing = 'sizing',
  Spacing = 'spacing',
  TextCase = 'textCase',
  TextDecoration = 'textDecoration',
  Typography = 'typography'
}

export type TokenTypeFilterInput = {
  eq?: InputMaybe<TokenType>;
  ne?: InputMaybe<TokenType>;
};

export type TokenUpdateInput = {
  border?: InputMaybe<BorderInput>;
  boxShadow?: InputMaybe<Array<InputMaybe<BoxShadowInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  extensions?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typography?: InputMaybe<TypographyInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Token_Composition = {
  __typename?: 'Token_Composition';
  value?: Maybe<Scalars['String']['output']>;
};

export type Token_Border = {
  __typename?: 'Token_border';
  border?: Maybe<Border>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Token_BoxShadow = {
  __typename?: 'Token_boxShadow';
  boxShadow?: Maybe<Array<Maybe<BoxShadow>>>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Token_Scalar = {
  __typename?: 'Token_scalar';
  value?: Maybe<Scalars['String']['output']>;
};

export type Token_Typography = {
  __typename?: 'Token_typography';
  typography?: Maybe<Typography>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Typography = {
  __typename?: 'Typography';
  fontFamily?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['String']['output']>;
  fontWeight?: Maybe<Scalars['String']['output']>;
  letterSpacing?: Maybe<Scalars['String']['output']>;
  lineHeight?: Maybe<Scalars['String']['output']>;
  paragraphIndent?: Maybe<Scalars['String']['output']>;
  paragraphSpacing?: Maybe<Scalars['String']['output']>;
  textCase?: Maybe<Scalars['String']['output']>;
  textDecoration?: Maybe<Scalars['String']['output']>;
};

export type TypographyInput = {
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['String']['input']>;
  fontWeight?: InputMaybe<Scalars['String']['input']>;
  letterSpacing?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['String']['input']>;
  paragraphIndent?: InputMaybe<Scalars['String']['input']>;
  paragraphSpacing?: InputMaybe<Scalars['String']['input']>;
  textCase?: InputMaybe<Scalars['String']['input']>;
  textDecoration?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSelfInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type User = {
  __typename?: 'User';
  description?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Visibility>;
};

export type UserFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export enum Visibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type VisibilityInput = {
  eq?: InputMaybe<Visibility>;
};

export type CreateTokenMutationVariables = Exact<{
  set: Scalars['String']['input'];
  input: TokenInput;
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'RawToken', description?: string | null, name?: string | null, id?: string | null, extensions?: string | null, setId?: string | null, type?: TokenType | null, value?: { __typename?: 'Raw_Token_border', value?: string | null } | { __typename?: 'Raw_Token_boxShadow', value?: string | null } | { __typename?: 'Raw_Token_scalar', value?: string | null } | { __typename?: 'Raw_Token_typography', value?: string | null } | null } | null };

export type CreateOrganizationMutationVariables = Exact<{
  input: OrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization?: { __typename?: 'Organization', id?: string | null, createdAt?: string | null, name?: string | null, description?: string | null, visibility?: Visibility | null, account?: string | null, payment?: string | null, tier?: OrganizationTier | null } | null };

export type CreateProjectMutationVariables = Exact<{
  organization: Scalars['String']['input'];
  input: ProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', createdAt: number, name: string, id: string, organizationId: string, visibility: Visibility, icon?: string | null, description?: string | null, releaseCount?: number | null, tokenCount?: number | null, sets?: Array<{ __typename?: 'TokenSet', id?: string | null, name?: string | null, projectId?: string | null, type?: TokenSetType | null, generatorId?: string | null, orderIndex?: string | null, createdAt?: string | null } | null> | null, resolvers?: Array<{ __typename?: 'Resolver', name?: string | null, description?: string | null, createdAt?: string | null, updatedAt?: string | null, id?: string | null } | null> | null, releases?: Array<{ __typename?: 'Release', id: string, name: string, version: string, description?: string | null, createdAt?: string | null } | null> | null, sdConfigs?: Array<{ __typename?: 'SDConfig', id: string, name: string, createdAt: string, updatedAt: string, projectId: string, config?: string | null, functions?: string | null, default?: boolean | null, themeOptions?: string | null } | null> | null, themeGroups?: Array<{ __typename?: 'ThemeGroup', id: string, name: string, createdAt: string, updatedAt: string, projectId?: string | null } | null> | null } | null };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'Project', id: string } | null };

export type GetOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'Query', organizations?: Array<{ __typename?: 'Organization', id?: string | null, name?: string | null, icon?: string | null, tier?: OrganizationTier | null } | null> | null };

export type GetPoliciesQueryVariables = Exact<{
  organization: Scalars['String']['input'];
}>;


export type GetPoliciesQuery = { __typename?: 'Query', policies?: Array<{ __typename?: 'Policy', createdAt?: string | null, description?: string | null, id?: string | null, name: string, value: { __typename?: 'PolicyDoc', version: string, statement: Array<{ __typename?: 'PolicyStatement', action: Array<string | null>, resource: Array<string | null>, effect: string } | null> } } | null> | null };

export type GetProjectQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', name: string, id: string, icon?: string | null, tokenCount?: number | null, releaseCount?: number | null } | null };

export type GetProjectsQueryVariables = Exact<{
  organization: Scalars['String']['input'];
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', name: string, id: string, icon?: string | null, tokenCount?: number | null, description?: string | null, releaseCount?: number | null } | null> | null };

export type GetProjectsWithTokenSetsQueryVariables = Exact<{
  organization: Scalars['String']['input'];
}>;


export type GetProjectsWithTokenSetsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, name: string, icon?: string | null, sets?: Array<{ __typename?: 'TokenSet', name?: string | null } | null> | null } | null> | null };

export type GetLatestReleaseQueryVariables = Exact<{
  project: Scalars['String']['input'];
}>;


export type GetLatestReleaseQuery = { __typename?: 'Query', releases?: Array<{ __typename?: 'Release', description?: string | null, name: string, id: string, version: string, createdAt?: string | null, tokenSets?: Array<{ __typename?: 'ReleaseFile', name?: string | null, type?: string | null, path?: string | null }> | null, generators?: Array<{ __typename?: 'ReleaseFile', name?: string | null }> | null } | null> | null };

export type GetTokenSetsQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetTokenSetsQuery = { __typename?: 'Query', tokenSets: Array<{ __typename?: 'TokenSet', name?: string | null, id?: string | null, createdAt?: string | null, type?: TokenSetType | null, orderIndex?: string | null, tokens: Array<{ __typename?: 'RawToken', name?: string | null, id?: string | null, type?: TokenType | null, value?: { __typename?: 'Raw_Token_border', value?: string | null, border?: { __typename?: 'Border', color?: string | null, style?: string | null, width?: string | null } | null } | { __typename?: 'Raw_Token_boxShadow', value?: string | null, boxShadow?: Array<{ __typename?: 'BoxShadow', x?: string | null, y?: string | null, blur?: string | null, spread?: string | null, color?: string | null, type?: string | null } | null> | null } | { __typename?: 'Raw_Token_scalar', value?: string | null } | { __typename?: 'Raw_Token_typography', value?: string | null, typography?: { __typename?: 'Typography', fontFamily?: string | null, fontWeight?: string | null, letterSpacing?: string | null, lineHeight?: string | null, fontSize?: string | null, paragraphIndent?: string | null, paragraphSpacing?: string | null, textCase?: string | null, textDecoration?: string | null } | null } | null }> }> };


export const CreateTokenDocument = gql`
    mutation CreateToken($set: String!, $input: TokenInput!) {
  createToken(set: $set, input: $input) {
    description
    name
    id
    extensions
    setId
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
    }
  }
}
    `;
export type CreateTokenMutationFn = Apollo.MutationFunction<CreateTokenMutation, CreateTokenMutationVariables>;

/**
 * __useCreateTokenMutation__
 *
 * To run a mutation, you first call `useCreateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenMutation, { data, loading, error }] = useCreateTokenMutation({
 *   variables: {
 *      set: // value for 'set'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateTokenMutation, CreateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTokenMutation, CreateTokenMutationVariables>(CreateTokenDocument, options);
      }
export type CreateTokenMutationHookResult = ReturnType<typeof useCreateTokenMutation>;
export type CreateTokenMutationResult = Apollo.MutationResult<CreateTokenMutation>;
export type CreateTokenMutationOptions = Apollo.BaseMutationOptions<CreateTokenMutation, CreateTokenMutationVariables>;
export const CreateOrganizationDocument = gql`
    mutation CreateOrganization($input: OrganizationInput!) {
  createOrganization(input: $input) {
    id
    createdAt
    name
    description
    visibility
    account
    payment
    tier
  }
}
    `;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($organization: String!, $input: ProjectInput!) {
  createProject(organization: $organization, input: $input) {
    createdAt
    name
    id
    organizationId
    visibility
    icon
    description
    sets {
      id
      name
      projectId
      type
      generatorId
      orderIndex
      createdAt
    }
    resolvers {
      name
      description
      createdAt
      updatedAt
      id
    }
    releases {
      id
      name
      version
      description
      createdAt
    }
    sdConfigs {
      id
      name
      createdAt
      updatedAt
      projectId
      config
      functions
      default
      themeOptions
    }
    themeGroups {
      id
      name
      createdAt
      updatedAt
      projectId
    }
    releaseCount
    tokenCount
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      organization: // value for 'organization'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($id: String!) {
  deleteProject(id: $id) {
    id
  }
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const GetOrganizationsDocument = gql`
    query GetOrganizations {
  organizations {
    id
    name
    icon
    tier
  }
}
    `;

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
      }
export function useGetOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export function useGetOrganizationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export type GetOrganizationsQueryHookResult = ReturnType<typeof useGetOrganizationsQuery>;
export type GetOrganizationsLazyQueryHookResult = ReturnType<typeof useGetOrganizationsLazyQuery>;
export type GetOrganizationsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationsSuspenseQuery>;
export type GetOrganizationsQueryResult = Apollo.QueryResult<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export const GetPoliciesDocument = gql`
    query getPolicies($organization: String!) {
  policies(organization: $organization) {
    createdAt
    description
    id
    name
    value {
      version
      statement {
        action
        resource
        effect
      }
    }
  }
}
    `;

/**
 * __useGetPoliciesQuery__
 *
 * To run a query within a React component, call `useGetPoliciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoliciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoliciesQuery({
 *   variables: {
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useGetPoliciesQuery(baseOptions: Apollo.QueryHookOptions<GetPoliciesQuery, GetPoliciesQueryVariables> & ({ variables: GetPoliciesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPoliciesQuery, GetPoliciesQueryVariables>(GetPoliciesDocument, options);
      }
export function useGetPoliciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoliciesQuery, GetPoliciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPoliciesQuery, GetPoliciesQueryVariables>(GetPoliciesDocument, options);
        }
export function useGetPoliciesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPoliciesQuery, GetPoliciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPoliciesQuery, GetPoliciesQueryVariables>(GetPoliciesDocument, options);
        }
export type GetPoliciesQueryHookResult = ReturnType<typeof useGetPoliciesQuery>;
export type GetPoliciesLazyQueryHookResult = ReturnType<typeof useGetPoliciesLazyQuery>;
export type GetPoliciesSuspenseQueryHookResult = ReturnType<typeof useGetPoliciesSuspenseQuery>;
export type GetPoliciesQueryResult = Apollo.QueryResult<GetPoliciesQuery, GetPoliciesQueryVariables>;
export const GetProjectDocument = gql`
    query getProject($id: String!) {
  project(id: $id) {
    name
    id
    icon
    tokenCount
    releaseCount
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables> & ({ variables: GetProjectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export function useGetProjectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectSuspenseQueryHookResult = ReturnType<typeof useGetProjectSuspenseQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetProjectsDocument = gql`
    query getProjects($organization: String!) {
  projects(organization: $organization) {
    name
    id
    icon
    tokenCount
    description
    id
    releaseCount
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables> & ({ variables: GetProjectsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export function useGetProjectsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsSuspenseQueryHookResult = ReturnType<typeof useGetProjectsSuspenseQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectsWithTokenSetsDocument = gql`
    query getProjectsWithTokenSets($organization: String!) {
  projects(organization: $organization) {
    id
    name
    icon
    sets {
      name
    }
  }
}
    `;

/**
 * __useGetProjectsWithTokenSetsQuery__
 *
 * To run a query within a React component, call `useGetProjectsWithTokenSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsWithTokenSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsWithTokenSetsQuery({
 *   variables: {
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useGetProjectsWithTokenSetsQuery(baseOptions: Apollo.QueryHookOptions<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables> & ({ variables: GetProjectsWithTokenSetsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>(GetProjectsWithTokenSetsDocument, options);
      }
export function useGetProjectsWithTokenSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>(GetProjectsWithTokenSetsDocument, options);
        }
export function useGetProjectsWithTokenSetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>(GetProjectsWithTokenSetsDocument, options);
        }
export type GetProjectsWithTokenSetsQueryHookResult = ReturnType<typeof useGetProjectsWithTokenSetsQuery>;
export type GetProjectsWithTokenSetsLazyQueryHookResult = ReturnType<typeof useGetProjectsWithTokenSetsLazyQuery>;
export type GetProjectsWithTokenSetsSuspenseQueryHookResult = ReturnType<typeof useGetProjectsWithTokenSetsSuspenseQuery>;
export type GetProjectsWithTokenSetsQueryResult = Apollo.QueryResult<GetProjectsWithTokenSetsQuery, GetProjectsWithTokenSetsQueryVariables>;
export const GetLatestReleaseDocument = gql`
    query getLatestRelease($project: String!) {
  releases(project: $project) {
    description
    name
    id
    version
    createdAt
    tokenSets {
      name
      type
      path
    }
    generators {
      name
    }
  }
}
    `;

/**
 * __useGetLatestReleaseQuery__
 *
 * To run a query within a React component, call `useGetLatestReleaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestReleaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestReleaseQuery({
 *   variables: {
 *      project: // value for 'project'
 *   },
 * });
 */
export function useGetLatestReleaseQuery(baseOptions: Apollo.QueryHookOptions<GetLatestReleaseQuery, GetLatestReleaseQueryVariables> & ({ variables: GetLatestReleaseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>(GetLatestReleaseDocument, options);
      }
export function useGetLatestReleaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>(GetLatestReleaseDocument, options);
        }
export function useGetLatestReleaseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>(GetLatestReleaseDocument, options);
        }
export type GetLatestReleaseQueryHookResult = ReturnType<typeof useGetLatestReleaseQuery>;
export type GetLatestReleaseLazyQueryHookResult = ReturnType<typeof useGetLatestReleaseLazyQuery>;
export type GetLatestReleaseSuspenseQueryHookResult = ReturnType<typeof useGetLatestReleaseSuspenseQuery>;
export type GetLatestReleaseQueryResult = Apollo.QueryResult<GetLatestReleaseQuery, GetLatestReleaseQueryVariables>;
export const GetTokenSetsDocument = gql`
    query getTokenSets($projectId: String!) {
  tokenSets(project: $projectId, limit: 1000) {
    name
    id
    createdAt
    type
    orderIndex
    tokens {
      name
      id
      type
      value {
        ... on Raw_Token_scalar {
          value
        }
        ... on Raw_Token_typography {
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
        }
        ... on Raw_Token_border {
          value
          border {
            color
            style
            width
          }
        }
        ... on Raw_Token_boxShadow {
          value
          boxShadow {
            x
            y
            blur
            spread
            color
            type
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTokenSetsQuery__
 *
 * To run a query within a React component, call `useGetTokenSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenSetsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetTokenSetsQuery(baseOptions: Apollo.QueryHookOptions<GetTokenSetsQuery, GetTokenSetsQueryVariables> & ({ variables: GetTokenSetsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenSetsQuery, GetTokenSetsQueryVariables>(GetTokenSetsDocument, options);
      }
export function useGetTokenSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenSetsQuery, GetTokenSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenSetsQuery, GetTokenSetsQueryVariables>(GetTokenSetsDocument, options);
        }
export function useGetTokenSetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTokenSetsQuery, GetTokenSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTokenSetsQuery, GetTokenSetsQueryVariables>(GetTokenSetsDocument, options);
        }
export type GetTokenSetsQueryHookResult = ReturnType<typeof useGetTokenSetsQuery>;
export type GetTokenSetsLazyQueryHookResult = ReturnType<typeof useGetTokenSetsLazyQuery>;
export type GetTokenSetsSuspenseQueryHookResult = ReturnType<typeof useGetTokenSetsSuspenseQuery>;
export type GetTokenSetsQueryResult = Apollo.QueryResult<GetTokenSetsQuery, GetTokenSetsQueryVariables>;