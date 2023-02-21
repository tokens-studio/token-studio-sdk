import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { API } from "aws-amplify";

/**
 * Use this namespace to control user authentication controls and workflows
 */
export namespace UserAuth {


    export type ISignUp = {
        username: string,
        password: string,
        attributes: {
            email: string
        }
    }


    /**
     * Signs an existing user into Tokens Studio
     * @param username 
     * @param password 
     * @returns 
     */
    export const signIn = async (username: string, password: string): Promise<CognitoUser> => {
        return await API.Auth.signIn(username, password);
    }

    /**
     * Signs the current user out of the SDK
     */
    export const signOut = async (): Promise<void> => {
        await API.Auth.signOut();
    }




    // export const 
    /**
     * Send MFA code to confirm sign in
     * @param {Object} user - The CognitoUser object
     * @param {String} code - The confirmation code
     */
    export const mfaConfirmSignIn = async (code: string): Promise<ISignUpResult> => {
        return await API.Auth.confirmSignIn(API.Auth.currentUserInfo, code);
    }

    /**
     * Signs a user up to join Tokens Studio
     * @param params 
     * @returns 
     */
    export const signUp = async (params: ISignUp): Promise<ISignUpResult> => {
        return await API.Auth.signUp(params);
    }

}


export type { CognitoUser } from 'amazon-cognito-identity-js';
