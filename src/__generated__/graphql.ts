/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** Custom scalar type for JSON objects */
  JSON: { input: any; output: any; }
};

export type ApiKey = {
  __typename?: 'APIKey';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ApiKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ApiKeyWithoutValue = {
  __typename?: 'APIKeyWithoutValue';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastUsed?: Maybe<Scalars['DateTimeISO']['output']>;
  name: Scalars['String']['output'];
};

export type Branch = {
  __typename?: 'Branch';
  branchedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  config: SdConfig;
  configs: PaginatedSdConfigs;
  createdAt: Scalars['DateTimeISO']['output'];
  icons: PaginatedIcons;
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  themeGroups: PaginatedThemeGroups;
  tokenSet: TokensSet;
  tokenSets: PaginatedSets;
};


export type BranchConfigArgs = {
  name: Scalars['String']['input'];
};


export type BranchConfigsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type BranchIconsArgs = {
  name: Scalars['String']['input'];
};


export type BranchThemeGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type BranchTokenSetArgs = {
  path: Scalars['String']['input'];
};


export type BranchTokenSetsArgs = {
  filter?: InputMaybe<TokenSetsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteSetTransaction = {
  __typename?: 'DeleteSetTransaction';
  completed: Scalars['DateTimeISO']['output'];
  sets: Array<TokensSet>;
};

export type DeletedSdConfig = {
  __typename?: 'DeletedSDConfig';
  branch: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
};

export type FileInput = {
  data: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Generator = {
  __typename?: 'Generator';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  graph: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Group = {
  __typename?: 'Group';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members: PaginatedUsers;
  name: Scalars['String']['output'];
};


export type GroupMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GroupUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Icon = {
  __typename?: 'Icon';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  raw: Scalars['String']['output'];
};

export type Invitation = {
  __typename?: 'Invitation';
  confirmCode?: Maybe<Scalars['String']['output']>;
  /** Only present when invited by email */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  organizationId: Scalars['String']['output'];
  status: InvitationStatus;
};

/** The status of the invitation */
export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvitation: Organization;
  addMemberToGroup: Group;
  createAPIKey: ApiKey;
  createGroup: Group;
  createOrganization: Organization;
  createPolicy: Policy;
  createProject: Project;
  createRelease: Release;
  createSDConfig: SdConfig;
  createThemeGroup: ThemeGroup;
  createThemeOption: ThemeOption;
  createToken: Token;
  createTokenSet: TokensSet;
  declineInvitation: Scalars['DateTimeISO']['output'];
  deleteAPIKey: ApiKeyWithoutValue;
  deleteAllSets: DeleteSetTransaction;
  deleteGroup: Group;
  deleteInvitation: Invitation;
  deleteOrganization: Organization;
  deletePolicy: Policy;
  deleteProject: Project;
  deleteSDConfig: DeletedSdConfig;
  deleteSet: TokensSet;
  inviteToOrganization: Invitation;
  regenerateApiKey: ApiKeyWithoutValue;
  removeFromOrganization: Transaction;
  removeMemberFromGroup: Group;
  resendInvitation: Invitation;
  updateGroup: Group;
  updateOrganization: Organization;
  updatePolicy: Policy;
  updateProject: Project;
  updateSelf: Scalars['DateTimeISO']['output'];
  updateTokenSet: TokensSet;
};


export type MutationAcceptInvitationArgs = {
  confirmCode: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationAddMemberToGroupArgs = {
  entity: Scalars['String']['input'];
  group: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationCreateApiKeyArgs = {
  input: ApiKeyInput;
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
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationCreateSdConfigArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  input: SdConfigInput;
  organization: Scalars['String']['input'];
};


export type MutationCreateThemeGroupArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  input: ThemeGroupInput;
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationCreateThemeOptionArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  input: ThemeOptionInput;
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
  theme: Scalars['String']['input'];
};


export type MutationCreateTokenArgs = {
  branch: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  path: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationCreateTokenSetArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  input: TokenSetInput;
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationDeclineInvitationArgs = {
  code: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAllSetsArgs = {
  branch: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  path: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationDeleteInvitationArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationDeleteOrganizationArgs = {
  organization: Scalars['String']['input'];
};


export type MutationDeletePolicyArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationDeleteSdConfigArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationDeleteSetArgs = {
  branch: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  path: Scalars['String']['input'];
  project: Scalars['String']['input'];
};


export type MutationInviteToOrganizationArgs = {
  email: Scalars['String']['input'];
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
  entity: Scalars['String']['input'];
  group: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationResendInvitationArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type MutationUpdateGroupArgs = {
  input: GroupUpdateInput;
  organization: Scalars['String']['input'];
};


export type MutationUpdateOrganizationArgs = {
  input: OrganizationInput;
  organization: Scalars['String']['input'];
};


export type MutationUpdatePolicyArgs = {
  id: Scalars['String']['input'];
  input: PolicyInput;
  organization: Scalars['String']['input'];
};


export type MutationUpdateProjectArgs = {
  id: Scalars['String']['input'];
  input: UpdateProjectInput;
  organization: Scalars['String']['input'];
};


export type MutationUpdateSelfArgs = {
  input: UpdateSelfInput;
};


export type MutationUpdateTokenSetArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  input: TokenSetUpdateInput;
  organization: Scalars['String']['input'];
  project: Scalars['String']['input'];
};

export enum OrgTier {
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Hobby = 'HOBBY',
  Studio = 'STUDIO'
}

export type Organization = {
  __typename?: 'Organization';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Groups of the organization */
  groups: PaginatedGroups;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  payment?: Maybe<Scalars['String']['output']>;
  /** Projects inside the organization */
  projects: PaginatedProjects;
  ssoEnabled?: Maybe<Scalars['Boolean']['output']>;
  tier: OrgTier;
  /** Users of the organization */
  users: PaginatedUsers;
  visibility?: Maybe<Visibility>;
};


export type OrganizationGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationUsersArgs = {
  filter?: InputMaybe<UserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Base64 encoded image data */
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PaginatedApiKeyWithoutValue = {
  __typename?: 'PaginatedAPIKeyWithoutValue';
  currentPage: Scalars['Int']['output'];
  data: Array<ApiKeyWithoutValue>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedBranches = {
  __typename?: 'PaginatedBranches';
  currentPage: Scalars['Int']['output'];
  data: Array<Branch>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedGroups = {
  __typename?: 'PaginatedGroups';
  currentPage: Scalars['Int']['output'];
  data: Array<Group>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedIcons = {
  __typename?: 'PaginatedIcons';
  currentPage: Scalars['Int']['output'];
  data: Array<Icon>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedInvitations = {
  __typename?: 'PaginatedInvitations';
  currentPage: Scalars['Int']['output'];
  data: Array<Invitation>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedOrganization = {
  __typename?: 'PaginatedOrganization';
  currentPage: Scalars['Int']['output'];
  data: Array<Organization>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedPolicies = {
  __typename?: 'PaginatedPolicies';
  currentPage: Scalars['Int']['output'];
  data: Array<Policy>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedProjects = {
  __typename?: 'PaginatedProjects';
  currentPage: Scalars['Int']['output'];
  data: Array<Project>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedReleases = {
  __typename?: 'PaginatedReleases';
  currentPage: Scalars['Int']['output'];
  data: Array<Release>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedSdConfigs = {
  __typename?: 'PaginatedSDConfigs';
  currentPage: Scalars['Int']['output'];
  data: Array<SdConfig>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedSets = {
  __typename?: 'PaginatedSets';
  currentPage: Scalars['Int']['output'];
  data: Array<TokensSet>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedThemeGroups = {
  __typename?: 'PaginatedThemeGroups';
  currentPage: Scalars['Int']['output'];
  data: Array<ThemeGroup>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  currentPage: Scalars['Int']['output'];
  data: Array<User>;
  lastPage: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Policy = {
  __typename?: 'Policy';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type PolicyDocInput = {
  statement: Array<PolicyStatementInput>;
  version: Scalars['String']['input'];
};

export type PolicyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: PolicyDocInput;
};

export type PolicyStatementInput = {
  action: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resource?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Project = {
  __typename?: 'Project';
  branch: Branch;
  branches: PaginatedBranches;
  defaultBranchName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  release: Release;
  releases: PaginatedReleases;
  visibility: Visibility;
};


export type ProjectBranchArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type ProjectBranchesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectReleaseArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type ProjectReleasesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectFilterInput = {
  name?: InputMaybe<StringFilterInput>;
  visibility?: InputMaybe<VisibilityInput>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FileInput>;
  name: Scalars['String']['input'];
  visibility?: Visibility;
};

export type PublicApi = {
  __typename?: 'PublicApi';
  /** Public organizations */
  organizations: PaginatedOrganization;
  /** Public users */
  users: PaginatedUsers;
};


export type PublicApiOrganizationsArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type PublicApiUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  branch: Branch;
  group: Group;
  groups: PaginatedGroups;
  organization: Organization;
  organizations: PaginatedOrganization;
  policies: PaginatedPolicies;
  policy: Policy;
  project: Project;
  projects: PaginatedProjects;
  public: PublicApi;
  self: Self;
  userInvitations: PaginatedInvitations;
};


export type QueryBranchArgs = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  project: Scalars['String']['input'];
};


export type QueryGroupArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPoliciesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPolicyArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
  organization: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserInvitationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Release = {
  __typename?: 'Release';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  modifiedAt?: Maybe<Scalars['Float']['output']>;
  projectId: Scalars['String']['output'];
  releasedBy: User;
  version: Scalars['String']['output'];
};

export type ReleaseInput = {
  /** A description of the release in markdown. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** An optional human readable name for the release. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The new version of the release. Must be a valid semver version. */
  version: Scalars['String']['input'];
};

export type SdConfig = {
  __typename?: 'SDConfig';
  branch: Scalars['String']['output'];
  config: Scalars['JSON']['output'];
  functions: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
};

export type SdConfigInput = {
  config: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  functions: Scalars['String']['input'];
  name: Scalars['String']['input'];
  themeOptions: Scalars['JSON']['input'];
};

export type Self = {
  __typename?: 'Self';
  /** A single API Key */
  apiKey: ApiKeyWithoutValue;
  /** The api keys owned by the user */
  apiKeys: PaginatedApiKeyWithoutValue;
  id: Scalars['String']['output'];
  invitations: PaginatedInvitations;
  /** The underlying user */
  user: User;
};


export type SelfApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type SelfApiKeysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type SelfInvitationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type StringFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateGroup: Group;
  onCreateProject: Project;
};


export type SubscriptionOnCreateGroupArgs = {
  organization: Scalars['String']['input'];
};


export type SubscriptionOnCreateProjectArgs = {
  organization: Scalars['String']['input'];
};

export type ThemeGroup = {
  __typename?: 'ThemeGroup';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options: Array<ThemeOption>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ThemeGroupInput = {
  name: Scalars['String']['input'];
  options: Array<ThemeOptionInput>;
};

export type ThemeOption = {
  __typename?: 'ThemeOption';
  figmaStyleReferences: Scalars['JSON']['output'];
  figmaVariableReferences: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  selectedTokenSets: Scalars['JSON']['output'];
};

export type ThemeOptionInput = {
  figmaStyleReferences: Scalars['JSON']['input'];
  figmaVariableReferences: Scalars['JSON']['input'];
  name: Scalars['String']['input'];
  selectedTokenSets: Scalars['JSON']['input'];
};

export type Token = {
  __typename?: 'Token';
  description?: Maybe<Scalars['String']['output']>;
  extensions?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type TokenSetInput = {
  path: Scalars['String']['input'];
  raw?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<TokenSetType>;
};

export enum TokenSetType {
  Dynamic = 'Dynamic',
  Static = 'Static'
}

export type TokenSetUpdateInput = {
  newPath?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  raw?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<TokenSetType>;
};

export type TokenSetsFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type TokensSet = {
  __typename?: 'TokensSet';
  createdAt: Scalars['DateTimeISO']['output'];
  generator?: Maybe<Generator>;
  generatorId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** The raw json data of the set */
  raw?: Maybe<Scalars['JSON']['output']>;
  sha: Scalars['String']['output'];
  /** The transformed tokens of the set */
  tokens: Array<Token>;
  type: TokenSetType;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String']['output'];
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<FileInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateSelfInput = {
  /** Optional User description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** A preferred name of the user */
  givenName?: InputMaybe<Scalars['String']['input']>;
  /** An icon in base64 format */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Display name of the user */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Visibility of the user to search */
  visibility?: InputMaybe<Visibility>;
};

export type User = {
  __typename?: 'User';
  description?: Maybe<Scalars['String']['output']>;
  /** A preferred name of the user */
  givenName?: Maybe<Scalars['String']['output']>;
  /** Groups the user is part of */
  groups?: Maybe<PaginatedGroups>;
  /** The icon of the user as html link to an image */
  icon?: Maybe<Scalars['String']['output']>;
  /** The icon of the user as html link to an image */
  id: Scalars['ID']['output'];
  /** Display name of the user */
  name: Scalars['String']['output'];
};


export type UserGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  organization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

/** The visibility options */
export enum Visibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type VisibilityInput = {
  eq: Visibility;
};
