import { API } from '@aws-amplify/api';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';
import { Hub } from '@aws-amplify/core';
import { oauth } from '../aws-exports';
import type { FederatedSignInOptions } from '@aws-amplify/auth/lib/types/Auth';

/**
 * Use this namespace to control user authentication controls and workflows
 */
export namespace UserAuth {
    export type ISignUp = {
        username: string;
        password: string;
        attributes: {
            email: string;
        };
    };
    /**
     * Returns the current session if it exists
     */
    export const currentSession = async () => {
        return await API.Auth.currentSession();
    };

    /**
     * Returns the current authenticated user if it exists
     */
    export const currentAuthenticatedUser = async (): Promise<
        CognitoUser | undefined
    > => {
        return await API.Auth.currentAuthenticatedUser();
    };

    /**
     * Initiate a forgot password request. This should send a one time code to the users registered email
     */
    export const forgotPassword = async (username: string) => {
        return await API.Auth.forgotPassword(username);
    };

    /**
     * Completes a forgot password flow to generate a new password based on the one time code
     * @param username
     * @param code
     * @param newPassword
     * @returns
     */
    export const forgotPasswordSubmit = async (
        username: string,
        code: string,
        newPassword: string
    ) => {
        return await API.Auth.forgotPasswordSubmit(username, code, newPassword);
    };

    /**
     * Signs an existing user into Tokens Studio
     * @param username
     * @param password
     * @returns
     */
    export const signIn = async (
        username: string,
        password: string
    ): Promise<CognitoUser> => {
        return await API.Auth.signIn(username, password);
    };

    /**
     * Signs an existing user into Tokens Studio using their email. Note that the email needs to be verified before a user can use this method
     * @param username
     * @param password
     * @returns
     */
    export const signInWithEmail = async (
        email: string,
        password: string
    ): Promise<CognitoUser> => {
        API.Auth.signIn;
        return await API.Auth.signIn({
            username: email,
            password
        });
    };

    /**
     * Signs the current user out of the SDK
     */
    export const signOut = async (): Promise<void> => {
        await API.Auth.signOut();
    };

    export enum FederatedProviders {
        Google = CognitoHostedUIIdentityProvider.Google
    }
    export interface IFederatedSignInOptions {
        signIn: {
            provider: FederatedProviders;
            customState?: string;
        };
        oauth?: {
            redirectSignIn: string;
            redirectSignOut: string;
        };
    }

    /**
     * Signs the current user out of the SDK
     * @remarks
     * Currently only `Google` is
     */
    export const federatedSignIn = async (
        options: IFederatedSignInOptions
    ): Promise<void> => {
        // Configure the oauth flow
        API.Auth.configure({
            oauth: {
                ...oauth,
                ...(options.oauth || {})
            }
        });

        await API.Auth.federatedSignIn(
            options.signIn as unknown as FederatedSignInOptions
        );
    };

    /**
     * Send MFA code to confirm sign in
     * @param {Object} user - The CognitoUser object
     * @param {String} code - The confirmation code
     */
    export const mfaConfirmSignIn = async (
        code: string
    ): Promise<ISignUpResult> => {
        return await API.Auth.confirmSignIn(API.Auth.currentUserInfo, code);
    };

    /**
     * Signs a user up to join Tokens Studio
     * @param params
     * @returns
     */
    export const signUp = async (params: ISignUp): Promise<ISignUpResult> => {
        return await API.Auth.signUp(params);
    };

    /**
     * Confirms the signup process with the verification code sent to the user
     * @param username The username that was used for signup
     * @param code Code received at the provided email address
     * @returns
     */
    export const confirmSignUp = async (
        username: string,
        code: string
    ): Promise<any> => {
        return await API.Auth.confirmSignUp(username, code);
    };

    /**
     * Resends the verification from the signup process if not recieved
     */
    export const resendSignUp = async (username: string): Promise<any> => {
        return await API.Auth.resendSignUp(username);
    };

    /**
     * Changes the current password of the user
     * @param user
     * @param oldPassword
     * @param newPassword
     * @returns
     */
    export const changePassword = async (
        user: CognitoUser,
        oldPassword: string,
        newPassword: string
    ) => {
        return await API.Auth.changePassword(user, oldPassword, newPassword);
    };
}

export type { CognitoUser } from 'amazon-cognito-identity-js';

export { Hub };
