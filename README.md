# UCAP — UTP Cybersecurity Awareness Platform

**Pause. Verify. Act.**

A **student-build prototype** providing browser-based job scam awareness for the **Universiti Teknologi PETRONAS (UTP) community**, developed for the **UTP Cyber Smart Challenge 2026**.

UCAP connects practical checks, short lessons, interactive stories, community learning and response guidance to help students and staff make safer decisions about job, internship and side-income opportunities.

**[Explore the live demo](https://utp-cyberawareness-platform.vercel.app/)**

> Student-build prototype. UCAP is not an official UTP service or an emergency-response service. Its scanner uses local rule-based checks. It does not verify a recruiter, visit scanned websites or guarantee that a job offer is genuine. No API key is required.

## The problem UCAP addresses

Recruitment messages can combine convincing branding, attractive earnings and time pressure. Recognising a warning sign is only part of the challenge: someone also needs to know how to verify an offer, practise a safer response and find help when something has already happened.

UCAP brings these steps into one learning experience. Its goal is to make independent verification and timely help-seeking everyday habits across the UTP community.

## The solution: Detect, Educate, Respond

| Pillar | What UCAP provides | Habit it aims to develop |
| --- | --- | --- |
| **Detect** | Message-pattern checks, URL-structure checks and screenshot text extraction, with suggested next steps | Pause and investigate before paying, sharing details or following instructions |
| **Educate** | Five short lessons, knowledge checks, verification tips, CCID module resources, awareness videos and branching story games | Recognise manipulation and practise independent verification |
| **Respond** | Situation-based SOS guidance, evidence reminders and links to support channels, including NSRC 997 | Seek appropriate help and take the next useful action without shame |
| **Community learning** | Searchable fictional cases and a demonstration submission, review and publication workflow | Share useful patterns while protecting personal information |

## Explore the prototype

| Area | Working features |
| --- | --- |
| **Home** | Introduction to Pause–Verify–Act, animated explainer, PDRM YouTube video, two curated news cards, Power Apps showcase, learning progress and official resource links |
| **Learn & Play** | Five lessons with feedback, contextual verification tips, CCID teaching notes and supplementary question, on-demand PDF viewer, a repeatable challenge and locally saved progress |
| **Story games** | “The Offer” explores a task-scam scenario; “The Interview” explores independent verification of a plausible recruitment invitation. Both support reflection and replay |
| **Scan** | Local message and URL checks, screenshot preview and English OCR; findings link to relevant lessons |
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

1. **Home:** introduce UCAP’s purpose, show the video option, connect a news report to a lesson and preview the Power Apps companion.
2. **Scan:** load a fictional message for local checks. Try a fictional URL and explain the structure-based findings. Highlight that no website is visited and no matching patterns does not establish safety.
3. **Learn & Play:** follow a related lesson, discuss the verification tips, open the CCID job-scam section and explore a story decision.
4. **Library:** submit a fictional experience, open the demo review workspace, prepare a non-identifying summary and publish it back to the Library.
5. **SOS:** switch between situations and show the evidence checklist and call-confirmation dialog. Close the dialog without placing a real call.
6. Use **Reset demonstration** in the footer before the next presentation.

## Current scope and data handling

This release is a **student-build prototype** with a React frontend and browser-based checks. It has no shared reporting database or live emergency-response service.

- **Local scanning:** deterministic rules may miss scams or flag legitimate content. Local URL checks parse structure without visiting websites. No matching patterns does not mean an offer is safe.
- **Screenshot OCR:** extracts text rather than assessing image authenticity. Review the transcription before checking it. Images are processed in the browser; OCR software and language assets download from third-party hosts, which receive normal request metadata. Manual text entry remains available.
- **Learning progress:** lesson completion, challenge completion and game-run count are saved in this browser’s local storage.
- **Scan content:** held temporarily in browser state and cleared when leaving Scan. UCAP does not send message text, scanned URLs or uploaded images to a scanning service.
- **Community submissions:** use fictional information only. Submissions exist in the current tab’s memory and disappear on refresh. The review workspace is public and unauthenticated; anonymisation is manual.
- **External services:** Semak Mule and Penipu.my are external links. There is no police database connection, live news API, AI service or automatic report submission to a bank or authority.
- **Media and learning resources:** YouTube loads on request using its privacy-enhanced player; it still connects to Google. The CCID PDF is publicly downloadable and loads in the viewer on demand. News cards are manually curated summaries with publisher attribution, not RSS. Power Apps opens a separate Microsoft-hosted app whose sharing permissions and licensing apply; browser progress is not synchronised with it.
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
node --test tests/*.test.js
npm run lint
npm run build
npm run preview
```

The build output is `dist/`. The live prototype is hosted on Vercel. Routes use URL hashes, such as `/#/learn`.

## Evidence and learning design

Local URL checks inspect address structure only. They do not expand redirects, inspect page content, query reputation databases or establish recruiter identity. Findings are prompts for independent verification, not a safety verdict.

The JobScamScore guide is further reading, not an integrated scoring service. UCAP does not copy its severity rankings or treat a free email address, a new profile, a missing vacancy listing or polished writing as proof of fraud. Learning notes use independent verification, the supplied CCID module and FTC job-scam guidance. US examples are teaching references; UCAP's Malaysian response guidance remains separate.

## Validation

The local-only update passed the 11 existing Node tests covering scanner behaviour, progress recovery and content/story consistency. Run lint and a production build in the full project, then check the interface in a browser before deployment. Passing tests does not establish scam-detection accuracy.

## Technical overview

**React · Vite · JavaScript · CSS · Tesseract.js · ESLint · Vercel hosting**

| Location | Purpose |
| --- | --- |
| `src/App.jsx` | Navigation, hash routing, shared layout, progress and temporary submissions |
| `src/pages/` | Home, learning, games, scanning, Library, demo review and SOS |
| `src/components/UI.jsx` | Reusable controls, dialogs, icons and animated explainer |
| `src/components/CommunityResources.jsx` | YouTube, curated news, Power Apps showcase and CCID viewer |
| `src/components/VerificationTips.jsx` | Contextual warning signs with related lessons |
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
- Measure whether users retain safer verification and response behaviours over time.

## External resources

- [Semak Mule — PDRM](https://semakmule.rmp.gov.my/)
- [National Scam Response Centre — NFCC](https://nfcc.jpm.gov.my/index.php/en/about-nsrc)
- [Cyber999 — MyCERT](https://www.mycert.org.my/cyber999)
- [Penipu.my — community resource](https://penipu.my/)
- [FTC job-scam guidance](https://consumer.ftc.gov/articles/job-scams)
- [JobScamScore red-flag guide — independent further reading](https://jobscamscore.com/guides/job-scam-red-flags)
- [CCID commercial crime module](public/documents/ccid-commercial-crime-module.pdf)
- [PDRM RMP TV awareness video](https://www.youtube.com/watch?v=0TjY9CKh5-Q)

External resources operate independently of UCAP. Review current official guidance when maintaining response content.
