# Portfolio code review — to-do list

From a full read of `src/` plus a production build on 2026-09-06. Items are numbered
for reference ("let's do #3"). Ordered by impact, not by effort.

---

## A. Bugs with visible consequences

- [x] **A1. `alt-text=` typo — 10 images have no alt text**

  `alt-text` is not an HTML attribute, so it's silently dropped. The alt text is
  written but never reaches a screen reader. Rename to `alt=`.

  - `src/app/projects/digital_stewardship/digital_stewardship.component.html:9, :28`
  - `src/app/projects/agoodsite/agoodsite.component.html:9, :13`
  - `src/app/projects/drop-the-beat/drop-the-beat.component.html:11`
  - `src/app/projects/imrs/imrs.component.html:25`
  - `src/app/projects/flourish/flourish.component.html:9`
  - `src/app/projects/stella-budget-prognos/stella-budget-prognos.component.html:15, :37, :65`

  Highest priority: the Tajma page describes making tables usable for a visually
  impaired user, so this is the first thing an auditor would check.

- [x] **A2. 8 images with no `alt` attribute at all** — all in
  `src/app/projects/tajma/tajma.component.html` (lines 83, 88, 96, 101, 107, 109, 125, 130).

  Closed 2026-09-07 as not a defect — no code change. All 8 sit inside commented-out
  blocks, so none of them ever rendered and there was no accessibility impact. Verified
  against the production bundle in `docs/`, where Angular strips comments: none of the 8
  paths appear, while the 3 genuinely-rendered Tajma images each appear once. (A dev-server
  bundle is not a valid check here — `ng serve` embeds the raw template text, comments
  included.)

  Alt text was briefly added and then reverted: carrying descriptions for markup that
  cannot render is upkeep with no user-facing benefit. If those blocks are ever
  uncommented, alt text needs writing at that point.

  Note: three further commented-out `<img>` tags (lines 32, 34, 77) also have no `alt`,
  and the tablet/mobile captions at :126 and :131 read Before/After though both images
  come from `new/`. All moot while the blocks stay commented.

- [x] **A3. Decorative logos use `alt="{{ title }}"`** — `src/app/project-card/project-card.component.html:3`.
  The card title is already adjacent text; these should be `alt=""`.

  Resolved 2026-09-07 as `alt="{{ title }} thumbnail"`, Stella's call. The original
  finding called these "decorative logos", which turned out to be wrong: only 6 of the
  11 card images are wordmarks (Tajma, Stella Budget & Prognos, DigiPost, G-Force, ACDC,
  Theses). The other 5 are informative thumbnails despite their `-logo` filenames —
  Drop the Beat, Digital Stewardship and Flourish are three-phone UI mockups, IMRS is an
  annotated photo carrying handwritten labels, AGoodSite is a colour palette with hex
  codes. A blanket `alt=""` would have made those silent, so the interim `alt=""` fix
  was replaced. Driven off the `title` input, so it cannot drift from `projects-data.ts`.

- [x] **A4. Project cards aren't links** — `src/app/project-card/project-card.component.html:1`
  is `<mat-card (click)="navigate()">`. Not keyboard-reachable, no focus ring, no
  `href` (so no cmd-click / middle-click / open-in-new-tab / copy-link), invisible
  to crawlers. Wrap in `<a [routerLink]="route">`; then delete `navigate()` and the
  `Router` injection in `project-card.component.ts`.

- [x] **A5. Invalid nesting on the résumé button** — `src/app/about/about.component.html:27-34`
  puts a `<button>` inside `<a href download>`. Interactive content inside an anchor
  is invalid HTML. Use `<a matButton="tonal" href=... download>` instead.

- [x] **A6. Horizontal scrollbar on the About page** — `src/app/about/about.component.css:72-77`
  uses `width: 100vw` + `left: 50%` + `translateX(-50%)`. `100vw` includes the
  scrollbar width on platforms where scrollbars take layout space (Windows/Linux
  Chrome), so the landing page overflows. Use `width: 100%; margin-inline: calc(50% - 50vw)`,
  or `overflow-x: clip` on the page container.

- [x] **A7. Unclosed `<div>`** — `src/app/projects/projects.component.html:1` opens
  `.page-container` and never closes it. The Angular parser auto-closes at EOF so the
  build passes, but it breaks the moment anything is added after the grid.

- [x] **A8. `[attr.panelClass]` is a no-op** — `src/app/app.component.html:20`.
  `panelClass` is a `MatMenu` input, not a DOM attribute. `.my-mobile-menu` is also
  not defined anywhere in the project, so the binding can just be deleted.

