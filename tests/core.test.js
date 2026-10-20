import test from 'node:test';
import assert from 'node:assert/strict';
import { analyseText, analyseUrl } from '../src/lib/scan.js';
import { parseProgress } from '../src/lib/progress.js';
import { lessons, cases, exampleMessage } from '../src/data/content.js';
import { story } from '../src/data/story.js';

test('fictional offer exposes specific evidence and relevant lessons',()=>{
  const findings=analyseText(exampleMessage);
  for(const id of ['payment','urgency','secret','reward'])assert.ok(findings.some(f=>f.id===id),id);
  for(const f of findings){assert.ok(exampleMessage.includes(f.evidence));assert.ok(lessons.some(l=>l.id===f.lesson));}
});
test('ordinary recruitment invitation is not automatically called fraudulent',()=>{
  assert.deepEqual(analyseText('Thank you for applying. Please confirm whether you are available for an interview next Tuesday.'),[]);
});
test('directly negated credential instruction does not flag disclosure',()=>{
  assert.equal(analyseText('Never share your OTP with a recruiter.').some(f=>f.id==='secret'),false);
});
test('basic Malay payment and urgency cues are recognised',()=>{
  const findings=analyseText('Sila bayar deposit sekarang. Masa terhad, hanya 10 minit.');
  assert.ok(findings.some(f=>f.id==='payment'));assert.ok(findings.some(f=>f.id==='urgency'));
});
test('unsafe URL schemes and invalid addresses are rejected',()=>{
  for(const u of ['javascript:alert(1)','data:text/html,hello','file:///etc/passwd','a b','localhost'])assert.throws(()=>analyseUrl(u));
});
test('URL parser exposes the actual hostname beyond misleading user information',()=>{
  const r=analyseUrl('https://trusted.example@unrelated.example/jobs');
  assert.equal(r.hostname,'unrelated.example');assert.ok(r.findings.some(f=>f.id==='userinfo'));
});
test('clean URL has no guarantee or fabricated reputation score',()=>{
  const r=analyseUrl('https://careers.example/jobs');assert.deepEqual(r.findings,[]);assert.equal(r.hostname,'careers.example');assert.equal('safe' in r,false);
});
test('short links are identified without visiting them',()=>{
  assert.ok(analyseUrl('https://bit.ly/demo-offer').findings.some(f=>f.id==='short'));
});
test('corrupt or tampered learning records recover safely',()=>{
  const allowed=lessons.map(l=>l.id);
  assert.equal(parseProgress('not json',allowed).completed.length,0);
  const p=parseProgress('{"completed":["trust","trust","bogus"],"gameRuns":-3,"challenge":"yes","last":"bogus"}',allowed);
  assert.deepEqual(p,{completed:['trust'],gameRuns:0,challenge:false,last:null});
});
test('every story branch leads to a reachable ending without a loop',()=>{
  const visited=new Set();let endings=0;
  function walk(id,path=[]){assert.ok(story[id],`Missing node ${id}`);assert.ok(!path.includes(id),'Story cycle');visited.add(id);const n=story[id];if(n.end){endings++;return;}assert.ok(n.options.length>0);for(const o of n.options){assert.ok(o.lesson);walk(o.next,[...path,id]);}}
  walk('start');walk('interview');assert.ok(endings>=3);assert.equal(visited.size,Object.keys(story).length);
});
test('all lessons have valid knowledge checks and cases link to existing lessons',()=>{
  for(const l of lessons){assert.ok(l.correct>=0&&l.correct<l.options.length);assert.ok(l.points.length>=3);}
  for(const c of cases)assert.ok(lessons.some(l=>l.id===c.lesson));
});
