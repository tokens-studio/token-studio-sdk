## Sync with schema

Use the following command to sync the graphql from the upstream AWS Appsync endpoint

```bash
aws appsync get-introspection-schema --api-id <api-id> --format SDL ./schema.graphql --region <region>
```

For the dev environment you can use `wdr3mttiqbgoxm2ytghyzkcki4` as the id with region `eu-central-1`


#### Dev

1. Login through our SSO 
```bash
aws sso login --profile dev-admin 
```

2. Sync the schema 
```bash
aws appsync get-introspection-schema --api-id wdr3mttiqbgoxm2ytghyzkcki4 --format SDL ./schema.graphql --region eu-central-1
```

3. Generate the code 
```bash
amplify codegen
```