import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";

/** The docs source — page tree + search index, built from content/docs MDX. */
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon: () => createElement("span"),
});
