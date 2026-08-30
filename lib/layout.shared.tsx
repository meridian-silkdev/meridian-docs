import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/** Shared nav options — Meridian lockup, links back to the platform. */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="font-semibold">Meridian</span>,
      url: "/docs",
    },
    links: [
      { text: "Platform", url: "https://meridian.silkdev.com.tn" },
      { text: "Contact", url: "mailto:contact@silkdev.com.tn" },
    ],
  };
}
