import { Component, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Button, Icon, Modal, Notice } from './components/UI.jsx';
import Home from './pages/Home.jsx';
import { LearnHub, Lesson } from './pages/Learn.jsx';
import Game from './pages/Game.jsx';
import Scan from './pages/Scan.jsx';
import Library, { Moderation } from './pages/Library.jsx';
import SOS from './pages/SOS.jsx';
import { lessons } from './data/content.js';
import { emptyProgress, parseProgress, progressKey } from './lib/progress.js';

const nav=[['home','Home','home'],['learn','Learn & Play','book'],['scan','Scan','search'],['library','Library','library'],['sos','SOS','life']];
const subscribe=callback=>{window.addEventListener('hashchange',callback);return()=>window.removeEventListener('hashchange',callback);};
const snapshot=()=>window.location.hash.replace(/^#\/?/,'')||'home';
function initial(){try{return parseProgress(localStorage.getItem(progressKey),lessons.map(l=>l.id));}catch{return {...emptyProgress,completed:[]};}}

class ErrorBoundary extends Component {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){if(this.state.failed)return <section className="card empty-result"><h1>This screen could not load.</h1><p>Your saved learning progress has not been cleared. Reload to try again.</p><Button onClick={()=>window.location.reload()}>Reload application</Button></section>;return this.props.children;}
}
export default function App(){
  const route=useSyncExternalStore(subscribe,snapshot,snapshot);const [page,id]=route.split('/');
  const [progress,setProgress]=useState(initial);const [reports,setReports]=useState([]);const [modal,setModal]=useState(null);const [storageError,setStorageError]=useState(false);
  const main=useRef(null);const previous=useRef(route);
  useEffect(()=>{document.title=`${page==='game'?'The Offer':nav.find(n=>n[0]===page)?.[1]||'Demo workspace'} | UCAP`;if(previous.current!==route){main.current?.focus();window.scrollTo(0,0);previous.current=route;}},[route,page]);
  function go(path){setModal(null);window.location.hash=`/${path}`;}
  function save(next){setProgress(next);try{localStorage.setItem(progressKey,JSON.stringify(next));setStorageError(false);}catch{setStorageError(true);}}
  function reset(){setProgress({...emptyProgress,completed:[]});setReports([]);try{localStorage.removeItem(progressKey);setStorageError(false);}catch{setStorageError(true);}setModal(null);go('home');}
  function completeLesson(lesson){save({...progress,completed:[...new Set([...progress.completed,lesson])],last:lesson});}
  const shared={go,progress};
  let content;
  switch(page){
    case 'home':content=<Home {...shared}/>;break;
    case 'learn':content=id?<Lesson key={id} id={id} {...shared} completeLesson={completeLesson}/>:<LearnHub {...shared} completeChallenge={()=>save({...progress,challenge:true})}/>;break;
    case 'game':content=<Game go={go} recordGame={()=>save({...progress,gameRuns:progress.gameRuns+1})}/>;break;
    case 'scan':content=<Scan go={go}/>;break;
    case 'library':content=<Library go={go} reports={reports} addReport={r=>setReports(old=>[r,...old])}/>;break;
    case 'demo':content=<Moderation go={go} reports={reports} updateReport={(rid,patch)=>setReports(old=>old.map(r=>r.id===rid?{...r,...patch}:r))}/>;break;
    case 'sos':content=<SOS/>;break;
    default:content=<div className="card empty-result"><h1>Page not found</h1><Button onClick={()=>go('home')}>Go to Home</Button></div>;
  }
  return <><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();main.current?.focus();}}>Skip to content</a><div className="prototype-bar"><span>UTP CYBER SMART CHALLENGE 2026</span><span>Student-build prototype · Job scam awareness</span></div><header className="site-header"><div className="header-inner"><a href="#/home" className="brand" aria-label="UCAP Home"><img className="brand-logo" src="/ucap-logo.png" width="1600" height="586" alt="UCAP — UTP Cybersecurity Awareness Platform"/></a><nav aria-label="Main navigation">{nav.map(([key,label,icon])=><a key={key} href={`#/${key}`} className={`nav-link ${(page===key||(page==='game'&&key==='learn'))?'active':''} ${key==='sos'?'nav-sos':''}`} aria-current={page===key?'page':undefined}><Icon name={icon} size={17}/>{label}</a>)}</nav></div></header><main ref={main} id="main-content" tabIndex={-1} className="container">{storageError&&<Notice tone="warning">Learning progress cannot be saved in this browser. You can continue, but progress may reset on refresh.</Notice>}<ErrorBoundary key={route}>{content}</ErrorBoundary></main><footer className="site-footer"><div className="footer-top"><div><a href="#/home" className="brand brand-footer" aria-label="UCAP Home"><img className="brand-logo" src="/ucap-logo.png" width="1600" height="586" alt="UCAP — UTP Cybersecurity Awareness Platform"/><small>Pause. Verify. Act.</small></a><p>A student-build prototype for the UTP community.<br/>Not an official university or emergency-response service.</p></div><div><strong>Explore</strong><a href="#/learn">Learn & Play</a><a href="#/library">Community lessons</a><a href="#/sos">Get help</a></div><div><strong>About this demo</strong><button onClick={()=>setModal('privacy')}>Privacy & limitations</button><a href="#/demo">Demo review workspace</a><button onClick={()=>setModal('reset')}>Reset demonstration</button></div></div><div className="footer-bottom"><span>UCAP · Detect. Educate. Response.</span><span>Designed for safer decisions, together.</span></div></footer>{modal==='privacy'&&<Modal title="Privacy & prototype limitations" onClose={()=>setModal(null)}><div className="stack"><Notice title="Learning progress">Completed lesson IDs, game-completion count and challenge progress are stored in this browser’s local storage. No identity is requested. Reset demonstration clears UCAP’s own progress key.</Notice><Notice title="Scanning">Text checks run locally. Screenshot OCR uses Tesseract.js; software and English language data download from third-party hosts, which receive normal network metadata. Images are processed in your browser, not uploaded by UCAP. Scanning is rule-based, not an AI verdict.</Notice><Notice title="Community contributions">Fictional demo submissions are held only in this tab’s memory. Refreshing clears them. The review workspace is public and is not a secure moderator system.</Notice><Notice title="External sources">Links open external sites with their own privacy policies. Loading the awareness video connects to YouTube. Opening the Power Apps companion connects to Microsoft and requires the relevant account permissions. This build has no live news, police database, Penipu API, or automated reporting connection.</Notice><p>Interface language: English. Some message patterns also cover Bahasa Melayu; there is no complete translation or validated multilingual classifier yet.</p></div></Modal>}{modal==='reset'&&<Modal title="Reset this demonstration?" onClose={()=>setModal(null)}><p>This clears UCAP learning progress and the current tab’s fictional reports. It does not clear unrelated browser data or delete third-party OCR caches.</p><div className="actions"><Button onClick={reset}>Reset UCAP demo</Button><Button variant="secondary" onClick={()=>setModal(null)}>Keep my progress</Button></div></Modal>}</>;
}
