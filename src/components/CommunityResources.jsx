import { useState } from 'react';
import './CommunityResources.css';

const POWER_APP_URL = 'https://apps.powerapps.com/play/e/default-84187be3-037e-41ec-889c-a150fe476432/a/142151a1-9bbb-4aa0-9088-74db496d85bf?tenantId=84187be3-037e-41ec-889c-a150fe476432&hint=4eeb7e48-46bb-42cb-bbcb-47f92007fa3f&sourcetime=1792569263308';

const MODULE_URL = '/documents/ccid-commercial-crime-module.pdf';

const news = [
  {
    id: 'kampar',
    date: '2026-10-20',
    dateLabel: '20 October 2026',
    title: 'A hotel-booking job offer ends in losses exceeding RM129,000',
    summary:
      'Malay Mail reports that a woman transferred money after receiving a supposed part-time hotel-booking offer. Promised repayments and commissions did not arrive.',
    takeaway:
      'Pause when a job requires you to finance tasks before receiving earnings.',
    source: 'Malay Mail / Bernama',
    url: 'https://www.malaymail.com/news/malaysia/2026/10/20/kampar-woman-loses-over-rm129000-in-online-job-scam/239918',
    lesson: 'pressure',
    lessonLabel: 'Practise recognising payment pressure',
  },
  {
    id: 'student',
    date: '2026-10-04',
    dateLabel: '4 October 2026',
    title: 'An online accounting offer exposes a student to account misuse',
    summary:
      'Malay Mail reports that a student received and forwarded funds through her bank and e-wallet accounts for a supposed online job. She received no promised pay and later discovered her bank account had been frozen.',
    takeaway:
      'A request to receive and forward strangers’ money through your personal account is a warning sign.',
    source: 'Malay Mail / The Borneo Post',
    url: 'https://www.malaymail.com/news/malaysia/2026/10/04/final-year-student-falls-for-rm100-a-day-accounting-job-that-turned-her-bank-account-into-a-mule-account/237609',
    lesson: 'identity',
    lessonLabel: 'Learn about protecting your account',
  },
];

function AwarenessVideo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="section" aria-labelledby="ucap-video-title">
      <p className="eyebrow">WATCH · REFLECT · PRACTISE</p>
      <h2 id="ucap-video-title">Learn from a real experience.</h2>
      <p>
        KISAH BENAR : MANGSA JOB SCAM #RMPTVDOKU 6 OGOS 2022
        <br />
        PDRM RMP TV Channel · Archive video, 2022
      </p>

      <div className="ucap-video-frame">
        {loaded ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/0TjY9CKh5-Q"
            title="KISAH BENAR: MANGSA JOB SCAM — PDRM RMP TV Channel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="ucap-video-placeholder">
            <span aria-hidden="true" className="ucap-play-symbol">
              ▶
            </span>
            <h3>A story worth pausing for.</h3>
            <p>
              Loading the player connects to YouTube. Its privacy policy
              applies.
            </p>
            <button
              type="button"
              className="button white"
              onClick={() => setLoaded(true)}
            >
              Load video player
            </button>
          </div>
        )}
      </div>

      <div className="actions ucap-resource-actions">
        <a
          className="text-link"
          href="https://www.youtube.com/watch?v=0TjY9CKh5-Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube ↗
        </a>
        <a className="text-link" href="#/learn/trust">
          Explore how scams build trust →
        </a>
      </div>

      <details className="card ucap-reflection">
        <summary>After watching: discuss these questions</summary>
        <ul>
          <li>What made the opportunity feel convincing?</li>
          <li>Which request would make you pause and verify?</li>
          <li>How could you support someone without blaming them?</li>
        </ul>
        <a className="text-link" href="#/game">
          Practise your decisions in The Offer →
        </a>
      </details>
    </section>
  );
}

