# stm-gtfs-realtime

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/stm-gtfs-realtime

https://stm-gtfs-realtime.vercel.app

https://stm-gtfs-realtime.herokuapp.com

by ansel brandt https://github.com/anselbrandt

https://gtfs.vercel.app/

https://github.com/anselbrandt/stm-gtfs-realtime

## Environment Values

```java
// Expose environment variables to the browser by prefixing with NEXT_PUBLIC_

export const APIKEY = process.env.NEXT_PUBLIC_APIKEY as string;
export const MAPBOX_ACCESS_TOKEN = process.env
  .NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
export const IS_PROD = process.env.VERCEL_ENV === "production" ? true : false;

NEXT_PUBLIC_APIKEY=
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
NEXT_PUBLIC_GITHUB_CALLBACK=
COOKIE_PASSWORD=
NEXT_PUBLIC_GITHUB_GRAPHQL_PROXY=
NEXT_PUBLIC_GITHUB_GIT_PROXY=
SLACK_WEBHOOK=
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/stm-gtfs-realtime.git
git push -u origin main
```

## Heroku

```java
heroku create stm-gtfs-realtime

```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="your value"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
