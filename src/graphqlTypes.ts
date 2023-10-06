/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProjectInput = {
    name: string;
    description?: string | null;
    visibility: Visibility;
    icon?: string | null;
};

export enum Visibility {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

export type Project = {
    __typename: 'Project';
    createdBy?: Entity | null;
    createdAt: string;
    name: string;
    urn: string;
    orgUrn?: string | null;
    visibility?: Visibility | null;
    icon?: string | null;
    description?: string | null;
    summary?: ProjectSummary | null;
    sets?: Array<TokenSet | null> | null;
    resolvers?: Array<Resolver | null> | null;
    generators?: Array<Generator | null> | null;
    releases?: Array<Release | null> | null;
    releaseCount?: number | null;
    tokenCount?: number | null;
};

export type Entity = User | APIKeyIdentity;

export type User = {
    __typename: 'User';
    name?: string | null;
    givenName?: string | null;
    urn?: string | null;
    description?: string | null;
    icon?: string | null;
    visibility?: Visibility | null;
};

export type APIKeyIdentity = {
    __typename: 'APIKeyIdentity';
    name?: string | null;
    urn?: string | null;
};

export type ProjectSummary = {
    __typename: 'ProjectSummary';
    sets?: SummarizedValue | null;
    resolvers?: SummarizedValue | null;
    generators?: SummarizedValue | null;
    tokens?: SummarizedValue | null;
};

export type SummarizedValue = {
    __typename: 'SummarizedValue';
    total: number;
};

export type TokenSet = {
    __typename: 'TokenSet';
    urn?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    projectUrn?: string | null;
    type?: TokenSetType | null;
    createdAt?: string | null;
    tokens: Array<RawToken>;
};

export type Metadata = {
    __typename: 'Metadata';
    createdAt?: string | null;
    createdBy?: Entity | null;
    lastUpdatedBy?: Entity | null;
};

export enum TokenSetType {
    STATIC = 'STATIC',
    DYNAMIC = 'DYNAMIC'
}

export type RawToken =
    | Raw_Token_color
    | Raw_Token_scalar
    | Raw_Token_typography
    | Raw_Token_border
    | Raw_Token_boxShadow;

export type Raw_Token_color = {
    __typename: 'Raw_Token_color';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    urn?: string | null;
    setUrn?: string | null;
    extensions?: string | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type TokenInterface = {
    __typename: 'TokenInterface';
    description?: string | null;
    urn?: string | null;
    metadata?: Metadata | null;
    name?: string | null;
    setUrn?: string | null;
    type?: TokenType | null;
};

export type Raw_Token_border = {
    __typename: 'Raw_Token_border';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    border?: Border | null;
    urn?: string | null;
    extensions?: string | null;
    setUrn?: string | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type Border = {
    __typename: 'Border';
    color?: string | null;
    style?: string | null;
    width?: string | null;
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

export type Raw_Token_boxShadow = {
    __typename: 'Raw_Token_boxShadow';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    boxShadow?: Array<BoxShadow | null> | null;
    urn?: string | null;
    extensions?: string | null;
    setUrn?: string | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type BoxShadow = {
    __typename: 'BoxShadow';
    x?: string | null;
    y?: string | null;
    blur?: string | null;
    spread?: string | null;
    color?: string | null;
    type?: string | null;
};

export type Raw_Token_scalar = {
    __typename: 'Raw_Token_scalar';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    urn?: string | null;
    extensions?: string | null;
    setUrn?: string | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type Raw_Token_typography = {
    __typename: 'Raw_Token_typography';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    typography?: Typography | null;
    urn?: string | null;
    extensions?: string | null;
    setUrn?: string | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type Typography = {
    __typename: 'Typography';
    fontFamily?: string | null;
    fontWeight?: string | null;
    letterSpacing?: string | null;
    lineHeight?: string | null;
    fontSize?: string | null;
    paragraphIndent?: string | null;
    paragraphSpacing?: string | null;
    textCase?: string | null;
    textDecoration?: string | null;
};

export type Resolver = {
    __typename: 'Resolver';
    name?: string | null;
    description?: string | null;
    urn?: string | null;
    sources?: Array<ResolverSource | null> | null;
    modifiers?: Array<ResolverModifierOutput | null> | null;
    release?: Array<Release | null> | null;
};

export type ResolverSource = {
    __typename: 'ResolverSource';
    urn: string;
    node?: TokenSet | null;
    version?: string | null;
    branch?: string | null;
};

export type ResolverModifierOutput = {
    __typename: 'ResolverModifierOutput';
    name: string;
    alias?: string | null;
    default?: string | null;
    type?: ResolverModifierType | null;
    values?: Array<ResolverModifierValue | null> | null;
};

export enum ResolverModifierType {
    ENUMERATED = 'ENUMERATED',
    DYNAMIC = 'DYNAMIC',
    FIXED = 'FIXED'
}

export type ResolverModifierValue = {
    __typename: 'ResolverModifierValue';
    name?: string | null;
    urn?: string | null;
    version?: string | null;
    branch?: string | null;
};

export type Release = {
    __typename: 'Release';
    urn: string;
    name: string;
    download?: ReleaseDownload | null;
    version: string;
    description?: string | null;
    tokenSets?: Array<ReleaseFile> | null;
    generators?: Array<ReleaseFile> | null;
    createdAt?: string | null;
    releasedBy?: Entity | null;
};

export type ReleaseDownload = {
    __typename: 'ReleaseDownload';
    zipUrl?: ReleaseFile | null;
    file?: Array<ReleaseFile | null> | null;
};

export type ReleaseFile = {
    __typename: 'ReleaseFile';
    path?: string | null;
    name?: string | null;
    type?: string | null;
};

export type Generator = {
    __typename: 'Generator';
    urn?: string | null;
    name?: string | null;
    description?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    graph?: string | null;
};

export type PolicyInput = {
    name: string;
    description?: string | null;
    value: PolicyDocInput;
};

export type PolicyDocInput = {
    version: string;
    statement: Array<PolicyStatementInput>;
};

export type PolicyStatementInput = {
    effect: string;
    action: Array<string | null>;
    resource: Array<string | null>;
};

export type Policy = {
    __typename: 'Policy';
    createdAt?: string | null;
    name: string;
    urn?: string | null;
    description?: string | null;
    value: PolicyDoc;
};

export type PolicyDoc = {
    __typename: 'PolicyDoc';
    version: string;
    statement: Array<PolicyStatement | null>;
};

export type PolicyStatement = {
    __typename: 'PolicyStatement';
    effect: string;
    action: Array<string | null>;
    resource: Array<string | null>;
};

export type GroupInput = {
    name: string;
    description?: string | null;
    icon?: string | null;
};

export type Group = {
    __typename: 'Group';
    createdAt: string;
    name: string;
    icon?: string | null;
    urn?: string | null;
    description?: string | null;
    members?: Array<Entity | null> | null;
    policy?: Policy | null;
};

export type OrganizationInput = {
    name: string;
    description?: string | null;
    visibility: Visibility;
    icon?: string | null;
    tier: OrganizationTier;
};

export enum OrganizationTier {
    FREE = 'FREE',
    STARTER = 'STARTER',
    STUDIO = 'STUDIO',
    ENTERPRISE = 'ENTERPRISE'
}

export type Organization = {
    __typename: 'Organization';
    urn?: string | null;
    createdAt?: string | null;
    owner?: User | null;
    name?: string | null;
    description?: string | null;
    visibility?: Visibility | null;
    account?: string | null;
    payment?: string | null;
    ssoEnabled?: boolean | null;
    icon?: string | null;
    tier?: OrganizationTier | null;
    projects?: Array<Project | null> | null;
    groups?: Array<Group | null> | null;
    policies?: Array<Policy | null> | null;
    apiKeys?: Array<APIKeyWithoutValue | null> | null;
    users?: Array<User | null> | null;
};

export type APIKeyWithoutValue = {
    __typename: 'APIKeyWithoutValue';
    name?: string | null;
    lastUsed?: string | null;
    description?: string | null;
    urn?: string | null;
};

export type APIKeyInput = {
    name: string;
    description?: string | null;
    groups?: Array<string> | null;
};

export type APIKey = {
    __typename: 'APIKey';
    name?: string | null;
    description?: string | null;
    value?: string | null;
    urn?: string | null;
};

export type TokenInput = {
    description?: string | null;
    name: string;
    type: TokenType;
    extensions?: string | null;
    value?: string | null;
    typography?: TypographyInput | null;
    border?: BorderInput | null;
    boxShadow?: Array<BoxShadowInput | null> | null;
};

export type TypographyInput = {
    fontFamily?: string | null;
    fontWeight?: string | null;
    letterSpacing?: string | null;
    lineHeight?: string | null;
    fontSize?: string | null;
    paragraphIndent?: string | null;
    paragraphSpacing?: string | null;
    textCase?: string | null;
    textDecoration?: string | null;
};

export type BorderInput = {
    color?: string | null;
    style?: string | null;
    width?: string | null;
};

export type BoxShadowInput = {
    x?: string | null;
    y?: string | null;
    blur?: string | null;
    spread?: string | null;
    color?: string | null;
    type?: string | null;
};

export type TokenSetInput = {
    name: string;
    description?: string | null;
    type?: TokenSetType | null;
};

export type ResolverInput = {
    description?: string | null;
    name: string;
    src: Array<ResolverSourceInput | null>;
    modifiers?: Array<ResolverModifier | null> | null;
};

export type ResolverSourceInput = {
    urn: string;
    version?: string | null;
    branch?: string | null;
};

export type ResolverModifier = {
    name: string;
    alias?: string | null;
    default?: string | null;
    type?: ResolverModifierType | null;
    values?: Array<ResolverModifierValueInput | null> | null;
};

export type ResolverModifierValueInput = {
    name: string;
    alias?: string | null;
    urn?: string | null;
    version?: string | null;
    branch?: string | null;
};

export type ReleaseInput = {
    name: string;
    description?: string | null;
    version: string;
    tokenSets?: Array<string> | null;
    generators?: Array<string> | null;
};

export type GeneratorInput = {
    name: string;
    description?: string | null;
    graph?: string | null;
};

export type Invitation = {
    __typename: 'Invitation';
    organization: string;
    user: string;
    status?: InvitationStatus | null;
};

export enum InvitationStatus {
    PENDING = 'PENDING',
    DECLINED = 'DECLINED',
    ACCEPTED = 'ACCEPTED'
}

export type UpdateSelfInput = {
    name?: string | null;
    givenName?: string | null;
    icon?: FileInput | null;
    description?: string | null;
    visibility?: Visibility | null;
};

export type FileInput = {
    name: string;
    type: string;
    data: string;
};

export type TokenUpdateInput = {
    description?: string | null;
    name?: string | null;
    extensions?: string | null;
    border?: BorderInput | null;
    boxShadow?: BoxShadowInput | null;
    typography?: TypographyInput | null;
    value?: string | null;
};

export type TokenSetUpdateInput = {
    name?: string | null;
    description?: string | null;
};

export type PolicyInputUpdate = {
    name?: string | null;
    description?: string | null;
    value?: PolicyDocInput | null;
};

export type ProjectUpdateInput = {
    name?: string | null;
    description?: string | null;
    visibility?: Visibility | null;
    icon?: string | null;
};

export type GroupUpdateInput = {
    name?: string | null;
    description?: string | null;
    icon?: string | null;
};

export type OrganizationUpdateInput = {
    urn: string;
    name?: string | null;
    description?: string | null;
    visibility?: Visibility | null;
    icon?: string | null;
    tier?: OrganizationTier | null;
};

export type OrganizationFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
    owner?: StringFilterInput | null;
    visibility?: VisibilityInput | null;
};

export type StringFilterInput = {
    eq?: string | null;
    ne?: string | null;
    beginsWith?: string | null;
};

export type VisibilityInput = {
    eq?: Visibility | null;
};

export type ProjectFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
    visibility?: VisibilityInput | null;
};

export type GroupFilterInput = {
    urn?: GroupUrnFilterInput | null;
    name?: GroupStringFilterInput | null;
};

export type GroupUrnFilterInput = {
    eq?: string | null;
};

export type GroupStringFilterInput = {
    eq?: string | null;
};

export type TokenSetsFilterInput = {
    name?: StringFilterInput | null;
};

export type TokenFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
    type?: TokenTypeFilterInput | null;
};

export type TokenTypeFilterInput = {
    eq?: TokenType | null;
    ne?: TokenType | null;
};

export type Self = {
    __typename: 'Self';
    identity?: Identity | null;
    invitations?: Array<Invitation | null> | null;
    user?: User | null;
    organizations?: Array<Organization | null> | null;
    permissions?: Array<PolicyDoc | null> | null;
};

export type Identity = {
    __typename: 'Identity';
    urn?: string | null;
    authenticated: boolean;
};

export type Token =
    | Token_color
    | Token_scalar
    | Token_typography
    | Token_border
    | Token_boxShadow;

export type Token_color = {
    __typename: 'Token_color';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    type?: TokenType | null;
    metadata?: Metadata | null;
};

export type ResolvedTokenInterface = {
    __typename: 'ResolvedTokenInterface';
    description?: string | null;
    name?: string | null;
    type?: TokenType | null;
    metadata?: Metadata | null;
};

export type Token_Composition = {
    __typename: 'Token_Composition';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    type?: TokenType | null;
    metadata?: Metadata | null;
};

export type Token_border = {
    __typename: 'Token_border';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    border?: Border | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type Token_boxShadow = {
    __typename: 'Token_boxShadow';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    boxShadow?: Array<BoxShadow | null> | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type Token_scalar = {
    __typename: 'Token_scalar';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    type?: TokenType | null;
    metadata?: Metadata | null;
};

export type Token_typography = {
    __typename: 'Token_typography';
    description?: string | null;
    name?: string | null;
    value?: string | null;
    typography?: Typography | null;
    metadata?: Metadata | null;
    type?: TokenType | null;
};

export type ResolverFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
};

export type GeneratorFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
};

export type ReleaseFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
    version?: StringFilterInput | null;
};

export type ApiKeyFilterInput = {
    urn?: StringFilterInput | null;
    name?: StringFilterInput | null;
};

export type CreateProjectMutationVariables = {
    organization: string;
    input: ProjectInput;
};

export type CreateProjectMutation = {
    createProject?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type CreatePolicyMutationVariables = {
    organization: string;
    input: PolicyInput;
};

export type CreatePolicyMutation = {
    createPolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        name: string;
        urn?: string | null;
        description?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type CreateGroupMutationVariables = {
    organization: string;
    input: GroupInput;
};

export type CreateGroupMutation = {
    createGroup?: {
        __typename: 'Group';
        createdAt: string;
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
    } | null;
};

export type CreateOrganizationMutationVariables = {
    input: OrganizationInput;
};

export type CreateOrganizationMutation = {
    createOrganization?: {
        __typename: 'Organization';
        urn?: string | null;
        createdAt?: string | null;
        owner?: {
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null;
        name?: string | null;
        description?: string | null;
        visibility?: Visibility | null;
        account?: string | null;
        payment?: string | null;
        ssoEnabled?: boolean | null;
        icon?: string | null;
        tier?: OrganizationTier | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            name: string;
            urn: string;
            orgUrn?: string | null;
            visibility?: Visibility | null;
            icon?: string | null;
            description?: string | null;
            releaseCount?: number | null;
            tokenCount?: number | null;
        } | null> | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            name: string;
            icon?: string | null;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            name?: string | null;
            lastUsed?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        users?: Array<{
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
    } | null;
};

export type CreateAPIKeyMutationVariables = {
    organization: string;
    input: APIKeyInput;
};

export type CreateAPIKeyMutation = {
    createAPIKey?: {
        __typename: 'APIKey';
        name?: string | null;
        description?: string | null;
        value?: string | null;
        urn?: string | null;
    } | null;
};

export type CreateTokenMutationVariables = {
    set: string;
    input: TokenInput;
};

export type CreateTokenMutation = {
    createToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null;
};

export type BulkCreateTokenMutationVariables = {
    set: string;
    input: Array<TokenInput | null>;
};

export type BulkCreateTokenMutation = {
    bulkCreateToken: Array<
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null
    > | null;
};

export type CreateTokenSetMutationVariables = {
    project: string;
    input: TokenSetInput;
};

export type CreateTokenSetMutation = {
    createTokenSet?: {
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type CreateResolverMutationVariables = {
    project: string;
    input: ResolverInput;
};

export type CreateResolverMutation = {
    createResolver?: {
        __typename: 'Resolver';
        name?: string | null;
        description?: string | null;
        urn?: string | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            urn: string;
            version?: string | null;
            branch?: string | null;
        } | null> | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            name: string;
            alias?: string | null;
            default?: string | null;
            type?: ResolverModifierType | null;
        } | null> | null;
        release?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
    } | null;
};

export type CreateReleaseMutationVariables = {
    project: string;
    input: ReleaseInput;
};

export type CreateReleaseMutation = {
    createRelease?: {
        __typename: 'Release';
        urn: string;
        name: string;
        version: string;
        description?: string | null;
        tokenSets?: Array<{
            __typename: 'ReleaseFile';
            path?: string | null;
            name?: string | null;
            type?: string | null;
        }> | null;
        generators?: Array<{
            __typename: 'ReleaseFile';
            path?: string | null;
            name?: string | null;
            type?: string | null;
        }> | null;
        createdAt?: string | null;
        releasedBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
    } | null;
};

export type CreateGeneratorMutationVariables = {
    project: string;
    input: GeneratorInput;
};

export type CreateGeneratorMutation = {
    createGenerator?: {
        __typename: 'Generator';
        urn?: string | null;
        name?: string | null;
        description?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        graph?: string | null;
    } | null;
};

export type AddMemberToGroupMutationVariables = {
    group: string;
    entity: string;
};

export type AddMemberToGroupMutation = {
    addMemberToGroup?: string | null;
};

export type RemoveMemberFromGroupMutationVariables = {
    group: string;
    user: string;
};

export type RemoveMemberFromGroupMutation = {
    removeMemberFromGroup?: string | null;
};

export type InviteToOrganizationMutationVariables = {
    organization: string;
    user: string;
    groups?: Array<string> | null;
};

export type InviteToOrganizationMutation = {
    inviteToOrganization?: {
        __typename: 'Invitation';
        organization: string;
        user: string;
        status?: InvitationStatus | null;
    } | null;
};

export type RemoveFromOrganizationMutationVariables = {
    organization: string;
    user: string;
};

export type RemoveFromOrganizationMutation = {
    removeFromOrganization?: boolean | null;
};

export type AcceptInvitationMutationVariables = {
    urn: string;
};

export type AcceptInvitationMutation = {
    acceptInvitation?: string | null;
};

export type DeclineInvitationMutationVariables = {
    urn: string;
};

export type DeclineInvitationMutation = {
    declineInvitation?: string | null;
};

export type UpdateSelfMutationVariables = {
    input?: UpdateSelfInput | null;
};

export type UpdateSelfMutation = {
    updateSelf?: {
        __typename: 'User';
        name?: string | null;
        givenName?: string | null;
        urn?: string | null;
        description?: string | null;
        icon?: string | null;
        visibility?: Visibility | null;
    } | null;
};

export type UpdateGeneratorMutationVariables = {
    urn: string;
    input: GeneratorInput;
};

export type UpdateGeneratorMutation = {
    updateGenerator?: {
        __typename: 'Generator';
        urn?: string | null;
        name?: string | null;
        description?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        graph?: string | null;
    } | null;
};

export type UpdateTokenMutationVariables = {
    urn: string;
    input: TokenUpdateInput;
};

export type UpdateTokenMutation = {
    updateToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null;
};

export type UpdateTokenSetMutationVariables = {
    urn: string;
    input: TokenSetUpdateInput;
};

export type UpdateTokenSetMutation = {
    updateTokenSet?: {
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type UpdateResolverMutationVariables = {
    urn: string;
    input: ResolverInput;
};

export type UpdateResolverMutation = {
    updateResolver?: {
        __typename: 'Resolver';
        name?: string | null;
        description?: string | null;
        urn?: string | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            urn: string;
            version?: string | null;
            branch?: string | null;
        } | null> | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            name: string;
            alias?: string | null;
            default?: string | null;
            type?: ResolverModifierType | null;
        } | null> | null;
        release?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
    } | null;
};

export type UpdatePolicyMutationVariables = {
    urn: string;
    input: PolicyInputUpdate;
};

export type UpdatePolicyMutation = {
    updatePolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        name: string;
        urn?: string | null;
        description?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type UpdateProjectMutationVariables = {
    urn: string;
    input: ProjectUpdateInput;
};

export type UpdateProjectMutation = {
    updateProject?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type UpdateGroupMutationVariables = {
    urn: string;
    input: GroupUpdateInput;
};

export type UpdateGroupMutation = {
    updateGroup?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type UpdateOrganizationMutationVariables = {
    urn: string;
    input: OrganizationUpdateInput;
};

export type UpdateOrganizationMutation = {
    updateOrganization?: {
        __typename: 'Organization';
        urn?: string | null;
        createdAt?: string | null;
        owner?: {
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null;
        name?: string | null;
        description?: string | null;
        visibility?: Visibility | null;
        account?: string | null;
        payment?: string | null;
        ssoEnabled?: boolean | null;
        icon?: string | null;
        tier?: OrganizationTier | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            name: string;
            urn: string;
            orgUrn?: string | null;
            visibility?: Visibility | null;
            icon?: string | null;
            description?: string | null;
            releaseCount?: number | null;
            tokenCount?: number | null;
        } | null> | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            name: string;
            icon?: string | null;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            name?: string | null;
            lastUsed?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        users?: Array<{
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
    } | null;
};

export type RegenerateApiKeyMutationVariables = {
    urn: string;
};

export type RegenerateApiKeyMutation = {
    regenerateApiKey?: {
        __typename: 'APIKey';
        name?: string | null;
        description?: string | null;
        value?: string | null;
        urn?: string | null;
    } | null;
};

export type DeletePolicyMutationVariables = {
    urn: string;
};

export type DeletePolicyMutation = {
    deletePolicy?: {
        __typename: 'Policy';
        createdAt?: string | null;
        name: string;
        urn?: string | null;
        description?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
    } | null;
};

export type DeleteAPIKeyMutationVariables = {
    urn: string;
};

export type DeleteAPIKeyMutation = {
    deleteAPIKey?: {
        __typename: 'APIKey';
        name?: string | null;
        description?: string | null;
        value?: string | null;
        urn?: string | null;
    } | null;
};

export type DeleteGeneratorMutationVariables = {
    urn: string;
};

export type DeleteGeneratorMutation = {
    deleteGenerator?: {
        __typename: 'Generator';
        urn?: string | null;
        name?: string | null;
        description?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        graph?: string | null;
    } | null;
};

export type DeleteGroupMutationVariables = {
    urn: string;
};

export type DeleteGroupMutation = {
    deleteGroup?: {
        __typename: 'Group';
        createdAt: string;
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
    } | null;
};

export type DeleteResolverMutationVariables = {
    urn: string;
};

export type DeleteResolverMutation = {
    deleteResolver?: {
        __typename: 'Resolver';
        name?: string | null;
        description?: string | null;
        urn?: string | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            urn: string;
            version?: string | null;
            branch?: string | null;
        } | null> | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            name: string;
            alias?: string | null;
            default?: string | null;
            type?: ResolverModifierType | null;
        } | null> | null;
        release?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
    } | null;
};

export type DeleteTokenMutationVariables = {
    urn: string;
};

export type DeleteTokenMutation = {
    deleteToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
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
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type DeleteProjectMutationVariables = {
    urn: string;
};

export type DeleteProjectMutation = {
    deleteProject?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type DeleteOrganizationMutationVariables = {
    urn: string;
};

export type DeleteOrganizationMutation = {
    deleteOrganization?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type DeleteInvitationMutationVariables = {
    urn: string;
};

export type DeleteInvitationMutation = {
    deleteInvitation?: {
        __typename: 'Invitation';
        organization: string;
        user: string;
        status?: InvitationStatus | null;
    } | null;
};

export type AttachPolicyToGroupMutationVariables = {
    group: string;
    policy: string;
};

export type AttachPolicyToGroupMutation = {
    attachPolicyToGroup?: {
        __typename: 'Group';
        createdAt: string;
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
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
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
    } | null;
};

export type UserInvitationsQueryVariables = {
    limit?: number | null;
};

export type UserInvitationsQuery = {
    userInvitations?: Array<{
        __typename: 'Invitation';
        organization: string;
        user: string;
        status?: InvitationStatus | null;
    } | null> | null;
};

export type PoliciesQueryVariables = {
    organization: string;
    limit?: number | null;
    offset?: number | null;
};

export type PoliciesQuery = {
    policies?: Array<{
        __typename: 'Policy';
        createdAt?: string | null;
        name: string;
        urn?: string | null;
        description?: string | null;
        value: {
            __typename: 'PolicyDoc';
            version: string;
        };
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
        urn?: string | null;
        createdAt?: string | null;
        owner?: {
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null;
        name?: string | null;
        description?: string | null;
        visibility?: Visibility | null;
        account?: string | null;
        payment?: string | null;
        ssoEnabled?: boolean | null;
        icon?: string | null;
        tier?: OrganizationTier | null;
        projects?: Array<{
            __typename: 'Project';
            createdAt: string;
            name: string;
            urn: string;
            orgUrn?: string | null;
            visibility?: Visibility | null;
            icon?: string | null;
            description?: string | null;
            releaseCount?: number | null;
            tokenCount?: number | null;
        } | null> | null;
        groups?: Array<{
            __typename: 'Group';
            createdAt: string;
            name: string;
            icon?: string | null;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        policies?: Array<{
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null> | null;
        apiKeys?: Array<{
            __typename: 'APIKeyWithoutValue';
            name?: string | null;
            lastUsed?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        users?: Array<{
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null> | null;
    } | null> | null;
};

export type ProjectsQueryVariables = {
    organization: string;
    filter?: ProjectFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type ProjectsQuery = {
    projects?: Array<{
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null> | null;
};

export type ProjectQueryVariables = {
    urn: string;
};

export type ProjectQuery = {
    project?: {
        __typename: 'Project';
        createdBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
        createdAt: string;
        name: string;
        urn: string;
        orgUrn?: string | null;
        visibility?: Visibility | null;
        icon?: string | null;
        description?: string | null;
        sets?: Array<{
            __typename: 'TokenSet';
            urn?: string | null;
            name?: string | null;
            projectUrn?: string | null;
            type?: TokenSetType | null;
            createdAt?: string | null;
        } | null> | null;
        resolvers?: Array<{
            __typename: 'Resolver';
            name?: string | null;
            description?: string | null;
            urn?: string | null;
        } | null> | null;
        generators?: Array<{
            __typename: 'Generator';
            urn?: string | null;
            name?: string | null;
            description?: string | null;
            createdAt?: string | null;
            updatedAt?: string | null;
            graph?: string | null;
        } | null> | null;
        releases?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
        releaseCount?: number | null;
        tokenCount?: number | null;
    } | null;
};

export type GroupsQueryVariables = {
    organization: string;
    filter?: GroupFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type GroupsQuery = {
    groups?: Array<{
        __typename: 'Group';
        createdAt: string;
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
    } | null> | null;
};

export type TokenSetQueryVariables = {
    urn: string;
};

export type TokenSetQuery = {
    tokenSet?: {
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type TokenSetsQueryVariables = {
    project: string;
    limit?: number | null;
    offset?: number | null;
    filter?: TokenSetsFilterInput | null;
};

export type TokenSetsQuery = {
    tokenSets: Array<{
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    }>;
};

export type TokenQueryVariables = {
    urn: string;
};

export type TokenQuery = {
    token:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null;
};

export type TokensQueryVariables = {
    set: string;
    filter?: TokenFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type TokensQuery = {
    tokens: Array<
        | {
              __typename: 'Raw_Token_color';
              description?: string | null;
              name?: string | null;
              value?: string | null;
              urn?: string | null;
              setUrn?: string | null;
              extensions?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              type?: TokenType | null;
          }
        | {
              __typename: 'Raw_Token_scalar';
              description?: string | null;
              name?: string | null;
              value?: string | null;
              urn?: string | null;
              extensions?: string | null;
              setUrn?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              type?: TokenType | null;
          }
        | {
              __typename: 'Raw_Token_typography';
              description?: string | null;
              name?: string | null;
              value?: string | null;
              typography?: {
                  __typename: string;
                  fontFamily?: string | null;
                  fontWeight?: string | null;
                  letterSpacing?: string | null;
                  lineHeight?: string | null;
                  fontSize?: string | null;
                  paragraphIndent?: string | null;
                  paragraphSpacing?: string | null;
                  textCase?: string | null;
                  textDecoration?: string | null;
              } | null;
              urn?: string | null;
              extensions?: string | null;
              setUrn?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              type?: TokenType | null;
          }
        | {
              __typename: 'Raw_Token_border';
              description?: string | null;
              name?: string | null;
              value?: string | null;
              border?: {
                  __typename: string;
                  color?: string | null;
                  style?: string | null;
                  width?: string | null;
              } | null;
              urn?: string | null;
              extensions?: string | null;
              setUrn?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              type?: TokenType | null;
          }
        | {
              __typename: 'Raw_Token_boxShadow';
              description?: string | null;
              name?: string | null;
              value?: string | null;
              boxShadow?: Array<{
                  __typename: string;
                  x?: string | null;
                  y?: string | null;
                  blur?: string | null;
                  spread?: string | null;
                  color?: string | null;
                  type?: string | null;
              } | null> | null;
              urn?: string | null;
              extensions?: string | null;
              setUrn?: string | null;
              metadata?: {
                  __typename: string;
                  createdAt?: string | null;
              } | null;
              type?: TokenType | null;
          }
    >;
};

export type SelfQuery = {
    self?: {
        __typename: 'Self';
        identity?: {
            __typename: 'Identity';
            urn?: string | null;
            authenticated: boolean;
        } | null;
        invitations?: Array<{
            __typename: 'Invitation';
            organization: string;
            user: string;
            status?: InvitationStatus | null;
        } | null> | null;
        user?: {
            __typename: 'User';
            name?: string | null;
            givenName?: string | null;
            urn?: string | null;
            description?: string | null;
            icon?: string | null;
            visibility?: Visibility | null;
        } | null;
        organizations?: Array<{
            __typename: 'Organization';
            urn?: string | null;
            createdAt?: string | null;
            name?: string | null;
            description?: string | null;
            visibility?: Visibility | null;
            account?: string | null;
            payment?: string | null;
            ssoEnabled?: boolean | null;
            icon?: string | null;
            tier?: OrganizationTier | null;
        } | null> | null;
        permissions?: Array<{
            __typename: 'PolicyDoc';
            version: string;
        } | null> | null;
    } | null;
};

export type ResolveQueryVariables = {
    resolver: string;
    modifiers?: Array<ResolverModifierValueInput | null> | null;
};

export type ResolveQuery = {
    resolve: Array<
        | (
              | {
                    __typename: 'Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    type?: TokenType | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                }
              | {
                    __typename: 'Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    type?: TokenType | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                }
              | {
                    __typename: 'Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null
    > | null;
};

export type ResolversQueryVariables = {
    project: string;
    filter?: ResolverFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type ResolversQuery = {
    resolvers?: Array<{
        __typename: 'Resolver';
        name?: string | null;
        description?: string | null;
        urn?: string | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            urn: string;
            version?: string | null;
            branch?: string | null;
        } | null> | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            name: string;
            alias?: string | null;
            default?: string | null;
            type?: ResolverModifierType | null;
        } | null> | null;
        release?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
    } | null> | null;
};

export type ResolverQueryVariables = {
    urn: string;
};

export type ResolverQuery = {
    resolver?: {
        __typename: 'Resolver';
        name?: string | null;
        description?: string | null;
        urn?: string | null;
        sources?: Array<{
            __typename: 'ResolverSource';
            urn: string;
            version?: string | null;
            branch?: string | null;
        } | null> | null;
        modifiers?: Array<{
            __typename: 'ResolverModifierOutput';
            name: string;
            alias?: string | null;
            default?: string | null;
            type?: ResolverModifierType | null;
        } | null> | null;
        release?: Array<{
            __typename: 'Release';
            urn: string;
            name: string;
            version: string;
            description?: string | null;
            createdAt?: string | null;
        } | null> | null;
    } | null;
};

export type GeneratorQueryVariables = {
    urn: string;
};

export type GeneratorQuery = {
    generator?: {
        __typename: 'Generator';
        urn?: string | null;
        name?: string | null;
        description?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        graph?: string | null;
    } | null;
};

export type GeneratorsQueryVariables = {
    project: string;
    filter?: GeneratorFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type GeneratorsQuery = {
    generators?: Array<{
        __typename: 'Generator';
        urn?: string | null;
        name?: string | null;
        description?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        graph?: string | null;
    } | null> | null;
};

export type ReleasesQueryVariables = {
    project: string;
    filter?: ReleaseFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type ReleasesQuery = {
    releases?: Array<{
        __typename: 'Release';
        urn: string;
        name: string;
        version: string;
        description?: string | null;
        tokenSets?: Array<{
            __typename: 'ReleaseFile';
            path?: string | null;
            name?: string | null;
            type?: string | null;
        }> | null;
        generators?: Array<{
            __typename: 'ReleaseFile';
            path?: string | null;
            name?: string | null;
            type?: string | null;
        }> | null;
        createdAt?: string | null;
        releasedBy:
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null;
    } | null> | null;
};

export type ApiKeysQueryVariables = {
    organization: string;
    filter?: ApiKeyFilterInput | null;
    limit?: number | null;
    offset?: number | null;
};

export type ApiKeysQuery = {
    apiKeys?: Array<{
        __typename: 'APIKeyWithoutValue';
        name?: string | null;
        lastUsed?: string | null;
        description?: string | null;
        urn?: string | null;
    } | null> | null;
};

export type ReleaseCountQueryVariables = {
    project: string;
};

export type ReleaseCountQuery = {
    releaseCount?: number | null;
};

export type TokenCountQueryVariables = {
    project: string;
};

export type TokenCountQuery = {
    tokenCount?: number | null;
};

export type OnCreateTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnCreateTokenSubscription = {
    onCreateToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null;
};

export type OnUpdateTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnUpdateTokenSubscription = {
    onUpdateToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
          )
        | null;
};

export type OnDeleteTokenSubscriptionVariables = {
    setUrn: string;
};

export type OnDeleteTokenSubscription = {
    onDeleteToken:
        | (
              | {
                    __typename: 'Raw_Token_color';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    setUrn?: string | null;
                    extensions?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_scalar';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_typography';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    typography?: {
                        __typename: string;
                        fontFamily?: string | null;
                        fontWeight?: string | null;
                        letterSpacing?: string | null;
                        lineHeight?: string | null;
                        fontSize?: string | null;
                        paragraphIndent?: string | null;
                        paragraphSpacing?: string | null;
                        textCase?: string | null;
                        textDecoration?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_border';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    border?: {
                        __typename: string;
                        color?: string | null;
                        style?: string | null;
                        width?: string | null;
                    } | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
                }
              | {
                    __typename: 'Raw_Token_boxShadow';
                    description?: string | null;
                    name?: string | null;
                    value?: string | null;
                    boxShadow?: Array<{
                        __typename: string;
                        x?: string | null;
                        y?: string | null;
                        blur?: string | null;
                        spread?: string | null;
                        color?: string | null;
                        type?: string | null;
                    } | null> | null;
                    urn?: string | null;
                    extensions?: string | null;
                    setUrn?: string | null;
                    metadata?: {
                        __typename: string;
                        createdAt?: string | null;
                    } | null;
                    type?: TokenType | null;
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
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type OnUpdateTokenSetSubscriptionVariables = {
    projectUrn: string;
};

export type OnUpdateTokenSetSubscription = {
    onUpdateTokenSet?: {
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type OnDeleteTokenSetSubscriptionVariables = {
    projectUrn: string;
};

export type OnDeleteTokenSetSubscription = {
    onDeleteTokenSet?: {
        __typename: 'TokenSet';
        urn?: string | null;
        metadata?: {
            __typename: 'Metadata';
            createdAt?: string | null;
        } | null;
        name?: string | null;
        projectUrn?: string | null;
        type?: TokenSetType | null;
        createdAt?: string | null;
        tokens: Array<
            | {
                  __typename: 'Raw_Token_color';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  setUrn?: string | null;
                  extensions?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_scalar';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_typography';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_border';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
            | {
                  __typename: 'Raw_Token_boxShadow';
                  description?: string | null;
                  name?: string | null;
                  value?: string | null;
                  urn?: string | null;
                  extensions?: string | null;
                  setUrn?: string | null;
                  type?: TokenType | null;
              }
        >;
    } | null;
};

export type OnCreateGroupSubscriptionVariables = {
    organization: string;
};

export type OnCreateGroupSubscription = {
    onCreateGroup?: {
        __typename: 'Group';
        createdAt: string;
        name: string;
        icon?: string | null;
        urn?: string | null;
        description?: string | null;
        members: Array<
            | (
                  | {
                        __typename: 'User';
                        name?: string | null;
                        givenName?: string | null;
                        urn?: string | null;
                        description?: string | null;
                        icon?: string | null;
                        visibility?: Visibility | null;
                    }
                  | {
                        __typename: 'APIKeyIdentity';
                        name?: string | null;
                        urn?: string | null;
                    }
              )
            | null
        > | null;
        policy?: {
            __typename: 'Policy';
            createdAt?: string | null;
            name: string;
            urn?: string | null;
            description?: string | null;
        } | null;
    } | null;
};
