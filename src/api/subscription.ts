import { API } from '@aws-amplify/api';
import { AWSAppSyncRealTimeProvider } from '@aws-amplify/pubsub';
import { GraphQLOptions, GraphQLResult } from '@aws-amplify/api-graphql';
import { Configuration } from './configure';
import Observable from 'zen-observable-ts';

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
        provider: AWSAppSyncRealTimeProvider;
        value: GraphQLResult<T>;
    };

    export type Subscription<T> = Observable<SubscriptionResponse<T>>;

    export type SubscriptionHandler<T> = {
        next: (response: SubscriptionResponse<T>) => void;
        error: (error: Error) => void;
    };

    /**
     * Subscribes to a graphql subscription
     *
     * @example
     * This examples shows how to listen to changes in the groups of an organization
     * ```ts
     * import {Graphql, Group, OnNewGroupSubscription, Subscription,Subscriptions, OnNewGroupSubscriptionVariables} from '@tokens-studio/sdk';
     *
     * //Assumes we are already authed
     *
     *  const filter : OnNewGroupSubscriptionVariables = { organization: 'urn:ts:....'};
     *
     *
     * const subscription = Subscription.subscribe<Group>(Graphql.op(Subscriptions.OnNewGroupSubscription,filter),
     * {
     *      next:({value})=>console.log(value)
     *      error:(err)=>console.error(err)
     * })
     *
     * // At some point during cleanup
     * subscription.unsubscribe();
     *
     *
     * ```
     *
     * @param input
     * @param handler
     * @returns
     */
    export const subscribe = <T>(
        input: GraphQLOptions,
        handler: SubscriptionHandler<T>
    ) => {
        const extend = {};
        // Use to inject the auth token
        if (
            Configuration.get().aws_appsync_authenticationType === 'AWS_LAMBDA'
        ) {
            //@ts-ignore
            extend.authToken = ApiKey.get();
        }
        const subscription = API.graphql({
            ...input,
            ...extend
        }) as Subscription<T>;

        return subscription.subscribe(handler);
    };
}
