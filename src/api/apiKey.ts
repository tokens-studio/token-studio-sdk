let apiKey = '';


/**
 * This namespace is responsible for storing long lived API key credentials 
 * @private
 */
export namespace ApiKey {

    export const set = (key: string) => {
        apiKey = key;
    }
    export const get = () => {
        return apiKey;
    }
} 