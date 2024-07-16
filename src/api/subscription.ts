import { ApolloClient, HttpLink, InMemoryCache, gql, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

// Configuration for HTTP and WebSocket links
const httpLink = new HttpLink({
  uri: 'https://your-graphql-endpoint',
  headers: {
    Authorization: 'Bearer ' + 'YOUR_AUTH_TOKEN'
  }
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://your-graphql-endpoint',
    connectionParams: {
      headers: {
        Authorization: 'Bearer ' + 'YOUR_AUTH_TOKEN'
      }
    }
  })
);

// Split links to route queries/mutations over HTTP and subscriptions over WebSocket
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// Apollo Client setup
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

/**
 * Simplifies subscriptions and realtime data
 *
 * Use the utilities of this namespace in tandem with the {@link Subscriptions} GraphQL subscriptions to get realtime updates
 *
 * @remarks
 * To ensure that realtime data works as expected, always return the values used in your filter for the subscription when performing  {@link Mutations}.
 *
 * Also be prepared for data loss. The return of the realtime push of data will be the projection of attributes requested by the user who performed the mutation, hence not all properties might be populated. You can generate an additional request to ask for all the properties to ensure nothing was lost during the project for resiliency
 *
 */
export namespace Subscription {
  export type SubscriptionResponse<T> = {
    value: T;
  };

  export type SubscriptionHandler<T> = {
    next: (response: SubscriptionResponse<T>) => void;
    error: (error: Error) => void;
  };

  /**
   * Subscribes to a graphql subscription
   *
   * 
   * @example
   * This examples shows how to listen to changes in the groups of an organization
   * ```ts
   * import { Graphql, Group, OnNewGroupSubscription, Subscription, Subscriptions, OnNewGroupSubscriptionVariables } from '@tokens-studio/sdk';
   *
   * // Assumes we are already authed
   *
   * const filter: OnNewGroupSubscriptionVariables = { organization: 'urn:ts:....' };
   *
   * const subscription = Subscription.subscribe<Group>(Graphql.op(Subscriptions.OnNewGroupSubscription, filter), {
   *      next: ({ value }) => console.log(value),
   *      error: (err) => console.error(err),
   * });
   *
   * // At some point during cleanup
   * subscription.unsubscribe();
   * ```
   *
   * @param input
   * @param handler
   * @returns
   */
  export const subscribe = <T>(
    input: { query: any; variables?: any },
    handler: SubscriptionHandler<T>
  ) => {
    const subscription = client.subscribe({
      query: gql(input.query),
      variables: input.variables
    });

    const subscriptionObserver = subscription.subscribe({
      next(result) {
        handler.next({ value: result.data });
      },
      error(err) {
        handler.error(err);
      }
    });

    return {
      unsubscribe: () => subscriptionObserver.unsubscribe()
    };
  };
}
