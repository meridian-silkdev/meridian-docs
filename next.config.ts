import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** Meridian docs — fumadocs + MDX, served at /docs on port 3103. */
export default withMDX({
  reactStrictMode: true,
});
