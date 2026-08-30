import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

/** Static search index over the doc pages. */
export const { GET } = createFromSource(source);
