/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Group = {
    __typename: 'Group';
    createdAt: string;
    description?: string | null;
    members?: Array<Entity | null> | null;
    name: string;
    policy?: Policy | null;
    urn?: string | null;
};

export type Entity = APIKeyIdentity | User;

export type APIKeyIdentity = {
    __typename: 'APIKeyIdentity';
    name?: string | null;
    urn?: string | null;
};

export type User = {
    __typename: 'User';
    description?: string | null;
    givenName?: string | null;
    icon?: string | null;
    name?: string | null;
    urn?: string | null;
    visibility?: Visibility | null;
};

export enum Visibility {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}

export type Policy = {
    __typename: 'Policy';
    createdAt?: string | null;
    description?: string | null;
    name: string;
    urn?: string | null;
    value: PolicyDoc;
};

export type PolicyDoc = {
    __typename: 'PolicyDoc';
    statement: Array<PolicyStatement | null>;
    version: string;
};

export type PolicyStatement = {
    __typename: 'PolicyStatement';
    action: Array<string | null>;
    effect: string;
    resource: Array<string | null>;
};

export type TokenInput = {
    border?: BorderInput | null;
    boxShadow?: Array<BoxShadowInput | null> | null;
    description?: string | null;
    extensions?: string | null;
    name: string;
    type: TokenType;
    typography?: TypographyInput | null;
    value?: string | null;
};

export type BorderInput = {
    color?: string | null;
    style?: string | null;
    width?: string | null;
};

export type BoxShadowInput = {
    blur?: string | null;
    color?: string | null;
    spread?: string | null;
    type?: string | null;
    x?: string | null;
    y?: string | null;
};

export enum TokenType {
    any = 'any',
    assets = 'assets',
    border = 'border',
    borderRadius = 'borderRadius',
    borderWidth = 'borderWidth',
    boxShadow = 'boxShadow',
    color = 'color',
    composition = 'composition',
    dimension = 'dimension',
    fontFamilies = 'fontFamilies',
    fontSizes = 'fontSizes',
    fontWeights = 'fontWeights',
    letterSpacing = 'letterSpacing',
    lineHeights = 'lineHeights',
    opacity = 'opacity',
    other = 'other',
    paragraphSpacing = 'paragraphSpacing',
    sizing = 'sizing',
    spacing = 'spacing',
    textCase = 'textCase',
    textDecoration = 'textDecoration',
    typography = 'typography'
}

export type TypographyInput = {
    fontFamily?: string | null;
    fontSize?: string | null;
    fontWeight?: string | null;
    letterSpacing?: string | null;
    lineHeight?: string | null;
    paragraphIndent?: string | null;
    paragraphSpacing?: string | null;
    textCase?: string | null;
    textDecoration?: string | null;
};

export type RawToken =
    | Raw_Token_border
    | Raw_Token_boxShadow
    | Raw_Token_color
    | Raw_Token_scalar
    | Raw_Token_typography;

export type Raw_Token_border = {
    __typename: 'Raw_Token_border';
    border?: Border | null;
    description?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    urn?: string | null;
    value?: string | null;
};

export type TokenInterface = {
    __typename: 'TokenInterface';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    urn?: string | null;
};

export type Raw_Token_boxShadow = {
    __typename: 'Raw_Token_boxShadow';
    boxShadow?: Array<BoxShadow | null> | null;
    description?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    urn?: string | null;
    value?: string | null;
};

export type BoxShadow = {
    __typename: 'BoxShadow';
    blur?: string | null;
    color?: string | null;
    spread?: string | null;
    type?: string | null;
    x?: string | null;
    y?: string | null;
};

export type Metadata = {
    __typename: 'Metadata';
    createdAt?: string | null;
    createdBy?: Entity | null;
    lastUpdatedBy?: Entity | null;
};

export type Raw_Token_color = {
    __typename: 'Raw_Token_color';
    description?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    urn?: string | null;
    value?: string | null;
};

export type Raw_Token_scalar = {
    __typename: 'Raw_Token_scalar';
    description?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    urn?: string | null;
    value?: string | null;
};

export type Raw_Token_typography = {
    __typename: 'Raw_Token_typography';
    description?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
    typography?: Typography | null;
    urn?: string | null;
    value?: string | null;
};

export type Typography = {
    __typename: 'Typography';
    fontFamily?: string | null;
    fontSize?: string | null;
    fontWeight?: string | null;
    letterSpacing?: string | null;
    lineHeight?: string | null;
    paragraphIndent?: string | null;
    paragraphSpacing?: string | null;
    textCase?: string | null;
    textDecoration?: string | null;
};