function NewsCards() {
  return (
    <section className="section" aria-labelledby="ucap-news-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">REAL REPORTS · PRACTICAL LESSONS</p>
          <h2 id="ucap-news-title">From the news to your next decision.</h2>
        </div>
        <span className="badge">Curated articles · updated manually</span>
      </div>

      <div className="ucap-news-grid">
        {news.map((item) => (
          <article className="card ucap-news-card" key={item.id}>
            <p className="caption">
              {item.source} ·{' '}
              <time dateTime={item.date}>{item.dateLabel}</time>
            </p>

            <h3>{item.title}</h3>
            <p>{item.summary}</p>

            <div className="ucap-news-takeaway">
              <strong>A habit to practise</strong>
              <p>{item.takeaway}</p>
            </div>

            <div className="ucap-news-links">
              <a
                className="text-link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the original report ↗
              </a>
              <a className="text-link" href={`#/learn/${item.lesson}`}>
                {item.lessonLabel} →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="caption ucap-resource-actions">
        Summaries prepared for UCAP. Full reporting remains with the
        respective publishers.
      </p>
    </section>
  );
}

function PowerAppShowcase() {
  return (
    <section
      className="section ucap-app-showcase"
      aria-labelledby="ucap-app-title"
    >
      <div>
        <p className="eyebrow">UCAP ON MOBILE</p>
        <h2 id="ucap-app-title">A familiar starting point. In your pocket.</h2>
        <p>
          Explore the UCAP Power Apps companion: a mobile starting point
          for the website, awareness video and support shortcuts.
        </p>

        <ul>
          <li>Open the UCAP website from one place.</li>
          <li>Find the awareness video.</li>
          <li>Access emergency and support shortcuts.</li>
        </ul>

        <div className="actions">
          {POWER_APP_URL ? (
            <a
              className="button white"
              href={POWER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open UCAP in Power Apps ↗
            </a>
          ) : (
            <span className="badge light">
              App preview · access link coming soon
            </span>
          )}

          <a className="button outline-light" href="#/learn">
            Explore browser learning
          </a>
        </div>

        <p className="ucap-app-note">
          Power Apps access requires an authorised Microsoft account and
          the appropriate app permissions. Browser learning remains
          available here.
        </p>
      </div>

      <figure className="ucap-phone-figure">
        <div className="ucap-phone">
          <img
            src="/images/ucap-powerapp.jpg"
            width="439"
            height="777"
            alt="UCAP Power Apps screen showing website, awareness video and support shortcuts"
            loading="lazy"
          />
        </div>
        <figcaption>
          PowerApp screen preview
          <br />
          <a
            href="/images/ucap-powerapp.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full-size screenshot ↗
          </a>
        </figcaption>
      </figure>
    </section>
  );
}

export function HomeResources() {
  return (
    <>
      <AwarenessVideo />
      <NewsCards />
      <PowerAppShowcase />
    </>
  );
}

export function ModuleResources() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [page, setPage] = useState(20);
  const [answer, setAnswer] = useState(null);

  const answers = [
    'Continue because the company name looks familiar.',
    'Pause and verify independently before paying or sharing account access.',
    'Pay a smaller amount first to test whether the job is real.',
  ];

  return (
    <section className="section" aria-labelledby="ucap-module-title">
      <p className="eyebrow">READ · APPLY · REVISIT</p>
      <h2 id="ucap-module-title">Explore the commercial crime module.</h2>
      <p>
        Current Trends in Commercial Crimes — an awareness module from
        the Royal Malaysia Police and Universiti Teknologi PETRONAS.
        Start with the sections most relevant to recruitment scams.
      </p>

      <div className="grid three">
        <article className="card">
          <span className="badge">Job scams · printed page 17</span>
          <h3 className="ucap-resource-heading">Examine the request.</h3>
          <p>
            Fake recruitment can lead to demands for registration,
            training or equipment payments, or requests for sensitive
            personal information.
          </p>
          <a className="text-link" href="#/learn/pressure">
            Practise spotting payment pressure →
          </a>
        </article>

        <article className="card">
          <span className="badge">Mule accounts · printed pages 4–5</span>
          <h3 className="ucap-resource-heading">Protect account control.</h3>
          <p>
            Be wary of work that pays you to move other people’s money.
            Keep banking credentials private and do not hand over
            control of your account.
          </p>
          <a className="text-link" href="#/learn/identity">
            Review account protection →
          </a>
        </article>

        <article className="card">
          <span className="badge">Phishing · printed pages 9–10</span>
          <h3 className="ucap-resource-heading">Check beyond the link.</h3>
          <p>
            Messages can direct you to imitation websites or unfamiliar
            applications. Verify the sender and destination through
            independently found channels.
          </p>
          <a className="text-link" href="#/learn/verify">
            Practise independent verification →
          </a>
        </article>
      </div>

      <div className="card ucap-module-panel">
        <h3>Read the source material</h3>
        <p className="caption">
          24 PDF pages · approximately 12.9 MB. PDF page numbers include
          the cover and introductory pages.
        </p>

        <label className="field" htmlFor="ucap-module-section">
          Choose a section
          <select
            id="ucap-module-section"
            value={page}
            onChange={(event) => setPage(Number(event.target.value))}
          >
            <option value={20}>Job scams — PDF page 20 / printed 17</option>
            <option value={7}>Mule accounts — PDF page 7 / printed 4</option>
            <option value={12}>Phishing — PDF page 12 / printed 9</option>
            <option value={23}>NSRC — PDF page 23 / printed 20</option>
            <option value={1}>Read from the beginning</option>
          </select>
        </label>

        <div className="actions">
          <button
            type="button"
            className="button primary"
            aria-expanded={viewerOpen}
            onClick={() => setViewerOpen(!viewerOpen)}
          >
            {viewerOpen ? 'Close module viewer' : 'Read module here'}
          </button>

          <a
            className="button secondary"
            href={`${MODULE_URL}#page=${page}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF in a new tab ↗
          </a>

          <a className="text-link" href={MODULE_URL} download>
            Download module
          </a>
        </div>

        {viewerOpen && (
          <iframe
            key={page}
            className="ucap-pdf-viewer"
            src={`${MODULE_URL}#page=${page}`}
            title="Current Trends in Commercial Crimes awareness module"
          />
        )}

        <p className="caption ucap-resource-actions">
          If the viewer or page selection is unsupported on your device,
          open or download the PDF. The notes above provide a text
          introduction to the relevant topics.
        </p>
      </div>

      <div className="card ucap-module-panel">
        <p className="eyebrow">APPLY WHAT YOU READ</p>
        <h3>
          A recruiter asks for a training payment and access to your new
          bank account. What should you do first?
        </h3>

        {answers.map((text, index) => (
          <button
            key={text}
            type="button"
            className={`answer ${answer === index ? 'selected' : ''}`}
            aria-pressed={answer === index}
            onClick={() => setAnswer(index)}
          >
            {text}
          </button>
        ))}

        <div aria-live="polite">
          {answer !== null && (
            <p
              className={`notice ${
                answer === 1 ? 'success' : 'warning'
              }`}
            >
              {answer === 1
                ? 'Correct. Independently verify the opportunity and keep control of your banking access. A convincing name does not verify a recruiter.'
                : 'Try again. A familiar name or a small trial payment does not establish that an opportunity is legitimate.'}
            </p>
          )}
        </div>

        <p className="caption">
          Supplementary practice; this question does not change your
          five-lesson completion count.
        </p>
      </div>

      <p className="caption ucap-resource-actions">
        Teaching notes and practice question adapted for UCAP from the
        supplied module. Attribution identifies the source; UCAP remains
        a student-build prototype.
      </p>
    </section>
  );
}