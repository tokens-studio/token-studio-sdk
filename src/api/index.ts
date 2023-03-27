
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://bcb5bb019dc74e77abe09f7291275df0@o386310.ingest.sentry.io/4504911133999104",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

export * from './graphql';
export * from './mutation';
export * from './query';
export * from './configure';
export * from './userAuth';
export * from './subscription';