export type Border = {
    __typename: 'Border';
    color?: string | null;
    style?: string | null;
    width?: string | null;
};

export type APIKeyInput = {
    description?: string | null;
    name: string;
};

export type APIKey = {
    __typename: 'APIKey';
    description?: string | null;
    name?: string | null;
    urn?: string | null;
    value?: string | null;
};

export type GeneratorInput = {
    description?: string | null;
    graph?: string | null;
    name: string;
};

export type Generator = {
    __typename: 'Generator';
    createdAt?: string | null;
    description?: string | null;
    graph?: string | null;
    name?: string | null;
    updatedAt?: string | null;
    urn?: string | null;
};

export type GroupInput = {
    description?: string | null;
    icon?: string | null;
    name: string;
};

export type OrganizationInput = {
    description?: string | null;
    icon?: string | null;
    name: string;
    tier: OrganizationTier;
    visibility: Visibility;
};

export enum OrganizationTier {
    ENTERPRISE = 'ENTERPRISE',
    FREE = 'FREE',
    STARTER = 'STARTER',
    STUDIO = 'STUDIO'
}

export type Organization = {
    __typename: 'Organization';
    account?: string | null;
    apiKeys?: Array<APIKeyWithoutValue | null> | null;
    createdAt?: string | null;
    description?: string | null;
    groups?: Array<Group | null> | null;
    icon?: string | null;
    name?: string | null;
    owner?: User | null;
    payment?: string | null;
    policies?: Array<Policy | null> | null;
    projects?: Array<Project | null> | null;
    ssoEnabled?: boolean | null;
    tier?: OrganizationTier | null;
    urn?: string | null;
    users?: Array<User | null> | null;
    visibility?: Visibility | null;
};

export type APIKeyWithoutValue = {
    __typename: 'APIKeyWithoutValue';
    description?: string | null;
    lastUsed?: string | null;
    name?: string | null;
    urn?: string | null;
};

export type Project = {
    __typename: 'Project';
    createdAt: string;
    createdBy?: Entity | null;
    description?: string | null;
    generators?: Array<Generator | null> | null;
    icon?: string | null;
    name: string;
    orgUrn?: string | null;
    resolvers?: Array<Resolver | null> | null;
    sets?: Array<TokenSet | null> | null;
    summary?: ProjectSummary | null;
    urn: string;
    visibility?: Visibility | null;
};

export type Resolver = {
    __typename: 'Resolver';
    description?: string | null;
    modifiers?: Array<ResolverModifierOutput | null> | null;
    name?: string | null;
    release?: Array<Release | null> | null;
    sources?: Array<ResolverSource | null> | null;
    urn?: string | null;
};

export type ResolverModifierOutput = {
    __typename: 'ResolverModifierOutput';
    alias?: string | null;
    default?: string | null;
    name: string;
    type?: ResolverModifierType | null;
    values?: Array<ResolverModifierValue | null> | null;
};

export enum ResolverModifierType {
    DYNAMIC = 'DYNAMIC',
    ENUMERATED = 'ENUMERATED',
    FIXED = 'FIXED'
}

export type ResolverModifierValue = {
    __typename: 'ResolverModifierValue';
    branch?: string | null;
    name?: string | null;
    urn?: string | null;
    version?: string | null;
};

export type Release = {
    __typename: 'Release';
    createdAt?: string | null;
    description?: string | null;
    download?: ReleaseDownload | null;
    name: string;
    releasedBy?: Entity | null;
    updatedAt?: string | null;
    urn: string;
    version: string;
};

export type ReleaseDownload = {
    __typename: 'ReleaseDownload';
    url?: string | null;
};

export type ResolverSource = {
    __typename: 'ResolverSource';
    branch?: string | null;
    node?: TokenSet | null;
    urn: string;
    version?: string | null;
};

export type TokenSet = {
    __typename: 'TokenSet';
    metadata?: Metadata | null;
    name?: string | null;
    projectUrn?: string | null;
    tokens: Array<RawToken>;
    type?: TokenSetType | null;
    urn?: string | null;
};

export enum TokenSetType {
    DYNAMIC = 'DYNAMIC',
    STATIC = 'STATIC'
}

export type ProjectSummary = {
    __typename: 'ProjectSummary';
    generators?: SummarizedValue | null;
    resolvers?: SummarizedValue | null;
    sets?: SummarizedValue | null;
    tokens?: SummarizedValue | null;
};

export type SummarizedValue = {
    __typename: 'SummarizedValue';
    total: number;
};

