import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: { default: "Meridian Docs", template: "%s | Meridian Docs" },
  description:
    "Meridian connects founders with vetted local professionals for company formation, visas, accounting and tax. How requests, quotes, payments and delivery work.",
};

/** Root layout — fumadocs provider (theme, search context). */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
