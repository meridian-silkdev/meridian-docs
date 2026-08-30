# meridian-docs

Documentation for the Meridian platform — for customers requesting services and providers fulfilling them.

Built with [Fumadocs](https://fumadocs.dev) on Next.js.

## Development

```bash
npm install
npm run dev
```

Runs at http://localhost:3103, docs served under `/docs`.

## Structure

- `content/docs/` — MDX doc pages. `meta.json` in each folder controls sidebar order.
- `app/docs/[[...slug]]/` — renders doc pages via the fumadocs source loader.
- `lib/source.ts` — the doc source (page tree + search index).
- `lib/layout.shared.tsx` — shared nav (title, links).