export type PolicyInput = {
    description?: string | null;
    name: string;
    value: PolicyDocInput;
};

export type PolicyDocInput = {
    statement: Array<PolicyStatementInput>;
    version: string;
};

export type PolicyStatementInput = {
    action: Array<string | null>;
    effect: string;
    resource: Array<string | null>;
};

export type ProjectInput = {
    description?: string | null;
    icon?: string | null;
    name: string;
    visibility: Visibility;
};

export type ReleaseInput = {
    description?: string | null;
    generators?: Array<string> | null;
    name: string;
    tokenSets?: Array<string> | null;
    vesion: string;
};

export type ResolverInput = {
    description?: string | null;
    modifiers?: Array<ResolverModifier | null> | null;
    name: string;
    src: Array<ResolverSourceInput | null>;
};

export type ResolverModifier = {
    alias?: string | null;
    default?: string | null;
    name: string;
    type?: ResolverModifierType | null;
    values?: Array<ResolverModifierValueInput | null> | null;
};

export type ResolverModifierValueInput = {
    alias?: string | null;
    branch?: string | null;
    name: string;
    urn?: string | null;
    version?: string | null;
};

export type ResolverSourceInput = {
    branch?: string | null;
    urn: string;
    version?: string | null;
};

export type TokenSetInput = {
    description?: string | null;
    name: string;
    type?: TokenSetType | null;
};

export type Invitation = {
    __typename: 'Invitation';
    organization: string;
    status?: InvitationStatus | null;
    user: string;
};

export enum InvitationStatus {
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED',
    PENDING = 'PENDING'
}

export type GroupUpdateInput = {
    description?: string | null;
    icon?: string | null;
    name?: string | null;
};

export type OrganizationUpdateInput = {
    description?: string | null;
    icon?: string | null;
    name?: string | null;
    tier?: OrganizationTier | null;
    visibility?: Visibility | null;
};

export type PolicyInputUpdate = {
    description?: string | null;
    name?: string | null;
    value?: PolicyDocInput | null;
};

export type ProjectUpdateInput = {
    description?: string | null;
    icon?: string | null;
    name?: string | null;
    visibility?: Visibility | null;
};

export type UpdateSelfInput = {
    description?: string | null;
    givenName?: string | null;
    icon?: FileInput | null;
    name?: string | null;
    visibility?: Visibility | null;
};

export type FileInput = {
    data: string;
    name: string;
    type: string;
};

export type TokenUpdateInput = {
    border?: BorderInput | null;
    boxShadow?: BoxShadowInput | null;
    description?: string | null;
    extensions?: string | null;
    name?: string | null;
    typography?: TypographyInput | null;
    value?: string | null;
};

export type TokenSetUpdateInput = {
    description?: string | null;
    name?: string | null;
};

export type ApiKeyFilterInput = {
    name?: StringFilterInput | null;
    urn?: StringFilterInput | null;
};

export type StringFilterInput = {
    beginsWith?: string | null;
    eq?: string | null;
    ne?: string | null;
};

export type GeneratorFilterInput = {
    name?: StringFilterInput | null;
    urn?: StringFilterInput | null;
};

export type GroupFilterInput = {
    name?: GroupStringFilterInput | null;
    urn?: GroupUrnFilterInput | null;
};

export type GroupStringFilterInput = {
    eq?: string | null;
};

export type GroupUrnFilterInput = {
    eq?: string | null;
};

export type OrganizationFilterInput = {
    name?: StringFilterInput | null;
    owner?: StringFilterInput | null;
    urn?: StringFilterInput | null;
    visibility?: VisibilityInput | null;
};

export type VisibilityInput = {
    eq?: Visibility | null;
};

export type ProjectFilterInput = {
    name?: StringFilterInput | null;
    urn?: StringFilterInput | null;
    visibility?: VisibilityInput | null;
};

export type ReleaseFilterInput = {
    name?: StringFilterInput | null;
    urn?: StringFilterInput | null;
    version?: StringFilterInput | null;
};

export type Token =
    | Token_border
    | Token_boxShadow
    | Token_color
    | Token_scalar
    | Token_typography;

export type Token_border = {
    __typename: 'Token_border';
    border?: Border | null;
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    value?: string | null;
};

export type ResolvedTokenInterface = {
    __typename: 'ResolvedTokenInterface';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
};

export type Token_Composition = {
    __typename: 'Token_Composition';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    value?: string | null;
};

export type Token_boxShadow = {
    __typename: 'Token_boxShadow';
    boxShadow?: Array<BoxShadow | null> | null;
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    value?: string | null;
};

