import React from 'react';
import ReactDom from 'react-dom';

import { UserAuth } from '../src';
ReactDom.render(
    <button
        id="login"
        onClick={async () => {
            await UserAuth.federatedSignIn({
                signIn: {
                    provider: UserAuth.FederatedProviders.Google
                }
            });
        }}
    >
        Federated Login
    </button>,
    document.body
);
