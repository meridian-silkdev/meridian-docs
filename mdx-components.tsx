import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";

/** Shared MDX components for every doc page. */
export function getMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
  };
}