export type Token_color = {
    __typename: 'Token_color';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    value?: string | null;
};

export type Token_scalar = {
    __typename: 'Token_scalar';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    value?: string | null;
};

export type Token_typography = {
    __typename: 'Token_typography';
    description?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    type?: TokenType | null;
    typography?: Typography | null;
    value?: string | null;
};

export type ResolverFilterInput = {
    name?: StringFilterInput | null;
    urn?: StringFilterInput | null;
};

export type Self = {
    __typename: 'Self';
    identity?: Identity | null;
    invitations?: Array<Invitation | null> | null;
    organizations?: Array<Organization | null> | null;
    permissions?: Array<PolicyDoc | null> | null;
    user?: User | null;
};

export type Identity = {
    __typename: 'Identity';
    authenticated: boolean;
    urn?: string | null;
};

export type TokenSetsFilterInput = {
    name?: StringFilterInput | null;
};

export type TokenFilterInput = {
    name?: StringFilterInput | null;
    type?: TokenTypeFilterInput | null;
    urn?: StringFilterInput | null;
};

export type TokenTypeFilterInput = {
    eq?: TokenType | null;
    ne?: TokenType | null;
};

export type AcceptInvitationMutationVariables = {
    urn: string;
};

export type AcceptInvitationMutation = {
    acceptInvitation?: string | null;
};

export type AddMemberToGroupMutationVariables = {
    entity: string;
    group: string;
};

export type AddMemberToGroupMutation = {
    addMemberToGroup?: string | null;
};

export type AttachPolicyToGroupMutationVariables = {
    group: string;
    policy: string;
};

