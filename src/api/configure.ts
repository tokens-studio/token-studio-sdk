import { Amplify } from '@aws-amplify/core';
import { ApiKey } from './apiKey.js';
import { devConfig, devOauth, prodConfig, prodOauth } from '../aws-exports.js';

/**
 * There are 3 authentication modes available.
 * 1. User Auth (default)
 * 2. API Keys
 * 3. Public
 *
 * Public interaction has a huge amount of restrictions applied as to which resources it can access and should not be used outside of the Tokens Website as the permissions might change on a whim
 */
export namespace Configuration {
    export const PUBLIC_KEY = 'da2-aqavhxqlkzgzjjwt35zyy2xqqy';

    /**
     * If you need to externalize session storage you can use the following interface to implement your own
     */
    export interface Storage {
        // set item with the key
        setItem(key: string, value: string): string;
        // get item with the key
        getItem(key: string): string;
        // remove item with the key
        removeItem(key: string): void;
        // clear out the storage
        clear(): void;
        // If the storage operations are async(i.e AsyncStorage)
        // Then you need to sync those items into the memory in this method
        sync(): Promise<void>;
    }

    const getConfigs = (stage: 'development' | 'production') => ({
        config: stage === 'production' ? prodConfig : devConfig,
        oauth: stage === 'production' ? prodOauth : devOauth
    });

    const { config, oauth } = getConfigs('production');

    export const defaultConfig = {
        ...config,
        oauth
    };

    export type IConfiguration = Partial<{
        aws_appsync_graphqlEndpoint: string;
        aws_appsync_region: string;
        aws_user_pools_id: string;
        aws_appsync_authenticationType: string;
        aws_user_pools_web_client_id: string;
        //Honestly why Amplify ? Just export the type
        oauth: {
            domain: string;
            scope: Array<string>;
            redirectSignIn: string;
            redirectSignOut: string;
            responseType: string;
            options?: object;
        };
        //Custom auth storage
        storage: Storage;
        stage: 'development' | 'production';
    }>;

    let configuration: IConfiguration = config;

    /**
     * Sets up configuration for the
     * @private
     * @param config
     */
    export const configure = (config: IConfiguration = {}) => {
        const stageConfig = getConfigs(config.stage || 'production');
        configuration = Amplify.configure({
            ...stageConfig.config,
            ...config,
            oauth: {
                ...stageConfig.oauth,
                ...config.oauth
            }
        }) as IConfiguration;
    };

    /**
     * Returns the current internal configuration
     * @private
     * @returns
     */
    export const get = (): IConfiguration => ({ ...configuration });

    /**
     * Sets the API to use API Key authentication
     * @example
     * ```
     * sdk.Configuration.setAPIKey('api_key_....');
     * ```
     * @param token
     */
    export const setAPIKey = (token: string, env: 'dev' | 'prod' = 'prod') => {
        const { config: selectedConfig, oauth: selectedOauth } = getConfigs(
            env === 'prod' ? 'production' : 'development'
        );

        configuration = Amplify.configure({
            ...selectedConfig,
            oauth: selectedOauth,
            // eslint-disable-next-line camelcase
            aws_appsync_authenticationType: 'AWS_LAMBDA'
        }) as IConfiguration;
        ApiKey.set(token);
    };

    /**
     * Set to use public mode to access values
     */
    export const setPublic = (apikey = PUBLIC_KEY) => {
        //Take the default config and change the config type
        configuration = Amplify.configure({
            ...config,
            // eslint-disable-next-line camelcase
            aws_appsync_authenticationType: 'API_KEY',
            // eslint-disable-next-line camelcase
            aws_appsync_apiKey: apikey
        }) as IConfiguration;
    };
}
