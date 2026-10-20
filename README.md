# UCAP — Stitch-inspired browser prototype

Version 0.2.0 · UTP Cyber Smart Competition 2026

A React application adapted from the supplied Stitch screens. Brand colours are screen approximations of the supplied UTP Pantone colours. The UCAP mark is a project mark, not a recreation of the UTP crest.

## Update your existing VS Code project (recommended)

Your original React + Vite project already builds. Preserve its tested dependency versions and ESLint configuration.

1. Stop the development server using Ctrl+C.
2. Make a copy of your existing project folder, excluding `node_modules` if convenient, or commit your current work to Git.
3. Extract this ZIP to a separate folder. Open its `ucap-stitch` folder.
4. In your existing project, replace `src` with this package's `src` folder. Replace the root `index.html`. Copy `public/favicon.svg` into your `public` folder. Copy `tests` into the project root. Do not paste the Stitch HTML files over React source files.
5. Keep your existing `package.json`, `package-lock.json`, `vite.config.*` and `eslint.config.*`. This update needs only one additional runtime dependency.
6. In the VS Code terminal, inside your existing project folder, run:

```powershell
npm.cmd install tesseract.js@7.0.0
npm.cmd run dev
```

7. Open the local address printed by Vite. The browser routes use hashes, such as `/#/learn`, so Back, Forward and refresh work without server rewrite configuration.
8. Run these checks in a second terminal:

```powershell
node --test tests/*.test.js
npm.cmd run lint
npm.cmd run build
```

No changes to `main.jsx` or `App.jsx` beyond copying the supplied `src` folder are needed. The old `App.css` and Vite assets are not used.

## Start separately

If you prefer a separate project, open this `ucap-stitch` folder in VS Code, use Node.js 24 LTS, and run:

```powershell
npm.cmd install
npm.cmd run dev
```

The supplied standalone dependency manifest has not been installed or production-built in the authoring environment because npm registry access was blocked. The recommended update path above retains the versions already working on your computer. A local install creates the lockfile; commit it for repeatable builds.

## What works

| Area | Implemented behaviour |
| --- | --- |
| Navigation | Five main pages, hash routes, browser history, keyboard focus handling, mobile CSS |
| Home | Connected calls to action, real progress, CSS-animated explainer with pause and transcript, curated official links |
| Learn | Five lessons, explanations, knowledge checks, completion tracking, repeatable verification challenge |
| Game | Two fictional branching stories: a task-scam offer and a plausible interview invitation; decision recap and replay |
| Scan | Local text-pattern checks with evidence, basic URL structure checks without visiting URLs, screenshot preview and optional English OCR |
| Library | Four fictional cases, search, category filtering, indicator table, case details, contribution form |
| Demo review | In-memory queue, manual public-summary preparation, publication back to Library, editing and archiving |
| SOS | Five situations, guidance, evidence reminders, print action, official links, confirmed hand-off to real `tel:997` dialler |
| Progress | Completed lesson IDs, challenge completion and game-run count persisted locally; reset control |

## Explicit limits

- This is an interactive frontend prototype, not a deployed reporting service or official UTP service.
- The scanner is a transparent rule-based demonstration, not a trained or validated AI scam classifier. It may miss scams and misread legitimate content. No probabilities are invented.
- URL checks parse structure only. No page fetch, redirect expansion, DNS check, malware scan or reputation lookup occurs.
- Screenshot OCR reads text, not image authenticity or scam probability. Review extracted text before analysis. English recognition may misread Malay or mixed-language messages.
- Tesseract.js downloads worker/core/language assets when needed. Internet access is required for the initial download. The browser processes image content locally. Third-party asset hosts receive normal request metadata. A timeout or network error leaves manual transcription available.
- Basic message, lesson, game and case flows do not require an external service once the app is loaded. This is not a fully offline-installable PWA.
- Sources are curated links, not a live news API. Semak Mule and Penipu.my open externally; no API integration or live police match is claimed.
- New reports remain in React state in this browser tab. Refreshing clears them. Use fictional material only.
- The demo reviewer is public, without authentication. Hiding this route would not secure it. Before real use, add authentication, server-side authorisation, private evidence storage, retention rules, audit records and a staffed review process.
- No evidence-upload feature is provided for reports in this release; an actual shared evidence workflow needs private storage and access controls. Screenshots can be selected locally in Scan.
- UI language is English. A complete BM translation has not been implemented; there is no non-functional language toggle.
- No API keys, university support numbers, accreditation claims or disciplinary guarantees are invented.

## A six-minute demonstration

1. **Home:** introduce Pause / Verify / Act. Show the example recruiter message and the first explainer scene.
2. **Learn:** open “Verify a recruiter independently”, answer the question, and return to see progress change.
3. **Game:** play “The Offer”. Choose “Accept immediately”, then “Pay RM300”, then “Stop, keep evidence, and contact my bank or 997”. Discuss recovery from earlier decisions without blame. Contrast with “The Interview”, where independent confirmation supports proceeding.
4. **Scan:** load the fictional message example. Show matched evidence, uncertainty, and the lesson link. Check `https://careers.example/jobs` to show that zero matches still means unverified.
5. **Library:** search “deposit”. Create a fictional submission, open the demo reviewer, write an anonymised summary and takeaway, publish it, and return to the Library. Refresh only after this segment; reports are memory-only.
6. **SOS:** switch between money and credentials. Show the evidence reminders and call-confirmation dialog. Do not place a real emergency call during the demo.
7. **Reset:** use the footer's Reset demonstration action before the next presentation.

