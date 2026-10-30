# October 30, 2026 maintenance

Next16.4.3/React19.3.1, Node24.22.1/npm11.17.0, matching Next lint config
and working ESLint10.14.0 replace the older framework/runtime/lint setup.
Headless UI updates within2.x; Tailwind/PostCSS update within4.x/8.x.
An explicit theme font stack preserves the original fonts after Tailwind4.3's
default changed. Local comparisons preserve metadata/schema, images, typography
and rendered colors; equivalent OKLCH/Lab CSS serialization is compared in sRGB.
Formspree React3.0.0 and Heroicons2.2.0 are already current and remain pinned.
Unused React Player and direct FlatCompat dependency are removed; the homepage
already uses a static image, so no active player or video feature is removed.

The contact form now displays Formspree-wide errors in addition to field errors.
This fixes the previously silent provider/account/network failure path without
changing the public form ID `myzpdjkl`, subject, fields or provider destination.
Entered fields remain available for retry; submission stays disabled while pending.

Real lint runs through ESLint CLI/core-web-vitals. The raw noscript tracking pixel
has a line-scoped optimization-rule exemption because it must retain the provider's
exact unoptimized URL. Tracking source and application behavior are preserved.
No general lint rule is disabled, image optimization enabled, or design/SEO rewrite added.

Verification checks all six routes and referenced local images, metadata/schema,
sitemap/favicon/404, mobile/desktop navigation and overflow, required-field validation,
provider/network failure visibility, retained drafts, disabled pending submission,
successful retry, existing form ID/subject and intercepted request contents.
All Formspree submissions are synthetic and intercepted in Playwright before
network transmission. Tracking is stubbed. No real message, provider account or
mailbox delivery is tested; there are no database changes.

CI uses pinned Ubuntu24.04/Node/npm and action SHAs. Normal npm resolution may emit
stale ESLint plugin peer-range warnings; do not use force/legacy-peer flags to hide them.
Audit, lint, build and integration checks must pass before release. Main deploys
the existing Vercel site; verify source, domain aliases and Node24.x after release.

Sources: [Next16 migration](https://nextjs.org/docs/app/guides/upgrading/version-16),
[Next ESLint support](https://nextjs.org/docs/app/api-reference/config/eslint),
[Formspree React library](https://help.formspree.io/articles/working-with-react/the-formspree-react-library/).
