# Contributing 

## Tests 

To run the tests locally, you will need to populate test user variables to confirm login functionality.

```
const TEST_USER_NAME = process.env.TEST_USER_NAME!;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD!;
const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL!;
```

We do not distribute the test user values outside of the Tokens Studio organization for security reasons, so you will need to populate them with your own