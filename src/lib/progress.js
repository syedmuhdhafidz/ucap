export const progressKey='ucap-learning-v2';
export const emptyProgress={completed:[],gameRuns:0,challenge:false,last:null};
export function parseProgress(raw,allowed) {
  try {
    const p=JSON.parse(raw);
    return {completed:[...new Set(Array.isArray(p?.completed)?p.completed.filter(x=>allowed.includes(x)):[])],gameRuns:Number.isSafeInteger(p?.gameRuns)&&p.gameRuns>=0?p.gameRuns:0,challenge:p?.challenge===true,last:allowed.includes(p?.last)?p.last:null};
  } catch {return {...emptyProgress,completed:[]};}
}
