// Expose environment variables to the browser by prefixing with NEXT_PUBLIC_

export const APIKEY = process.env.STM_API_KEY as string;
export const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN as string;
export const IS_PROD = process.env.VERCEL_ENV === "production" ? true : false;
