## Sync with schema

Use the following command to sync the graphql from the upstream AWS Appsync endpoint

```bash
aws appsync get-introspection-schema --api-id <api-id> --format SDL ./schema.graphql --region <region>
```

For the dev environment you can use `wdr3mttiqbgoxm2ytghyzkcki4` as the id with region `eu-central-1`
so 

Dev = `aws appsync get-introspection-schema --api-id wdr3mttiqbgoxm2ytghyzkcki4 --format SDL ./schema.graphql --region eu-central-1`

You will need sufficient permissions to do so

Then generate the code through 

```bash
amplify codegen
```