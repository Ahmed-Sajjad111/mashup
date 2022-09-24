import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'p5pzj1bv',
  dataset: 'production',
  apiVersion: '2022-09-23',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
