import Link from "next/link";

/** / → the docs landing page. */
export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-40 text-center">
      <p className="text-sm text-fd-muted-foreground">Meridian documentation</p>
      <Link
        href="/docs"
        className="rounded-full bg-fd-primary px-5 py-2 text-sm font-medium text-fd-primary-foreground"
      >
        Open the docs
      </Link>
    </div>
  );
}
