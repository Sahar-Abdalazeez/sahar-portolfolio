import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-02",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

//code that we will use whenever we use images with sanity

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