## Test checklist on your computer

- Home renders without console errors at desktop width and at 390 px and 320 px.
- All navigation links work; Back, Forward and refresh preserve the selected route.
- Tab navigation shows a visible focus indicator; a dialog traps focus, Escape closes it, and focus returns to its trigger.
- Incorrect lesson answers provide feedback without marking complete. Correct answers update progress once. Refresh retains completion.
- Explore both story scenarios, replay, pause and exit. All paths end in feedback.
- Scan the fictional example, a routine interview invitation, a URL containing user information before `@`, and an unsupported URL scheme such as `javascript:`.
- Choose a PNG, attempt OCR while online, correct the transcription, and scan. Try without network access to check error recovery. Oversized files and unsupported formats must be rejected.
- Create a fictional report, publish a manually edited summary, then archive it. Refresh clears the report queue, while learning progress remains.
- On SOS, switching situations changes the steps. Printing shows guidance; the Call 997 button opens confirmation before the dialler link.
- Reset clears only UCAP's learning key and this tab's reports.

## Validation completed during authoring

All 13 JavaScript/JSX source files were parsed with Babel. Eleven Node tests pass: specific text evidence, an ordinary recruitment message, direct negation, basic Malay cues, unsafe URL schemes, misleading URL user information, zero-match results, short links, corrupt progress recovery, complete story-graph traversal, and lesson/case references.

Production build, ESLint, browser rendering, mobile layout and live OCR were not executed in the authoring environment: npm registry requests returned HTTP 403 and a Chromium executable was unavailable. Run the local checks above before presenting. The CSS and interactions are implemented, but visual QA is still required.

## File map

| File | Responsibility |
| --- | --- |
| `src/App.jsx` | Routing, shared navigation/footer, progress, session reports, error boundary |
| `src/index.css` | UTP-themed tokens, layouts, responsive and print styling |
| `src/components/UI.jsx` | Shared buttons, badges, notices, icons, dialogs, animated explainer |
| `src/pages/Home.jsx` | Homepage |
| `src/pages/Learn.jsx` | Learning hub and lesson detail |
| `src/pages/Game.jsx` | Story player and reflection |
| `src/pages/Scan.jsx` | Message, URL, screenshot and OCR flows |
| `src/pages/Library.jsx` | Cases, indicators, submissions and demo moderation |
| `src/pages/SOS.jsx` | Situation-based response guidance |
| `src/data/content.js` | Lessons, examples, cases, explainer and source links |
| `src/data/story.js` | Branching story definitions |
| `src/lib/scan.js` | Deterministic text/URL checks |
| `src/lib/progress.js` | Defensive progress parsing |
| `tests/core.test.js` | Repeatable logic checks |

## Design changes from Stitch

- Restored readable headings and a consistent grid; reduced dense institutional language.
- Kept blue #002855 and gold #AF6D04 as supplied screen approximations.
- Uses local system fonts, local SVG icons, CSS illustrations and no stock-photo dependencies. The Inter font is used if installed, then Segoe UI/Arial fallback.
- Removed unsupported “accredited”, “UTP SOC”, “live telemetry”, automated anonymisation, policy guarantees and fake progress claims.
- Removed invented campus and bank contacts and arbitrary reporting deadlines.
- Updated NSRC hours using PDRM's recent 24-hour guidance rather than the older hours in the generated screens.
- Replaced probability-style scan gauges with observed evidence and explicit limitations.
- Kept urgent help unlocked and accessible without login or lesson completion.
- Separated the demonstrator review workspace from the main Library view, with explicit public-demo labelling.

## Sources and maintenance

Reviewed 21 October 2026. Review again before public release and whenever guidance changes.

- PDRM, 26 May 2026, NSRC 997 operates 24 hours: https://www.rmp.gov.my/news-detail/2026/05/26/besmartstayalert-letsfightscammertogether-posting-pilihan-kena-tipu-jangan-panik-hubungi-nsrc-997!-(23.05.2026)
- NFCC, immediate bank/NSRC contact and response context: https://nfcc.jpm.gov.my/index.php/en/about-nsrc — this older page lists different hours; the interface uses the recent PDRM announcement.
- Official Semak Mule portal: https://semakmule.rmp.gov.my/
- MyCERT Cyber999 reporting channels: https://www.mycert.org.my/cyber999
- Penipu.my, community resource, not a police authority: https://penipu.my/
- Tesseract.js: https://github.com/naptha/tesseract.js
- Vite setup documentation: https://vite.dev/guide/

## Next integration milestone

After local UI verification: agree the hosting/backend architecture, add an evaluated AI-assisted analysis service, confirm external API terms/access, provide private authenticated reporting and reviewer access, curate and date news content, translate the complete interface into BM, and pilot retention of safer decision-making with UTP users. Never place provider API keys in browser code or `VITE_*` variables.
