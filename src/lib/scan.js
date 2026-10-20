const rules = [
  {id:'payment',title:'Payment linked to starting work',pattern:/(?:pay|transfer|send|bayar|hantar)\s+(?:a\s+)?(?:rm\s*)?\d[\d,.]*\s*(?:activation|registration|verification|release|processing|deposit|fee|yuran)?|(?:activation|registration|release|processing)\s+fee|(?:bayar|buat)\s+(?:deposit|yuran)/i,why:'Upfront fees and deposits linked to promised work or withdrawals deserve scrutiny. The surrounding context matters.',action:'Pause payments and confirm the vacancy independently.',lesson:'pressure'},
  {id:'urgency',title:'Pressure to act quickly',pattern:/act now|only \d+ minutes|within \d+ minutes|last chance|pay immediately|segera|masa terhad|\d+ minit/i,why:'Urgency can make independent checking feel difficult.',action:'Take time to verify. Do not let a deadline replace evidence.',lesson:'pressure'},
  {id:'secret',title:'A request involving credentials',pattern:/(?:send|share|provide|give|hantar|kongsi|beri)\s+(?:us\s+)?(?:your\s+|the\s+)?(?:otp|tac|password|pin\b|kata laluan|kod otp)/i,why:'Passwords, PINs and one-time codes can give access to your accounts.',action:'Do not share authentication secrets. If already shared, use the SOS guidance.',lesson:'identity'},
  {id:'money',title:'Personal account used to move money',pattern:/receive.{0,45}(?:forward|transfer)|rent.{0,20}(?:bank|account)|use your (?:bank )?account|sewa.{0,20}akaun|terima.{0,35}pindah/i,why:'Receiving and forwarding funds for strangers can expose you to financial fraud.',action:'Decline the arrangement. If already involved, contact your bank.',lesson:'identity'},
  {id:'reward',title:'Attractive daily earnings',pattern:/earn\s+rm\s*\d+[\d,]*(?:\s+(?:per|a))?\s*day|rm\s*\d+[\d,]*\s*(?:\/\s*day|sehari)/i,why:'High advertised earnings are not proof of fraud, but should be checked against the actual work and employer.',action:'Verify the job details, contract, and employer independently.',lesson:'trust'},
  {id:'app',title:'An unfamiliar app or installation request',pattern:/install.{0,45}(?:apk|app)|download.{0,30}apk|pasang.{0,25}aplikasi/i,why:'Unverified software may request access to sensitive data or accounts.',action:'Verify the software and its permissions before installing.',lesson:'respond'},
];
export function analyseText(value) {
  const text = String(value).slice(0,15000);
  return rules.flatMap(({pattern,...rule}) => {
    const match=pattern.exec(text);
    if(!match) return [];
    const before=text.slice(Math.max(0,match.index-30),match.index);
    // Basic negation guard; not a semantic classifier.
    if(/(?:do not|don't|never|no need to|jangan)\s*$/i.test(before)) return [];
    return [{...rule,evidence:text.slice(Math.max(0,match.index-35),Math.min(text.length,match.index+match[0].length+75)).trim()}];
  });
}
export function analyseUrl(raw) {
  const input=raw.trim();
  if(!input || /\s/.test(input)) throw new Error('Enter one complete website address without spaces.');
  const url=new URL(/^[a-z][a-z\d+.-]*:/i.test(input)?input:`https://${input}`);
  if(!['http:','https:'].includes(url.protocol) || !url.hostname.includes('.')) throw new Error('Use a valid HTTP or HTTPS website address.');
  const findings=[];
  const add=(id,title,why,evidence)=>findings.push({id,title,why,evidence,action:'Find the employer’s official website independently and confirm the specific vacancy.',lesson:'verify'});
  if(url.protocol==='http:') add('http','Unencrypted HTTP address','HTTP does not encrypt the connection. HTTPS alone would still not prove legitimacy.',url.origin);
  if(url.username||url.password) add('userinfo','Misleading information before the hostname','Text before @ is not the destination website.',url.hostname);
  if(['bit.ly','tinyurl.com','t.co','shorturl.at'].includes(url.hostname.toLowerCase())) add('short','The address hides its final destination','A short link makes the actual destination harder to assess. This tool does not expand links.',url.hostname);
  if(url.hostname.includes('xn--')) add('idn','Internationalised domain encoding','This may be legitimate, but lookalike characters can make addresses confusing.',url.hostname);
  if(/^(\d{1,3}\.){3}\d{1,3}$/.test(url.hostname)) add('ip','A numeric address','A numeric address makes the organisation behind the link harder to identify.',url.hostname);
  return {hostname:url.hostname,findings};
}
