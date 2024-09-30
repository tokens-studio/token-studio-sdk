import { devConfig, devOauth, prodConfig, prodOauth } from '../aws-exports.js';
import { Amplify } from '@aws-amplify/core';

export namespace Configuration {
	/**
	 * If you need to externalize session storage you can use the following interface to implement your own
	 */
	export interface Storage {
		// set item with the key
		setItem(key: string, value: string): void;
		// get item with the key
		getItem(key: string): string;
		// remove item with the key
		removeItem(key: string): void;
		// clear out the storage
		clear(): void;
		// If the storage operations are async(i.e AsyncStorage)
		// Then you need to sync those items into the memory in this method
		sync?(): Promise<void>;
	}

	const getConfigs = (stage: 'development' | 'production') => ({
		config: stage === 'production' ? prodConfig : devConfig,
		oauth: stage === 'production' ? prodOauth : devOauth,
	});

	const { config, oauth } = getConfigs('production');

	export const defaultConfig = {
		...config,
		oauth,
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
				...config.oauth,
			},
		}) as IConfiguration;
	};

	/**
	 * Returns the current internal configuration
	 * @private
	 * @returns
	 */
	export const get = (): IConfiguration => ({ ...configuration });
}
