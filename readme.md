# Token Studio SDK

This is the official SDK for Tokens Studio.

## Quickstart

### Installation

```sh
npm install @tokens-studio/sdk
```

## Signup 

You will need to sign up to the Tokens Studio platform if you haven't already. The entire signup process can be done purely using this library and your email

```ts
import {UserAuth} from '@tokens-studio/sdk';

const username = 'MyUserName';
const password =  'SomeSecurePassword1!'

const signup = await UserAuth.signUp({
     username,
        password,
        attributes: {
            email: 'my@email.com'
        }
});

// ...
//Retrieve the verification code from your email address
const verificationCode = '...';

await UserAuth.confirmSignUp(username,verificationCode);
await UserAuth.signIn(username,password);

// You should now be signed in and can make authenticated requests.
// Please see the documentation for alternate authentication modes should you wish to use API keys,etc

```

## Documentation

See the [documentation site](https://tokens-studio.github.io/token-studio-sdk/) for more info

## ES5 & ES6

The library supports both ES5 commonjs as well as ES6 module js

## Type secure

The entire library is built with typescript and provides multiple utilities to ensure type safety

## License

This repository is published under the [MIT](LICENSE) license.