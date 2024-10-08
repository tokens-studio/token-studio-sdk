# @tokens-studio/sdk

## 1.2.2

### Patch Changes

-   ed5786d: Add owner property to OrganizationInfo
    Add contains property to filter Organizations by partial strings

## 1.2.1

### Patch Changes

-   9a13552: Change token type to string
-   7205f25: Allow querying composition properties

## 1.2.0

### Minor Changes

-   dcd3341: Add mutation and query for individual theme group options
-   906f8eb: Change TokenType to be of type string

### Patch Changes

-   96d70e3: Allow editing of token types

## 1.1.5

### Patch Changes

-   09e3a63: Add support for api calls of generator

## 1.1.4

### Patch Changes

-   9d0b525: Add support for api calls of border tokens

## 1.1.3

### Patch Changes

-   8d6b509: Make theme group option accessible via api

## 1.1.2

### Patch Changes

-   b36f3ad: Prod setup for sdk setApiKey config method. By default SDK should point to prod environment as dev should be for internal usage.

## 1.1.1

### Patch Changes

-   0a1301c: Revert faulty createSDConfig schema change.

## 1.1.0

### Minor Changes

-   f9b6026: Add admin queries and mutations for internal use

## 1.0.2

### Patch Changes

-   f1127f0: Fix createSDConfig mutation to use "project" urn to initialize, rather than its own "urn" (which does not exist yet).

## 1.0.1

### Patch Changes

-   567489d: Fix SDConfigs functions property type, change from AWSJSON to String.

## 1.0.0

### Major Changes

-   ae4a60c: Changed how raw tokens are represented in the SDK

## 0.4.0

### Minor Changes

-   d21b576: Regenerated SDK
-   086d60b: Synchronize with API. Add better support for complex types

## 0.3.0

### Minor Changes

-   af0417c: Sync with new features for border and box shadow
