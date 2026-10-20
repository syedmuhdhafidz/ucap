import { useEffect, useRef, useState } from 'react';
import { explainer } from '../data/content.js';

const paths={
 shield:'M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7L12 3Z M8 12l3 3 5-6',
 search:'M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
 book:'M12 6v15 M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2V4Z',
 arrow:'M4 12h16 M14 6l6 6-6 6',
 check:'m5 12 4 4L19 6',
 clock:'M12 8v5l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
 chat:'M21 4H3v14h5l4 4 4-4h5V4Z M7 9h10 M7 13h6',
 briefcase:'M3 7h18v14H3V7Z M8 7V3h8v4 M3 12c5 4 13 4 18 0 M12 11v5',
 play:'m9 5 11 7-11 7V5Z',
 pause:'M8 5v14 M16 5v14',
 users:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-3c0-6 16-6 16 0v3 M20 3c4 2 4 7 0 8',
 wallet:'M3 5h17v16H3V5Z M3 5l14-3v3 M15 11h6v5h-6v-5Z',
 phone:'M7 2h10v20H7V2Z M10 18h4',
 life:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M5 5l4 4 M15 15l4 4 M5 19l4-4 M15 9l4-4',
 external:'M14 3h7v7 M21 3 10 14 M10 3H3v18h18v-7',
 warning:'m12 3 10 18H2L12 3Z M12 9v5 M12 17v1',
 upload:'M12 16V3 M7 8l5-5 5 5 M3 15v6h18v-6',
 close:'m5 5 14 14 M5 19 19 5',
 reset:'M3 10a9 9 0 1 1 1 8 M3 3v7h7',
 lock:'M5 10h14v11H5V10Z M8 10V6a4 4 0 0 1 8 0v4 M12 14v3',
 home:'m2 11 10-9 10 9 M5 9v13h14V9 M10 22v-8h4v8',
 library:'M4 4v17 M9 4v17 M14 4v17 M18 5l4 15',
 game:'M7 7h10c5 0 6 14 2 14l-4-4H9l-4 4C1 21 2 7 7 7Z M6 11v5 M3.5 13.5h5 M16 12h.1 M19 15h.1',
 download:'M12 3v13 M7 11l5 5 5-5 M3 17v4h18v-4',
 info:'M12 11v6 M12 7v1 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
 menu:'M3 6h18 M3 12h18 M3 18h18',
};
export function Icon({name='shield',size=20,...props}) {return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]||paths.shield}/></svg>;}
export function Button({children,variant='primary',icon,onClick,type='button',...props}) {return <button type={type} className={`button ${variant}`} onClick={onClick} {...props}>{icon&&<Icon name={icon}/>}<span>{children}</span></button>;}
export function LinkButton({children,href,variant='secondary',...props}) {return <a className={`button ${variant}`} href={href} {...props}>{children}<Icon name="external" size={16}/></a>;}
export function External({children,href}) {return <a href={href} target="_blank" rel="noopener noreferrer" className="external">{children}<Icon name="external" size={14}/><span className="sr-only"> (opens in a new tab)</span></a>;}
export function Badge({children,tone=''}) {return <span className={`badge ${tone}`}>{children}</span>;}
export function Notice({children,tone='info',title}) {return <div className={`notice ${tone}`}><Icon name={tone==='warning'?'warning':tone==='success'?'check':'info'}/><div>{title&&<strong>{title}</strong>}<div>{children}</div></div></div>;}
export function Heading({eyebrow,title,children,action}) {return <header className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children&&<p className="lede">{children}</p>}</div>{action}</header>;}
export function Modal({title,children,onClose}) {
  const ref=useRef(null);
  useEffect(()=>{const d=ref.current; const previous=document.activeElement;d.showModal();return()=>{d.close();if(previous?.isConnected) previous.focus();};},[]);
  return <dialog ref={ref} className="modal" aria-labelledby="dialog-title" onCancel={e=>{e.preventDefault();onClose();}}><div className="modal-head"><h2 id="dialog-title">{title}</h2><button autoFocus className="icon-button" aria-label="Close dialog" onClick={onClose}><Icon name="close"/></button></div>{children}</dialog>;
}
export function Progress({value,max=5}) {return <div className="progress-track" role="progressbar" aria-label="Completed lessons" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}><span style={{width:`${value/max*100}%`}}/></div>;}
export function Explainer() {
  const [step,setStep]=useState(0); const [playing,setPlaying]=useState(false);
  useEffect(()=>{if(!playing)return;const timer=setInterval(()=>setStep(s=>{if(s>=explainer.length-1)return 0;return s+1;}),7000);return()=>clearInterval(timer);},[playing]);
  const slide=explainer[step];
  return <section className="explainer card"><div className="explainer-stage"><span className="stage-label">THE ANATOMY OF A JOB SCAM</span><div key={step} className="scene"><div className="scene-icon"><Icon name={slide.icon} size={54}/></div><span className="scene-index">0{step+1} / 04</span><h3>{slide.title}</h3><p>{slide.text}</p></div><div className="player"><button className="icon-button" aria-label={playing?'Pause explainer':'Play explainer'} onClick={()=>setPlaying(!playing)}><Icon name={playing?'pause':'play'}/></button><div className="scene-dots">{explainer.map((s,i)=><button key={s.title} aria-label={`Scene ${i+1}: ${s.title}`} aria-pressed={step===i} className={step===i?'active':''} onClick={()=>{setStep(i);setPlaying(false);}}/>)}</div><span>Animated explainer · 4 scenes</span></div></div><div className="explainer-copy"><p className="eyebrow">A MOMENT TO UNDERSTAND</p><h2>How an opportunity becomes a trap.</h2><p>See how a friendly introduction can turn into pressure to pay. Every scene includes its own on-screen explanation.</p><details><summary>Read the full transcript</summary>{explainer.map(s=><p key={s.title}><strong>{s.title}</strong> {s.text}</p>)}</details></div></section>;
}
