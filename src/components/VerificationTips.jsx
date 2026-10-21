const tips = [
  ['Pay before earning?', 'A deposit to unlock tasks or release earnings deserves a pause. Do not let earlier payments push you into another transfer.', 'pressure'],
  ['Receive and forward money?', 'Keep control of your account. A supposed job that routes strangers’ funds through your personal banking needs urgent scrutiny.', 'identity'],
  ['A convincing recruiter?', 'Check the precise employer domain and confirm the person through independently found company contacts. A logo or polished profile is not verification.', 'verify'],
  ['A rushed offer?', 'Ask for clear duties, pay and hiring steps. Take time to consult someone you trust before sharing information or making a commitment.', 'trust'],
  ['Documents or an unfamiliar app?', 'Verify the recipient, purpose and submission channel before sharing sensitive records or installing software.', 'identity'],
  ['A reassuring scan result?', 'Local checks cannot confirm job legitimacy. No matching warning patterns does not mean an offer is safe. Verify the employer and recruiter independently before acting.', 'verify'],
];

export default function VerificationTips() {
  return <section className="section" aria-labelledby="verification-tips-title">
    <p className="eyebrow">NOTICE THE REQUEST · CHECK THE CONTEXT</p>
    <h2 id="verification-tips-title">Warning signs are prompts to investigate.</h2>
    <p>A free email account, a new profile, an absent vacancy listing or polished wording alone does not prove fraud. Equally, a video interview or professional website does not prove legitimacy.</p>
    <div className="grid three">{tips.map(([title, description, lesson]) => <article className="card" key={title}>
      <h3>{title}</h3><p>{description}</p>
      <a className="text-link" href={`#/learn/${lesson}`}>Practise the related skill →</a>
    </article>)}</div>
    <p className="caption" style={{ marginTop: 18 }}>UCAP teaching notes informed by the supplied CCID module and <a href="https://consumer.ftc.gov/articles/job-scams" target="_blank" rel="noopener noreferrer">FTC job-scam guidance</a>. Further reading: <a href="https://jobscamscore.com/guides/job-scam-red-flags" target="_blank" rel="noopener noreferrer">JobScamScore’s independent guide</a>. External sources do not endorse UCAP.</p>
  </section>;
}
