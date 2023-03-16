import { ApiKey } from "./apiKey";
import config from '../aws-exports';
import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
/**
 * There are 3 authentication modes available. 
 * 1. User Auth (default)
 * 2. API Keys 
 * 3. Public 
 * 
 * Public interaction has a huge amount of restrictions applied as to which resources it can access and should not be used outside of the Tokens Website as the permissions might change on a whim
 */
export namespace Configuration {

    export type IConfiguration = {
        aws_appsync_graphqlEndpoint: string;
        aws_appsync_region: string;
        aws_user_pools_id: string;
        aws_appsync_authenticationType: string;
        aws_user_pools_web_client_id: string;
    }

    let configuration: IConfiguration = config;

    /**
     * Sets up configuration for the 
     * @private
     * @param config 
    */
    export const configure = (config: IConfiguration) => {
        configuration = Amplify.configure(config) as IConfiguration;
        Auth.configure({
            userPoolId: config.aws_user_pools_id,
            userPoolWebClientId: config.aws_user_pools_web_client_id
        })
    }
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
    export const setAPIKey = (token: string) => {
        //Take the default config and change the config type 
        configuration = Amplify.configure({
            ...config,
            "aws_appsync_authenticationType": "AWS_LAMBDA",
        }) as IConfiguration;
        ApiKey.set(token);
    }

    /**
     * Set to use public mode to access values
     */
    export const setPublic = (apikey = 'da2-aqavhxqlkzgzjjwt35zyy2xqqy') => {

        //Take the default config and change the config type 
        configuration = Amplify.configure({
            ...config,
            aws_appsync_authenticationType: 'API_KEY',
            aws_appsync_apiKey: apikey
        }) as IConfiguration;
    }


    //Setup the default config
    configure(config);
}