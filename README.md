# UCAP — UTP Cybersecurity Awareness Platform

**Pause. Verify. Act.**

A browser-based job scam awareness prototype for the **Universiti Teknologi PETRONAS (UTP) community**, developed for the **UTP Cyber Smart Competition 2026**.

UCAP connects practical checks, short lessons, interactive stories, community learning and response guidance to help students and staff make safer decisions about job, internship and side-income opportunities.

**[Explore the live demo](https://utp-cyberawareness-platform.vercel.app/)**

> Student competition prototype. UCAP is not an official UTP service or an emergency-response service. Its scanner demonstrates local rule-based checks, not a trained AI scam detector.

## The problem UCAP addresses

Recruitment messages can combine convincing branding, attractive earnings and time pressure. Recognising a warning sign is only part of the challenge: someone also needs to know how to verify an offer, practise a safer response and find help when something has already happened.

UCAP brings these steps into one learning experience. Its goal is to make independent verification and timely help-seeking everyday habits across the UTP community.

## The solution: Detect, Educate, Respond

| Pillar | What UCAP provides | Habit it aims to develop |
| --- | --- | --- |
| **Detect** | Message-pattern checks, URL-structure checks and screenshot text extraction, with evidence and suggested next steps | Pause and investigate before paying, sharing details or following instructions |
| **Educate** | Five short lessons, knowledge checks, an animated explainer and branching story games | Recognise manipulation and practise independent verification |
| **Respond** | Situation-based SOS guidance, evidence reminders and links to support channels, including NSRC 997 | Seek appropriate help and take the next useful action without shame |
| **Community learning** | Searchable fictional cases and a demonstration submission, review and publication workflow | Share useful patterns while protecting personal information |

## Explore the prototype

| Area | Working features |
| --- | --- |
| **Home** | Introduction to Pause–Verify–Act, animated explainer with transcript, learning progress and curated resource links |
| **Learn & Play** | Five lessons with feedback, a repeatable verification challenge and locally saved progress |
| **Story games** | “The Offer” explores a task-scam scenario; “The Interview” explores independent verification of a plausible recruitment invitation. Both support reflection and replay |
| **Scan** | Message checks, URL parsing, screenshot preview and optional English OCR through Tesseract.js; findings explain the matched evidence and link to related lessons |
| **Library** | Four fictional cases, search, category filters, demonstration indicators and a fictional contribution form |
| **Demo review workspace** | Manual preparation of an anonymised teaching summary, publication to the local Library, editing and archiving |
| **SOS** | Guidance for money loss, credential disclosure, suspicious apps, suspicious offers and uncertainty; evidence checklist, printing and confirmation before opening the real 997 dialler |

## Building a sustainable culture of safer digital practice

UCAP is designed around a repeatable learning cycle: **recognise a concern → understand the warning signs → practise verification → take appropriate action → share a useful lesson**.

- **Learning at the point of need:** scan findings link directly to relevant lessons and response guidance.
- **Practice beyond a single visit:** short lessons, replayable stories and a return-to-practice challenge give users reasons to revisit their decisions.
- **Progress without public ranking:** learning progress stays in the browser, supporting individual practice without exposing performance.
- **Support without blame:** story feedback and SOS guidance help users recover from earlier decisions and ask for help.
- **Shared learning with care:** the Library demonstrates reviewing an experience for its practical takeaway before publishing an anonymised summary.

These are intended benefits, not measured outcomes. A sustainable campus rollout would also need a named content owner, regular guidance reviews, refreshed scenarios and participation from UTP students and staff. A future pilot should assess decisions on unfamiliar scenarios and retention over time, alongside usability and engagement.

## Suggested demonstration

1. **Home:** introduce UCAP’s purpose and show the animated explainer.
2. **Scan:** load a fictional message and explain the evidence, uncertainty and suggested next steps.
3. **Learn & Play:** follow a related lesson, answer its question and explore a story decision.
4. **Library:** submit a fictional experience, open the demo review workspace, prepare a non-identifying summary and publish it back to the Library.
5. **SOS:** switch between situations and show the evidence checklist and call-confirmation dialog. Close the dialog without placing a real call.
6. Use **Reset demonstration** in the footer before the next presentation.

## Current scope and data handling

This release is a deployed **frontend prototype** with no shared backend or reporting service.

- **Scanning:** deterministic rules may miss scams or flag legitimate content. No matching patterns does not mean an offer is safe. URL checks do not visit websites, follow redirects or query malware/reputation databases.
- **Screenshot OCR:** extracts text rather than assessing image authenticity. Review the transcription before checking it. Images are processed in the browser; OCR software and language assets download from third-party hosts, which receive normal request metadata. Manual text entry remains available.
- **Learning progress:** lesson completion, challenge completion and game-run count are saved in this browser’s local storage.
- **Scan content:** held temporarily on the Scan page and not saved after leaving it.
- **Community submissions:** use fictional information only. Submissions exist in the current tab’s memory and disappear on refresh. The review workspace is public and unauthenticated; anonymisation is manual.
- **External services:** Semak Mule and Penipu.my are external links. There is no police database connection, live news API, AI service or automatic report submission to a bank or authority.
- **Language:** the interface is English. Some message patterns cover Bahasa Melayu; a complete bilingual interface is planned.

## Run locally

Use Node.js 24 and npm. In the VS Code terminal:

```bash
git clone https://github.com/syedmuhdhafidz/ucap.git
cd ucap
npm ci
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution restrictions prevent npm from running.

Run the existing checks and create a production build:

```bash
node --test tests/core.test.js
npm run lint
npm run build
npm run preview
```

The build output is `dist/`. The live prototype is hosted on Vercel. Routes use URL hashes, such as `/#/learn`.

## Technical overview

**React · Vite · JavaScript · CSS · Tesseract.js · ESLint**

| Location | Purpose |
| --- | --- |
| `src/App.jsx` | Navigation, hash routing, shared layout, progress and temporary submissions |
| `src/pages/` | Home, learning, games, scanning, Library, demo review and SOS |
| `src/components/UI.jsx` | Reusable controls, dialogs, icons and animated explainer |
| `src/data/` | Lessons, fictional cases, source links and branching stories |
| `src/lib/` | Rule-based scanning and progress parsing |
| `src/index.css` | Theme, responsive layout and print styles |
| `tests/core.test.js` | Checks for scanner behaviour, progress recovery and content/story consistency |

The interface uses blue `#002855` and gold `#AF6D04` as screen approximations of the supplied UTP Pantone colours. The UCAP mark is a project identity, not the official UTP crest.

## Proposed next steps

- Evaluate the prototype with UTP students and staff, including mobile and keyboard usability.
- Assign content ownership and establish a review schedule for lessons, scenarios and support links.
- Add complete English/Bahasa Melayu content and regularly refreshed practice scenarios.
- Develop authenticated reporting and reviewer access, private evidence storage, retention controls and audit records before accepting real submissions.
- Evaluate AI-assisted analysis against representative scam and legitimate messages before integration; keep provider secrets on a backend.
- Confirm permissions and availability for external data integrations before connecting them.
- Measure whether users retain safer verification and response behaviours over time.

## External resources

- [Semak Mule — PDRM](https://semakmule.rmp.gov.my/)
- [National Scam Response Centre — NFCC](https://nfcc.jpm.gov.my/index.php/en/about-nsrc)
- [Cyber999 — MyCERT](https://www.mycert.org.my/cyber999)
- [Penipu.my — community resource](https://penipu.my/)

External resources operate independently of UCAP. Review current official guidance when maintaining response content.
