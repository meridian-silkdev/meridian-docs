import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: { default: "Meridian Docs", template: "%s | Meridian Docs" },
  description:
    "How to use the Meridian platform — for customers requesting services and providers fulfilling them.",
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
