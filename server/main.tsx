import ReactDom from 'react-dom';
import React from 'react';

import { UserAuth } from '../src';
ReactDom.render(
    <button
        id="login"
        onClick={async () => {
            const res = await UserAuth.federatedSignIn({
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
