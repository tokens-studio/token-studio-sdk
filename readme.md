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
import { UserAuth, Configuration } from '@tokens-studio/sdk';

//Use defaults
Configuration.configure();

const username = 'MyUserName';
const password = 'SomeSecurePassword1!';

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

await UserAuth.confirmSignUp(username, verificationCode);
await UserAuth.signIn(username, password);

// You should now be signed in and can make authenticated requests.
// Please see the documentation for alternate authentication modes should you wish to use API keys,etc
```

## Permissions

Note that some of the preconfigured queries are very expansive and attempt to require all properties on a type. This might cause problems with scoped permissions.

In cases like this, it is beneficial to be as specific as possible with the return values if operating with the public mode API or API keys.

## Contributing

See [Contributing](./developer-docs/contributing.md) for more info on running tests, etc

## Underlying Graphql documentation

See the documentation for the GraphQL API [here](https://tokens-studio.github.io/tokens-studio-grapqhl-docs/)

## Documentation

See the [documentation site](https://tokens-studio.github.io/token-studio-sdk/) for more info

## ES5 & ES6

The library supports both ES5 commonjs as well as ES6 module js

## Type secure

The entire library is built with typescript and provides multiple utilities to ensure type safety

## License

This repository is published under the [MIT](LICENSE) license.
