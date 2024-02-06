/* eslint-disable camelcase */
//TODO change this to prod when ready
const awsmobile = {
    aws_appsync_graphqlEndpoint: 'http://localhost:3002/graphql',
    aws_appsync_region: 'eu-central-1',
    aws_user_pools_id: 'eu-central-1_ni60xbUBe',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    aws_user_pools_web_client_id: '4sp4dlvarnslglg2feth8b07qh'
};

export const oauth = {
    domain: 'dev-tokensstudio.auth.eu-central-1.amazoncognito.com',
    redirectSignIn: 'https://dev.tokens.studio/signin',
    redirectSignOut: 'https://dev.tokens.studio/signout',
    scope: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    responseType: 'code'
};

export default awsmobile;
