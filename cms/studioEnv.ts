/**
 * Studio-only env: Vite inlines `SANITY_STUDIO_*` for the browser bundle.
 * Next.js still uses `NEXT_PUBLIC_*` via `ui/src/sanity/env.ts`.
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  '2026-05-05'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing SANITY_STUDIO_DATASET (recommended) or NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing SANITY_STUDIO_PROJECT_ID (recommended) or NEXT_PUBLIC_SANITY_PROJECT_ID',
)