- [x] **A9. Hamburger button has no `aria-label`** — `src/app/app.component.html:13`
  announces as an unlabeled button.

- [x] **A10. No wildcard route** — `src/app/app-routing.module.ts` has no
  `{ path: '**' }`. Any dead or typo'd URL renders the toolbar and footer with an
  empty middle. `build:ghpages` copies `index.html` to `404.html`, so GitHub Pages
  hands *every* bad path to the app — this is the guaranteed outcome, not an edge case.

  Fixed 2026-09-07 as `{ path: '**', redirectTo: '' }`, so a bad path shows the About
  page. Chosen over a dedicated 404 component to keep it to one line; the trade-off is
  that a typo'd URL looks like a working page rather than saying the link was wrong.

- [ ] **A11. `npm test` is broken** — `src/app/app.component.spec.ts` is untouched CLI
  boilerplate: it asserts `.content span` contains `"myApp app is running!"` (markup
  that doesn't exist) and declares `AppComponent` without `RouterModule` or the
  Material modules its template needs. Write real specs or delete the file.

- [x] **A12. `before-after` hardcodes one `alt` for two different images** —
  `src/app/before-after/before-after.component.html:9` renders a fixed
  `alt="Before and after comparison"` while `[src]` toggles between `beforeSrc` and
  `afterSrc`. The alt never changes with the image and describes neither one.

  This is the *rendered* alt-text gap on the Tajma page that A2 missed: both visible
  Tajma images go through this component, including the screen-reader before/after
  comparison — the exact thing an auditor would check given the page copy about making
  the app usable for a visually impaired user.

  Fix: add `beforeAlt` / `afterAlt` inputs and pass them from all 6 call sites —
  `tajma.component.html:17, :112`, `digital_stewardship.component.html:32, :42`,
  `digi-post.component.html:21, :48`.

  Found 2026-09-07 while doing A2.

---

## B. Performance

- [ ] **B1. 114 MB of assets, all of it shipped.** `src/assets` is 114 MB and
  `docs/assets` is a second copy (`.git` is 123 MB). Compress / resize:

  | Size | File |
  |---|---|
  | 39.0 MB | `imrs/imrs-poster.pdf` |
  | 22.3 MB | `theses/master-thesis.pdf` |
  | 6.8 MB | `imrs/imrs-poster.png` |
  | 6.1 MB | `stella-budget-prognos/affinity-map.png` |
  | 5.6 MB | `agoodsite/agoodsite-pages.svg` (almost certainly embedded bitmaps, not vectors) |
  | 2.2 MB | `stella-budget-prognos/tabell.svg` |
  | 1.6 MB | `g-force/Gallery/hand_controllers.png` |
  | 1.6 MB | `stella-budget-prognos/problem_statements.png` |
  | 1.3 MB | `stella-budget-prognos/double-diamond..svg` (note the double dot in the name) |

  WebP/AVIF at sensible dimensions should cut total page weight by ~90%. The two big
  PDFs are downloads rather than page content, but they're in the deployed bundle and
  in git history permanently.

- [ ] **B2. No lazy loading or intrinsic dimensions** — none of the 34 `<img>` tags has
  `loading="lazy"`, `width`, or `height`. Project pages load every image up front and
  reflow as they arrive.

- [ ] **B3. Single 706 kB bundle, over budget.** Build warns:
  `bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 253.24 kB`.
  All 12 project pages are eagerly imported in `app-routing.module.ts`. Switch to
  `loadComponent: () => import('...').then(m => m.XComponent)`.

---

## C. Discoverability / SEO

- [ ] **C1. One `<title>` for the whole site** — every route reads
  "Stella Millwood — Portfolio" in tabs, history, and search results. No use of the
  `Title` service.

- [ ] **C2. No `<meta name="description">`** in `src/index.html`.

- [ ] **C3. No Open Graph / Twitter Card tags** — sharing a project link on LinkedIn
  produces a bare URL with no image or summary.

- [ ] **C4. Nothing is prerendered** — `docs/prerendered-routes.json` is `{"routes":{}}`,
  so crawlers get an empty shell. Angular's `outputMode: 'static'` with `prerender`
  would fix that and speed up first paint.

- [ ] **C5. Google Fonts loaded without `preconnect`** (`src/index.html:9-10`), and the
  full Material Icons font is pulled for a handful of glyphs.

---

## D. Maintainability

- [ ] **D1. The same lookup duplicated 12 times.** Every project component does
  `PROJECTS.find(p => p.route === "/projects/xyz")!` — magic string plus non-null
  assertion. Rename a route in `projects-data.ts` and you get a runtime crash on a
  blank page instead of a compile error. The 12 detail components are near-identical
  shells differing only in template; one route with a `:slug` param, or at minimum a
  typed `getProject('tajma')` keyed off a union type, collapses most of this.

- [ ] **D2. Hybrid NgModule + standalone setup.** `AppModule` + `platformBrowserDynamic`
  + zone.js coexists with 19 standalone components, and `src/main.ts` passes
  `applicationProviders: [provideZoneChangeDetection()]` into `bootstrapModule`. The
  Angular 21 idiom is `bootstrapApplication(AppComponent, { providers: [provideRouter(routes), provideAnimationsAsync()] })`
  with a standalone root — which would let `app.module.ts` and `app-routing.module.ts`
  be deleted outright. `app.module.ts:18` still carries the note
  `// Only AppComponent; remove About/Project components if they are standalone`, and
  it imports `MatTableModule` / `MatButtonToggleModule` that only standalone children use.

- [ ] **D3. Dead code to delete:**
  - `src/app/vertical-menu/` — component never used anywhere, plus its orphaned
    `/* Removed vertical-menu. Might bring back later. */` block at `src/styles.css:16-29`
  - `src/app/app.component.html:25-27` — `<ng-content>` inside an empty flex
    `.page-layout`; `<app-root>` has no children so nothing can ever project into it
  - `.spacer` — `src/app/app.component.css:13`, unused
  - `.card-text` defined twice — `src/app/project-card/project-card.component.css:31` and `:46`
  - `title = 'myApp'` — `src/app/app.component.ts:10`
  - `panelOpenState` — `src/app/projects/tajma/tajma.component.ts:19`, unused signal
  - `@Input() description` — `src/app/project-card/project-card.component.ts:21`,
    passed by every caller but never rendered
  - Large commented-out markup blocks in `tajma.component.html`,
    `digi-post.component.html`, `acdc.component.html` — git history is the place for these

- [ ] **D4. Placeholder copy in live data** — `projects-data.ts:88` has
  `description: "DigiPost"` and `:134` has `"Theses project description"`. Currently
  invisible only because `description` is never rendered (see D3), so wiring that input
  up would ship placeholder text.

- [ ] **D5. Import paths** — `import ... from 'src/app/...'` (absolute via `baseUrl`)
  mixed with relative imports. Add a `paths` alias like `@app/*` and use it consistently.

- [ ] **D6. Direct DOM query instead of `viewChild`** —
  `src/app/about/about.component.ts:18` uses `document.querySelector('video')` in
  `ngAfterViewInit`, which grabs the first video anywhere on the page. Also: the
  autoplay loop ignores `prefers-reduced-motion`.

- [ ] **D7. Inconsistent template syntax** — `*ngFor` + `CommonModule` in `tabs` and
  `before-after` vs `@for` in `projects`.

- [ ] **D8. Naming inconsistencies** — `digital_stewardship/` is snake_case among
  kebab-case siblings; `ImageTabsComponent` lives in `tabs/tabs.component.ts` with
  selector `app-image-tabs`; package name is still `my-app` and the Angular project
  is `myApp`.

- [ ] **D9. Deploy is manual and fragile.** `build:ghpages` chains `mv`/`rm -r` (not
  portable, silently depends on `docs/browser` existing) and the output has to be
  committed by hand — hence commits like "added latest build files". A GitHub Actions
  workflow publishing to a `gh-pages` branch would remove the duplicate 114 MB from the
  repo and make stale deploys impossible. (`docs/` is currently in sync with `src/`.)

---

## E. Judgment calls, not defects

- [ ] **E1. Contact heading contrast is 4.54:1** — `on-secondary-container: rgb(83 105 99)`
  on `secondary-container: rgb(208 232 224)` in `src/material-theme.scss`. Passes WCAG AA
  by 0.04, which suggests the M3 role got mapped to `secondary` rather than a proper dark
  on-container value. Worth a darker value for margin.

---

## Suggested order

1. **A1, A2, A3** — accessibility, small and self-contained, highest reputational cost.
2. **A4, A5, A7, A8, A9** — small correctness/markup fixes in the same area.
3. **A10, A11** — routing fallback and the test suite.
4. **A6** — the layout overflow.
5. **B1, B2** — image compression is the single biggest user-facing win.
6. **B3, C1–C4** — lazy routes plus per-route metadata; naturally done together.
7. **D1, D2** — the structural refactor; do last, once behaviour is pinned down.
8. **D3–D9, C5, E1** — cleanup, any time.
