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

- [x] **A11. `npm test` is broken** — `src/app/app.component.spec.ts` is untouched CLI
  boilerplate: it asserts `.content span` contains `"myApp app is running!"` (markup
  that doesn't exist) and declares `AppComponent` without `RouterModule` or the
  Material modules its template needs. Write real specs or delete the file.

  Fixed 2026-09-24. Chain of issues, not just the one file:

  - `node_modules` was stale — `karma`, `karma-jasmine`, `jasmine-core`, etc. were in
    `package.json`/the lockfile but not actually installed, so `ng test` couldn't even
    launch. Fixed with `npm install`.
  - `tabs.component.spec.ts` imported a class named `TabsComponent`, but the component
    was renamed to `ImageTabsComponent` (see D8) without updating the spec — a compile
    error that blocked the *entire* suite from loading, not just that one file.
  - `app.component.spec.ts` rewritten with real specs: toolbar site name, About/Projects
    nav links, footer text. Needs `RouterModule.forRoot([])` (not just `provideRouter`,
    since `AppComponent` is still NgModule-declared) plus the four Material modules its
    template actually uses.
  - Three other generated specs (`ProjectsComponent`, `VerticalMenuComponent`,
    `ProjectCardComponent`) were failing with `NG0201: No provider found for
    ActivatedRoute` — their standalone components use `routerLink`, but the boilerplate
    `TestBed` config never provided a router. Added `provideRouter([])` to each.

  All 22 specs pass via `CHROME_BIN=/usr/bin/google-chrome npx ng test --watch=false
  --browsers=ChromeHeadless`. Production build unaffected.

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

- [x] **B1. 114 MB of assets, all of it shipped.** `src/assets` is 114 MB and
  `docs/assets` is a second copy (`.git` is 123 MB). Compress / resize:

  | Size | File | Status |
  |---|---|---|
  | 39.0 MB | `imrs/imrs-poster.pdf` | Left as-is — a download, not page content |
  | 22.3 MB | `theses/master-thesis.pdf` | Left as-is — a download, not page content |
  | 6.8 MB | `imrs/imrs-poster.png` | → `imrs-poster.webp`, 2080×1470, 346 KB |
  | 6.1 MB | `stella-budget-prognos/affinity-map.png` | → `affinity-map.webp`, 2080×937, 57 KB |
  | 5.6 MB | `agoodsite/agoodsite-pages.svg` | **Dead file — not referenced anywhere.** Left in place, not deleted |
  | 2.2 MB | `stella-budget-prognos/tabell.svg` | **Dead file — not referenced anywhere.** Left in place, not deleted |
  | 1.6 MB | `g-force/Gallery/hand_controllers.png` | → `hand_controllers.webp`, same 1599×1600, 361 KB |
  | 1.6 MB | `stella-budget-prognos/problem_statements.png` | → `problem_statements.webp`, 2080×878, 158 KB |
  | 1.3 MB | `stella-budget-prognos/double-diamond..svg` | **Dead file — not referenced anywhere.** Left in place, not deleted |

  Done 2026-09-15 for the four PNGs that are actually rendered: converted to WebP with
  `cwebp -q 82`, resized to 2080px wide (2x the ~1040px CSS container width, since none
  of these use `.img-small`) except `hand_controllers.png`, which was already
  display-appropriate at 1599×1600 and only needed re-encoding. `<img>` `[src]` and
  `width`/`height` updated at all 4 call sites (`imrs`, `stella-budget-prognos` ×2,
  `g-force`'s `app-image-tabs`). Old PNGs removed via `git rm`. `src/assets` dropped
  114 MB → 99 MB from this alone. Verified with a production build plus screenshots of
  all 3 affected pages in a headless browser — images render undistorted.

  Three of the nine files in the original table turned out to be dead weight: the
  `.component.html` files reference `agoodsite-pages.png`/`tabell.png` (not `.svg`), and
  `double-diamond..svg` isn't referenced at all — `grep` across `src/app` for all three
  filenames returns nothing.

  Closed 2026-09-24: Stella copied all 3 dead SVGs out of the repo herself, then had them
  `git rm`'d from both `src/assets` and `docs/assets` — 9.3 MB recovered with no
  compression trade-off. The two PDFs are staying as the one accepted exception, Stella's
  call: compressing a poster/thesis PDF risks visible quality loss on something people
  actually read/download rather than just view on a page.

- [x] **B2. No lazy loading or intrinsic dimensions** — none of the 34 `<img>` tags has
  `loading="lazy"`, `width`, or `height`. Project pages load every image up front and
  reflow as they arrive.

  Fixed 2026-09-15. `loading="lazy"` added to every rendered `<img>` (commented-out ones
  left untouched, per A2's precedent). Intrinsic `width`/`height` added everywhere the
  source is fixed at compile time, read from each PNG/SVG with `identify`.

  Two components needed real changes rather than just attributes, because their `<img>`
  has more than one possible source per instance and the images in a set aren't the same
  size: `before-after` toggles between `beforeSrc`/`afterSrc`, and `tabs` iterates over a
  caller-supplied list. Both got new per-image `width`/`height` (`beforeWidth`/
  `afterWidth`/... on `before-after`, mirroring A12's `beforeAlt`/`afterAlt`; `width`/
  `height` added to `ImageTab` for `tabs`), wired from real dimensions at all 6
  `before-after` call sites and the one `tabs` call site (g-force, 3 images).

  `project-card.component.html`'s `<img>` is also multi-source (11 different project
  thumbnails via one template) but was left without `width`/`height`: its CSS already
  sets `aspect-ratio: 16/9` with `object-fit: cover` on `.card-img`, which reserves the
  layout box independent of intrinsic size, so the attributes would have been redundant.
  Got `loading="lazy"` only.

- [x] **B3. Single 706 kB bundle, over budget.** Build warns:
  `bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 253.24 kB`.
  All 12 project pages are eagerly imported in `app-routing.module.ts`. Switch to
  `loadComponent: () => import('...').then(m => m.XComponent)`.

  Done 2026-09-24. All 12 project routes in `app-routing.module.ts` converted to
  `loadComponent`; only the `''` (About) route stays eager since it's the landing page.
  Also removed `MatTableModule`/`MatButtonToggleModule` from `app.module.ts` — dead
  imports noted in D2, since `project-info-table` and `before-after` already bring their
  own standalone Material pieces and nothing in `AppComponent`'s template needs them.

  Initial bundle: 757 kB → 559 kB (194 kB off). Budget overage: 253 kB → 59 kB. The
  remaining 59 kB is core Angular/Material framework weight for the persistent
  toolbar/menu nav plus router/animations — shrinking further needs the full D2
  NgModule → `bootstrapApplication` migration, left as that separate item.

  Update 2026-09-24: D2 closed the remaining gap. `bootstrapApplication` with
  `provideAnimationsAsync()` moved the Material animations engine into a lazy chunk,
  landing the initial bundle at 481.53 kB — under budget, no warning.

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

- [x] **D1. The same lookup duplicated 12 times.** Every project component does
  `PROJECTS.find(p => p.route === "/projects/xyz")!` — magic string plus non-null
  assertion. Rename a route in `projects-data.ts` and you get a runtime crash on a
  blank page instead of a compile error. The 12 detail components are near-identical
  shells differing only in template; one route with a `:slug` param, or at minimum a
  typed `getProject('tajma')` keyed off a union type, collapses most of this.

  Done 2026-09-24 with the "at minimum" option — the `:slug`-route restructure would
  collapse 12 separate components into one, a much bigger and riskier change than this
  finding calls for. Added a `ProjectRoute` union type (the 11 actual route strings) and
  a `getProject(route: ProjectRoute): Project` helper to `projects-data.ts`, which throws
  a clear error instead of silently producing `undefined` behavior via `!` if
  `projects-data.ts` and a route ever drift apart. All 11 call sites (there were 11, not
  12 — `ProjectsComponent`, the list page, doesn't do this lookup) switched from
  `PROJECTS.find(p => p.route === "/projects/x")!` to `getProject("/projects/x")`, with
  the route string now type-checked against the union instead of being a bare string
  literal. `ng build` and the full test suite pass.

- [x] **D2. Hybrid NgModule + standalone setup.** `AppModule` + `platformBrowserDynamic`
  + zone.js coexists with 19 standalone components, and `src/main.ts` passes
  `applicationProviders: [provideZoneChangeDetection()]` into `bootstrapModule`. The
  Angular 21 idiom is `bootstrapApplication(AppComponent, { providers: [provideRouter(routes), provideAnimationsAsync()] })`
  with a standalone root — which would let `app.module.ts` and `app-routing.module.ts`
  be deleted outright. `app.module.ts:18` still carries the note
  `// Only AppComponent; remove About/Project components if they are standalone`, and
  it imports `MatTableModule` / `MatButtonToggleModule` that only standalone children use.

  Done 2026-09-24, done last as planned, once D1/D3/D5-D8 had already settled the pieces
  it touches. `AppComponent` converted to `standalone: true` with its own `imports`
  (`RouterLink`, `RouterOutlet`, the 4 Material modules its template uses). Routes moved
  out of `app-routing.module.ts` into a plain `export const routes: Routes` in the new
  `app.routes.ts`. `app.module.ts` and `app-routing.module.ts` deleted outright.
  `main.ts` rewritten to `bootstrapApplication(AppComponent, { providers:
  [provideZoneChangeDetection(), provideRouter(routes), provideAnimationsAsync()] })` —
  used the idiom's exact suggestion, including `provideAnimationsAsync()` over the sync
  `provideAnimations()`.

  That last choice turned out to matter more than expected: swapping the eagerly-bundled
  `BrowserAnimationsModule` for the async provider moved the whole Material animations
  engine into a lazy chunk, and the initial bundle dropped from 559 kB to 481.53 kB —
  **under** the 500 kB budget for the first time, closing out the last 59 kB B3 left
  open. Verified with `ng build` (no budget warning at all now), `npm run build:ghpages`,
  the full test suite, and a headless-Chromium pass covering About → Projects →
  `/projects/tajma` card-click navigation and the mobile hamburger menu (which exercises
  the Material animation now loaded async) — all correct, no console errors.

- [x] **D3. Dead code to delete:**
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

  Done 2026-09-24, with one standing exception: Stella wants unused copy kept for
  possible future reuse, not deleted, so the split was — delete genuinely codeless dead
  weight, keep anything carrying text.

  Removed: the `vertical-menu` component entirely (never referenced), its CSS note in
  `styles.css`, the now-fully-vestigial `.page-layout`/`<ng-content>` wrapper in
  `app.component.html` (its only other occupant, `vertical-menu`, was already gone), the
  unused `.spacer` rule, the duplicate `.card-text` rule, the unused `title` property, and
  the unused `panelOpenState` signal.

  Kept, per the standing rule: the three components' large commented-out markup blocks
  (real page copy), and `@Input() description` — it's the wiring for D4's per-project
  copy, not copy itself, but removing it would mean stripping the `[description]` binding
  from all 11 call sites too, which defeats reusing that copy later.

- [ ] **D4. Placeholder copy in live data** — `projects-data.ts:88` has
  `description: "DigiPost"` and `:134` has `"Theses project description"`. Currently
  invisible only because `description` is never rendered (see D3), so wiring that input
  up would ship placeholder text.

  Deliberately left open 2026-09-24 — writing real copy needs Stella's own words about
  those two projects, not something to fabricate. No user-facing impact today since
  nothing renders `description` (see D3). Revisit once real copy exists for both.

- [x] **D5. Import paths** — `import ... from 'src/app/...'` (absolute via `baseUrl`)
  mixed with relative imports. Add a `paths` alias like `@app/*` and use it consistently.

  Done 2026-09-24. Added `"@app/*": ["src/app/*"]` to `tsconfig.json`'s `paths` (inherited
  by `tsconfig.app.json`/`tsconfig.spec.json` via `extends`). Rewrote the 13 absolute
  `src/app/...` imports across 10 project components to `@app/...`. Relative imports
  elsewhere (e.g. `../projects-data`) are left as-is — those are short, same-directory-ish
  paths where relative reads fine; `@app` fixes the actual pain point, deep imports that
  used to need a `src/app/` prefix with no `../../..` climbing.

- [x] **D6. Direct DOM query instead of `viewChild`** —
  `src/app/about/about.component.ts:18` uses `document.querySelector('video')` in
  `ngAfterViewInit`, which grabs the first video anywhere on the page. Also: the
  autoplay loop ignores `prefers-reduced-motion`.

  Done 2026-09-24. Swapped for a signal `viewChild<ElementRef<HTMLVideoElement>>` bound
  to a new `#profileVideo` template ref, so it can only ever resolve this component's own
  video. Removed the declarative `autoplay` attribute (which fires before any JS runs,
  ignoring the media query) and instead call `.play()` from `ngAfterViewInit` only when
  `matchMedia('(prefers-reduced-motion: reduce)').matches` is false. Verified with a
  headless-Chromium check under both preferences: normal motion autoplays as before,
  reduced motion leaves the video paused on its first frame, no console errors either way.

- [x] **D7. Inconsistent template syntax** — `*ngFor` + `CommonModule` in `tabs` and
  `before-after` vs `@for` in `projects`.

  Done 2026-09-24. `before-after` turned out not to use `*ngFor`/`CommonModule` at all —
  the original note was stale, its only structural directives are `MatButtonToggleGroup`/
  `MatButtonToggle`/`FormsModule`. The real fix was `tabs.component.html`'s
  `*ngFor="let tab of tabs"` → `@for (tab of tabs; track tab.src)`, and dropping the
  now-unused `NgFor` import from `tabs.component.ts`. Verified with a headless-Chromium
  check of the one caller (g-force's 3-tab gallery): all 3 tab labels render, switching
  tabs shows the right image, no console errors.

- [x] **D8. Naming inconsistencies** — `digital_stewardship/` is snake_case among
  kebab-case siblings; `ImageTabsComponent` lives in `tabs/tabs.component.ts` with
  selector `app-image-tabs`; package name is still `my-app` and the Angular project
  is `myApp`.

  Done 2026-09-24. `git mv`'d `digital_stewardship/` → `digital-stewardship/` and
  `tabs/` → `image-tabs/` (all 4 files each, matching the component/selector names),
  updating every `templateUrl`/`styleUrl`/import that pointed at the old paths
  (`app-routing.module.ts`, `g-force.component.ts`, both specs). `package.json` name and
  the `angular.json` project key went `my-app`/`myApp` → `portfolio`, with the 3
  `buildTarget` references and the `dist/my-app` output path updated to match; `npm
  install` resynced `package-lock.json`'s name field. `README.md`'s stale "# MyApp"
  heading updated too. Verified with `ng build`, `npm run build:ghpages`, and the full
  test suite — all pass; build output now lands in `dist/portfolio`.

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
