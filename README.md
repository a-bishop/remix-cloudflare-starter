# Remix Cloudflare Starter

An opinionated Remix starter for Cloudflare workers, with Google Auth integration

- Remix
- Cloudflare (D1, KV)
- Google Auth
- Drizzle ORM
- Vitest

### Get Started (OSX)

1. Set up an [OAuth 2.0 application in the Google Cloud console](https://console.cloud.google.com/apis/credentials/oauthclient)
1. Create a `.dev.vars` file with the following env variables set
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
BASE_URL=https://localhost:8788
```
1. [Install mkcert](https://github.com/FiloSottile/mkcert)
1. Run `npm i`
1. Run `npm run cert:regen` to generate a locally-trusted ssl cert
1. Run `npm start` to spin up the dev server
1. Run `npm run db:schema:generate` to generate db migrations from the schema
1. Run `npm run db:studio` in a separate terminal tab to spin up a drizzle studio instance to interact with the local D1 db.
1. Github integration and automatic deployments are enabled for the `staging` and `main` branches (configurable in `./build.sh`). [More info](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/) on setting up your Cloudflare account for Github integration.