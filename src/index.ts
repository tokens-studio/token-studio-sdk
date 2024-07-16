/**
 * An SDK for tokens interaction throught Tokens Studio
 *
 * @remarks
 * The follow namespaces are raw Graphql interactions (queries, mutations ,subscriptions)
 *
 * * {@link Mutations}
 * * {@link Queries}
 * * {@link Subscriptions}
 *
 * Please note they contain the full shapes of all returned objects. Any additional complex operations are exported under sibling namespaces which define more complicated interactions with additional support for validations, etc
 *
 * * {@link Mutation}
 * * {@link Query}
 *
 * Your default interaction model would be to import the required interactions
 * @example
 * The following is in typescript and shows how to use API key authentication to retrieve the groups in an organization
 * ```ts
 * import {Configuration,Queries, Graphql ,GroupsQuery } from '@tokens-studio/sdk';
 *
 * const API_KEY = process.env.API_KEY;
 * Configuration.setAPIKey(TEST_API_KEY);
 *
 * const input: GroupsQueryVariables = {organization:'urn:ts:....'};
 *
 * const groups = await Graphql.exec<GroupsQuery>({
 *  query:Queries.groups,
 *   variables:input
 * });
 *
 * console.log(groups.data);
 *
 * ```
 *
 * See {@link Configuration} for more examples of authentication using other options
 *
 *
 * @packageDocumentation
 */

export * from './api';
export * from './generated/graphql';
