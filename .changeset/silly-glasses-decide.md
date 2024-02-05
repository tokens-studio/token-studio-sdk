---
'@tokens-studio/sdk': patch
---

Fix createSDConfig mutation to use "project" urn to initialize, rather than its own "urn" (which does not exist yet).