export type AttachPolicyToGroupMutation = {
    attachPolicyToGroup?: {
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null;
};

export type BulkCreateTokenMutationVariables = {
    input: Array<TokenInput | null>;
    set: string;
};

export type BulkCreateTokenMutation = {
    bulkCreateToken: Array<
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null
    > | null;
};

export type CreateAPIKeyMutationVariables = {
    input: APIKeyInput;
    organization: string;
};

export type CreateAPIKeyMutation = {
    createAPIKey?: {
        __typename: 'APIKey';
        description?: string | null;
        name?: string | null;
        urn?: string | null;
        value?: string | null;
    } | null;
};

export type CreateGeneratorMutationVariables = {
    input: GeneratorInput;
    project: string;
};

export type CreateGeneratorMutation = {
    createGenerator?: {
        __typename: 'Generator';
        createdAt?: string | null;
        description?: string | null;
        graph?: string | null;
        name?: string | null;
        updatedAt?: string | null;
        urn?: string | null;
    } | null;
};

export type CreateGroupMutationVariables = {
    input: GroupInput;
    organization: string;
};

export type CreateGroupMutation = {
    createGroup?: {
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null;
};

export type CreateOrganizationMutationVariables = {
    input: OrganizationInput;
};

export type CreateOrganizationMutation = {
    createOrganization?: {
        __typename: 'Organization';
        account?: string | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            description?: string | null;
            lastUsed?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        createdAt?: string | null;
        description?: string | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name?: string | null;
        owner?: {
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null;
        payment?: string | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            description?: string | null;
            icon?: string | null;
            name: string;
            orgUrn?: string | null;
            urn: string;
            visibility?: Visibility | null;
        } | null> | null;
        ssoEnabled?: boolean | null;
        tier?: OrganizationTier | null;
        urn?: string | null;
        users?: Array<{
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
        visibility?: Visibility | null;
    } | null;
};

export type CreatePolicyMutationVariables = {
    input: PolicyInput;
    organization: string;
};

export type CreatePolicyMutation = {
    createPolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        description?: string | null;
        name: string;
        urn?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type CreateProjectMutationVariables = {
    input: ProjectInput;
    organization: string;
};

export type CreateProjectMutation = {
    createProject?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type CreateReleaseMutationVariables = {
    input: ReleaseInput;
    project: string;
};

export type CreateReleaseMutation = {
    createRelease?: {
        __typename: 'Release';
        createdAt?: string | null;
        description?: string | null;
        download?: {
            __typename: 'ReleaseDownload';
            url?: string | null;
        } | null;
        name: string;
        releasedBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        updatedAt?: string | null;
        urn: string;
        version: string;
    } | null;
};

export type CreateResolverMutationVariables = {
    input: ResolverInput;
    project: string;
};

export type CreateResolverMutation = {
    createResolver?: {
        __typename: 'Resolver';
        description?: string | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            alias?: string | null;
            default?: string | null;
            name: string;
            type?: ResolverModifierType | null;
        } | null> | null;
        name?: string | null;
        release?: Array<{
            __typename: 'Release';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            updatedAt?: string | null;
            urn: string;
            version: string;
        } | null> | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            branch?: string | null;
            urn: string;
            version?: string | null;
        } | null> | null;
        urn?: string | null;
    } | null;
};

export type CreateTokenMutationVariables = {
    input: TokenInput;
    set: string;
};

export type CreateTokenMutation = {
    createToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type CreateTokenSetMutationVariables = {
    input: TokenSetInput;
    project: string;
};

export type CreateTokenSetMutation = {
    createTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type DeclineInvitationMutationVariables = {
    urn: string;
};

export type DeclineInvitationMutation = {
    declineInvitation?: string | null;
};

export type DeleteAPIKeyMutationVariables = {
    urn: string;
};

export type DeleteAPIKeyMutation = {
    deleteAPIKey?: {
        __typename: 'APIKey';
        description?: string | null;
        name?: string | null;
        urn?: string | null;
        value?: string | null;
    } | null;
};

export type DeleteGeneratorMutationVariables = {
    urn: string;
};

export type DeleteGeneratorMutation = {
    deleteGenerator?: {
        __typename: 'Generator';
        createdAt?: string | null;
        description?: string | null;
        graph?: string | null;
        name?: string | null;
        updatedAt?: string | null;
        urn?: string | null;
    } | null;
};

export type DeleteGroupMutationVariables = {
    urn: string;
};

export type DeleteGroupMutation = {
    deleteGroup?: {
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null;
};

export type DeleteInvitationMutationVariables = {
    urn: string;
};

export type DeleteInvitationMutation = {
    deleteInvitation?: {
        __typename: 'Invitation';
        organization: string;
        status?: InvitationStatus | null;
        user: string;
    } | null;
};

export type DeleteOrganizationMutationVariables = {
    urn: string;
};

export type DeleteOrganizationMutation = {
    deleteOrganization?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type DeletePolicyMutationVariables = {
    urn: string;
};

export type DeletePolicyMutation = {
    deletePolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        description?: string | null;
        name: string;
        urn?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type DeleteProjectMutationVariables = {
    urn: string;
};

export type DeleteProjectMutation = {
    deleteProject?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type DeleteResolverMutationVariables = {
    urn: string;
};

export type DeleteResolverMutation = {
    deleteResolver?: {
        __typename: 'Resolver';
        description?: string | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            alias?: string | null;
            default?: string | null;
            name: string;
            type?: ResolverModifierType | null;
        } | null> | null;
        name?: string | null;
        release?: Array<{
            __typename: 'Release';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            updatedAt?: string | null;
            urn: string;
            version: string;
        } | null> | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            branch?: string | null;
            urn: string;
            version?: string | null;
        } | null> | null;
        urn?: string | null;
    } | null;
};

export type DeleteTokenMutationVariables = {
    urn: string;
};

export type DeleteTokenMutation = {
    deleteToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type DeleteTokenSetMutationVariables = {
    urn: string;
};

export type DeleteTokenSetMutation = {
    deleteTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type DetachPolicyFromGroupMutationVariables = {
    group: string;
    policy: string;
};

export type DetachPolicyFromGroupMutation = {
    detachPolicyFromGroup?: {
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null;
};

export type InviteToOrganizationMutationVariables = {
    groups?: Array<string> | null;
    organization: string;
    user: string;
};

export type InviteToOrganizationMutation = {
    inviteToOrganization?: {
        __typename: 'Invitation';
        organization: string;
        status?: InvitationStatus | null;
        user: string;
    } | null;
};

export type RegenerateApiKeyMutationVariables = {
    urn: string;
};

export type RegenerateApiKeyMutation = {
    regenerateApiKey?: {
        __typename: 'APIKey';
        description?: string | null;
        name?: string | null;
        urn?: string | null;
        value?: string | null;
    } | null;
};

export type RemoveFromOrganizationMutationVariables = {
    organization: string;
    user: string;
};

export type RemoveFromOrganizationMutation = {
    removeFromOrganization?: boolean | null;
};

export type RemoveMemberFromGroupMutationVariables = {
    group: string;
    user: string;
};

export type RemoveMemberFromGroupMutation = {
    removeMemberFromGroup?: string | null;
};

export type UpdateGeneratorMutationVariables = {
    input: GeneratorInput;
    urn: string;
};

export type UpdateGeneratorMutation = {
    updateGenerator?: {
        __typename: 'Generator';
        createdAt?: string | null;
        description?: string | null;
        graph?: string | null;
        name?: string | null;
        updatedAt?: string | null;
        urn?: string | null;
    } | null;
};

export type UpdateGroupMutationVariables = {
    input: GroupUpdateInput;
    urn: string;
};

export type UpdateGroupMutation = {
    updateGroup?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type UpdateOrganizationMutationVariables = {
    input: OrganizationUpdateInput;
    urn: string;
};

export type UpdateOrganizationMutation = {
    updateOrganization?: {
        __typename: 'Organization';
        account?: string | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            description?: string | null;
            lastUsed?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        createdAt?: string | null;
        description?: string | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name?: string | null;
        owner?: {
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null;
        payment?: string | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            description?: string | null;
            icon?: string | null;
            name: string;
            orgUrn?: string | null;
            urn: string;
            visibility?: Visibility | null;
        } | null> | null;
        ssoEnabled?: boolean | null;
        tier?: OrganizationTier | null;
        urn?: string | null;
        users?: Array<{
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
        visibility?: Visibility | null;
    } | null;
};

export type UpdatePolicyMutationVariables = {
    input: PolicyInputUpdate;
    urn: string;
};

export type UpdatePolicyMutation = {
    updatePolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        description?: string | null;
        name: string;
        urn?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type UpdateProjectMutationVariables = {
    input: ProjectUpdateInput;
    urn: string;
};

export type UpdateProjectMutation = {
    updateProject?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type UpdateResolverMutationVariables = {
    input: ResolverInput;
    urn: string;
};

export type UpdateResolverMutation = {
    updateResolver?: {
        __typename: 'Resolver';
        description?: string | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            alias?: string | null;
            default?: string | null;
            name: string;
            type?: ResolverModifierType | null;
        } | null> | null;
        name?: string | null;
        release?: Array<{
            __typename: 'Release';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            updatedAt?: string | null;
            urn: string;
            version: string;
        } | null> | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            branch?: string | null;
            urn: string;
            version?: string | null;
        } | null> | null;
        urn?: string | null;
    } | null;
};

export type UpdateSelfMutationVariables = {
    input?: UpdateSelfInput | null;
};

export type UpdateSelfMutation = {
    updateSelf?: {
        __typename: 'User';
        description?: string | null;
        givenName?: string | null;
        icon?: string | null;
        name?: string | null;
        urn?: string | null;
        visibility?: Visibility | null;
    } | null;
};

export type UpdateTokenMutationVariables = {
    input: TokenUpdateInput;
    urn: string;
};

export type UpdateTokenMutation = {
    updateToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type UpdateTokenSetMutationVariables = {
    input: TokenSetUpdateInput;
    urn: string;
};

export type UpdateTokenSetMutation = {
    updateTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type ApiKeysQueryVariables = {
    filter?: ApiKeyFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    organization: string;
};

export type ApiKeysQuery = {
    apiKeys?: Array<{
        __typename: 'APIKeyWithoutValue';
        description?: string | null;
        lastUsed?: string | null;
        name?: string | null;
        urn?: string | null;
    } | null> | null;
};

export type GeneratorQueryVariables = {
    urn: string;
};

export type GeneratorQuery = {
    generator?: {
        __typename: 'Generator';
        createdAt?: string | null;
        description?: string | null;
        graph?: string | null;
        name?: string | null;
        updatedAt?: string | null;
        urn?: string | null;
    } | null;
};

export type GeneratorsQueryVariables = {
    filter?: GeneratorFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    project: string;
};

export type GeneratorsQuery = {
    generators?: Array<{
        __typename: 'Generator';
        createdAt?: string | null;
        description?: string | null;
        graph?: string | null;
        name?: string | null;
        updatedAt?: string | null;
        urn?: string | null;
    } | null> | null;
};

export type GroupsQueryVariables = {
    filter?: GroupFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    organization: string;
};

export type GroupsQuery = {
    groups?: Array<{
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null> | null;
};

export type OrganizationsQueryVariables = {
    filter?: OrganizationFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type OrganizationsQuery = {
    organizations?: Array<{
        __typename: 'Organization';
        account?: string | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            description?: string | null;
            lastUsed?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        createdAt?: string | null;
        description?: string | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name?: string | null;
        owner?: {
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null;
        payment?: string | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null> | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            description?: string | null;
            icon?: string | null;
            name: string;
            orgUrn?: string | null;
            urn: string;
            visibility?: Visibility | null;
        } | null> | null;
        ssoEnabled?: boolean | null;
        tier?: OrganizationTier | null;
        urn?: string | null;
        users?: Array<{
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
        visibility?: Visibility | null;
    } | null> | null;
};

export type PoliciesQueryVariables = {
    limit?: number | null;
    offset?: number | null;
    organization: string;
};

export type PoliciesQuery = {
    policies?: Array<{
        __typename: 'Policy';
        createdAt?: string | null;
        description?: string | null;
        name: string;
        urn?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null> | null;
};

export type ProjectQueryVariables = {
    urn: string;
};

export type ProjectQuery = {
    project?: {
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null;
};

export type ProjectsQueryVariables = {
    filter?: ProjectFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    organization: string;
};

export type ProjectsQuery = {
    projects?: Array<{
        __typename: 'Project';
        createdAt: string;
        createdBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        description?: string | null;
        generators?: Array<{
            __typename: 'Generator';
            createdAt?: string | null;
            description?: string | null;
            graph?: string | null;
            name?: string | null;
            updatedAt?: string | null;
            urn?: string | null;
        } | null> | null;
        icon?: string | null;
        name: string;
        orgUrn?: string | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            description?: string | null;
            name?: string | null;
            urn?: string | null;
        } | null> | null;
        sets?: Array<{
            __typename: 'TokenSet';
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            urn?: string | null;
        } | null> | null;
        urn: string;
        visibility?: Visibility | null;
    } | null> | null;
};

export type ReleasesQueryVariables = {
    filter?: ReleaseFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    project: string;
};

export type ReleasesQuery = {
    releases?: Array<{
        __typename: 'Release';
        createdAt?: string | null;
        description?: string | null;
        download?: {
            __typename: 'ReleaseDownload';
            url?: string | null;
        } | null;
        name: string;
        releasedBy:
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null;
        updatedAt?: string | null;
        urn: string;
        version: string;
    } | null> | null;
};

export type ResolveQueryVariables = {
    modifiers?: Array<ResolverModifierValueInput | null> | null;
    resolver: string;
};

export type ResolveQuery = {
    resolve: Array<
        | (
              | {
                    __typename: 'Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    type?: TokenType | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    type?: TokenType | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Token_color';
                    description?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    type?: TokenType | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Token_scalar';
                    description?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    type?: TokenType | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Token_typography';
                    description?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    value?: string | null;
                }
          )
        | null
    > | null;
};

export type ResolverQueryVariables = {
    urn: string;
};

export type ResolverQuery = {
    resolver?: {
        __typename: 'Resolver';
        description?: string | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            alias?: string | null;
            default?: string | null;
            name: string;
            type?: ResolverModifierType | null;
        } | null> | null;
        name?: string | null;
        release?: Array<{
            __typename: 'Release';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            updatedAt?: string | null;
            urn: string;
            version: string;
        } | null> | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            branch?: string | null;
            urn: string;
            version?: string | null;
        } | null> | null;
        urn?: string | null;
    } | null;
};

export type ResolversQueryVariables = {
    filter?: ResolverFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    project: string;
};

export type ResolversQuery = {
    resolvers?: Array<{
        __typename: 'Resolver';
        description?: string | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            alias?: string | null;
            default?: string | null;
            name: string;
            type?: ResolverModifierType | null;
        } | null> | null;
        name?: string | null;
        release?: Array<{
            __typename: 'Release';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            updatedAt?: string | null;
            urn: string;
            version: string;
        } | null> | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            branch?: string | null;
            urn: string;
            version?: string | null;
        } | null> | null;
        urn?: string | null;
    } | null> | null;
};

export type SelfQuery = {
    self?: {
        __typename: 'Self';
        identity?: {
            __typename: 'Identity';
            authenticated: boolean;
            urn?: string | null;
        } | null;
        invitations?: Array<{
            __typename: 'Invitation';
            organization: string;
            status?: InvitationStatus | null;
            user: string;
        } | null> | null;
        organizations?: Array<{
            __typename: 'Organization';
            account?: string | null;
            createdAt?: string | null;
            description?: string | null;
            icon?: string | null;
            name?: string | null;
            payment?: string | null;
            ssoEnabled?: boolean | null;
            tier?: OrganizationTier | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
        permissions?: Array<{
            __typename: 'PolicyDoc';
            version: string;
        } | null> | null;
        user?: {
            __typename: 'User';
            description?: string | null;
            givenName?: string | null;
            icon?: string | null;
            name?: string | null;
            urn?: string | null;
            visibility?: Visibility | null;
        } | null;
    } | null;
};

export type TokenQueryVariables = {
    urn: string;
};

export type TokenQuery = {
    token:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type TokenSetQueryVariables = {
    urn: string;
};

export type TokenSetQuery = {
    tokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type TokenSetsQueryVariables = {
    filter?: TokenSetsFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    project: string;
};

export type TokenSetsQuery = {
    tokenSets: Array<{
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    }>;
};

export type TokensQueryVariables = {
    filter?: TokenFilterInput | null;
    limit?: number | null;
    offset?: number | null;
    set: string;
};

export type TokensQuery = {
    tokens: Array<
        | {
              __typename: 'Raw_Token_border';
              border?: {
                  __typename: string;
                  color?: string | null;
                  style?: string | null;
                  width?: string | null;
              } | null;
              description?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              name?: string | null;
              setUrn?: string | null;
              type?: TokenType | null;
              urn?: string | null;
              value?: string | null;
          }
        | {
              __typename: 'Raw_Token_boxShadow';
              boxShadow?: Array<{
                  __typename: string;
                  blur?: string | null;
                  color?: string | null;
                  spread?: string | null;
                  type?: string | null;
                  x?: string | null;
                  y?: string | null;
              } | null> | null;
              description?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              name?: string | null;
              setUrn?: string | null;
              type?: TokenType | null;
              urn?: string | null;
              value?: string | null;
          }
        | {
              __typename: 'Raw_Token_color';
              description?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              name?: string | null;
              setUrn?: string | null;
              type?: TokenType | null;
              urn?: string | null;
              value?: string | null;
          }
        | {
              __typename: 'Raw_Token_scalar';
              description?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              name?: string | null;
              setUrn?: string | null;
              type?: TokenType | null;
              urn?: string | null;
              value?: string | null;
          }
        | {
              __typename: 'Raw_Token_typography';
              description?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              name?: string | null;
              setUrn?: string | null;
              type?: TokenType | null;
              typography?: {
                  __typename: string;
                  fontFamily?: string | null;
                  fontSize?: string | null;
                  fontWeight?: string | null;
                  letterSpacing?: string | null;
                  lineHeight?: string | null;
                  paragraphIndent?: string | null;
                  paragraphSpacing?: string | null;
                  textCase?: string | null;
                  textDecoration?: string | null;
              } | null;
              urn?: string | null;
              value?: string | null;
          }
    >;
};

export type UserInvitationsQueryVariables = {
    limit?: number | null;
};

export type UserInvitationsQuery = {
    userInvitations?: Array<{
        __typename: 'Invitation';
        organization: string;
        status?: InvitationStatus | null;
        user: string;
    } | null> | null;
};

export type OnCreateGroupSubscriptionVariables = {
    organization: string;
};

export type OnCreateGroupSubscription = {
    onCreateGroup?: {
        __typename: 'Group';
        createdAt: string;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
                  | {
                        __typename: 'User';
                        description?: string | null;
                        givenName?: string | null;
                        icon?: string | null;
                        name?: string | null;
                        urn?: string | null;
                        visibility?: Visibility | null;
                    }
              )
            | null
        > | null;
        name: string;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            description?: string | null;
            name: string;
            urn?: string | null;
        } | null;
        urn?: string | null;
    } | null;
};

export type OnCreateTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnCreateTokenSubscription = {
    onCreateToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type OnCreateTokenSetSubscriptionVariables = {
    projectUrn: string;
};

export type OnCreateTokenSetSubscription = {
    onCreateTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type OnDeleteTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnDeleteTokenSubscription = {
    onDeleteToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type OnDeleteTokenSetSubscriptionVariables = {
    projectUrn: string;
};

export type OnDeleteTokenSetSubscription = {
    onDeleteTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};

export type OnUpdateTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnUpdateTokenSubscription = {
    onUpdateToken:
        | (
              | {
                    __typename: 'Raw_Token_border';
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    boxShadow?: Array<{
                        __typename: string;
                        blur?: string | null;
                        color?: string | null;
                        spread?: string | null;
                        type?: string | null;
                        x?: string | null;
                        y?: string | null;
                    } | null> | null;
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    urn?: string | null;
                    value?: string | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    name?: string | null;
                    setUrn?: string | null;
                    type?: TokenType | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontSize?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    value?: string | null;
                }
          )
        | null;
};

export type OnUpdateTokenSetSubscriptionVariables = {
    projectUrn: string;
};

export type OnUpdateTokenSetSubscription = {
    onUpdateTokenSet?: {
        __typename: 'TokenSet';
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  extensions?: string | null;
                  name?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
                  urn?: string | null;
                  value?: string | null;
              }
        >;
        type?: TokenSetType | null;
        urn?: string | null;
    } | null;
};
