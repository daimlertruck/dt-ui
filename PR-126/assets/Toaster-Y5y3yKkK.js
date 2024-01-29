import{j as u}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{u as R}from"./useMedia-S1QLeel4.js";import{C as _}from"./Close-fCiS4iy8.js";import{k as F}from"./emotion-react.browser.esm-7R29exhq.js";import{n as v,u as P}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const U=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z",fill:"white"})}),W=t=>u.jsx("svg",{fill:"currentColor",height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z",fill:"currentColor"})}),Y=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),q=t=>u.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z",fill:"currentColor"})});var V=(t=>(t.TopLeft="top-left",t.TopCenter="top-center",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomCenter="bottom-center",t.BottomRight="bottom-right",t))(V||{}),C=(t=>(t.Success="success",t.Error="error",t.Info="info",t.Warning="warning",t))(C||{});const G=v.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({theme:t,type:e})=>`
    background-color: ${t.palette[e]};  
    color: ${t.colors.white}
`}
`,J=F`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Q=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 335px;
  animation: ${J} 0.75s ease-in;
  transition: all 0.75s ease-in-out;
  overflow: hidden;
  ${({theme:t,isVisible:e})=>`
    background-color: ${t.colors.white};  
    opacity: ${e?1:0};
    color: ${t.colors.grey_300};
    border-radius: ${t.radius["5xs"]};
    box-shadow: ${t.shadows.s};
  `}
`,X=v.div`
  ${({theme:t})=>`
    height: 100%;
    flex-grow: 1;
    padding: ${t.spacing["2xs"]} ${t.spacing["2xs"]};
  `}
`,K=v.div`
  ${({theme:t})=>`
      ${t.fontStyles.h5};
      color: ${t.palette.textPrimary};
      margin-bottom: ${t.spacing["5xs"]};
      text-transform: capitalize;
  `}
`,tt=v.div`
  ${({theme:t})=>`
    ${t.fontStyles.body2};
    color: ${t.palette.textSecondary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`,et=v.button`
  ${({theme:t})=>`
    color: ${t.colors.grey_40};
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    font-size: 0;
    line-height: 0;
  
    &:hover {
      background-color: ${t.palette.neutral};
    }
  `}
`,rt=v.div`
  ${({theme:t,hasCloseButton:e})=>`
    display: grid;
    ${e?"grid-template-columns: auto 1fr;":"grid-template-rows: auto auto;"}
    column-gap: ${t.spacing["2xs"]};
  `}
`,ot=v.div`
  ${({theme:t,hasChildren:e})=>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${e?t.spacing["5xs"]:0};
 `}
`,at={[C.Success]:W,[C.Error]:q,[C.Info]:Y,[C.Warning]:U},st=({children:t,id:e,dataTestId:r,title:s,message:a,onClose:o,type:n,isVisible:i=!0,dismissible:l=!0})=>{const c=at[n],p=r??`toast-${e}`;return u.jsxs(Q,{"data-testid":p,isVisible:i,type:n,children:[u.jsx(G,{type:n,children:u.jsx(c,{})}),u.jsxs(X,{children:[u.jsxs(rt,{hasCloseButton:l,children:[u.jsx(K,{children:s}),l?u.jsx(et,{onClick:o,children:u.jsx(_,{})}):null,u.jsx(tt,{children:a})]}),u.jsx(ot,{hasChildren:!!t,children:t})]})]},e)};let it={data:""},nt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||it,lt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ct=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(t,e)=>{let r="",s="",a="";for(let o in t){let n=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+n+";":s+=o[1]=="f"?b(n,o):o+"{"+b(n,o[1]=="k"?"":e)+"}":typeof n=="object"?s+=b(n,e?e.replace(/([^,])+/g,i=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=b.p?b.p(o,n):o+":"+n+";")}return r+(e&&a?e+"{"+a+"}":a)+s},x={},z=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+z(t[r]);return e}return t},dt=(t,e,r,s,a)=>{let o=z(t),n=x[o]||(x[o]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(o));if(!x[n]){let l=o!==t?t:(c=>{let p,g,m=[{}];for(;p=lt.exec(c.replace(ct,""));)p[4]?m.shift():p[3]?(g=p[3].replace(D," ").trim(),m.unshift(m[0][g]=m[0][g]||{})):m[0][p[1]]=p[2].replace(D," ").trim();return m[0]})(t);x[n]=b(a?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&x.g?x.g:null;return r&&(x.g=x[n]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(x[n],e,s,i),n},pt=(t,e,r)=>t.reduce((s,a,o)=>{let n=e[o];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return s+a+(n??"")},"");function M(t){let e=this||{},r=t.call?t(e.p):t;return dt(r.unshift?r.raw?pt(r,[].slice.call(arguments,1),e.p):r.reduce((s,a)=>Object.assign(s,a&&a.call?a(e.p):a),{}):r,nt(e.target),e.g,e.o,e.k)}let B,H,A;M.bind({g:1});let y=M.bind({k:1});function ut(t,e,r,s){b.p=e,B=t,H=r,A=s}function w(t,e){let r=this||{};return function(){let s=arguments;function a(o,n){let i=Object.assign({},o),l=i.className||a.className;r.p=Object.assign({theme:H&&H()},i),r.o=/ *go\d+/.test(l),i.className=M.apply(r,s)+(l?" "+l:""),e&&(i.ref=n);let c=t;return t[0]&&(c=i.as||t,delete i.as),A&&c[0]&&A(i),B(c,i)}return e?e(a):a}}var ft=t=>typeof t=="function",I=(t,e)=>ft(t)?t(e):t,mt=(()=>{let t=0;return()=>(++t).toString()})(),L=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),gt=20,k=new Map,ht=1e3,N=t=>{if(k.has(t))return;let e=setTimeout(()=>{k.delete(t),$({type:4,toastId:t})},ht);k.set(t,e)},xt=t=>{let e=k.get(t);e&&clearTimeout(e)},Z=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,gt)};case 1:return e.toast.id&&xt(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return t.toasts.find(o=>o.id===r.id)?Z(t,{type:1,toast:r}):Z(t,{type:0,toast:r});case 3:let{toastId:s}=e;return s?N(s):t.toasts.forEach(o=>{N(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+a}))}}},S=[],T={toasts:[],pausedAt:void 0},$=t=>{T=Z(T,t),S.forEach(e=>{e(T)})},yt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},bt=(t={})=>{let[e,r]=d.useState(T);d.useEffect(()=>(S.push(r),()=>{let a=S.indexOf(r);a>-1&&S.splice(a,1)}),[e]);let s=e.toasts.map(a=>{var o,n;return{...t,...t[a.type],...a,duration:a.duration||((o=t[a.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||yt[a.type],style:{...t.style,...(n=t[a.type])==null?void 0:n.style,...a.style}}});return{...e,toasts:s}},vt=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||mt()}),j=t=>(e,r)=>{let s=vt(e,t,r);return $({type:2,toast:s}),s.id},f=(t,e)=>j("blank")(t,e);f.error=j("error");f.success=j("success");f.loading=j("loading");f.custom=j("custom");f.dismiss=t=>{$({type:3,toastId:t})};f.remove=t=>$({type:4,toastId:t});f.promise=(t,e,r)=>{let s=f.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(a=>(f.success(I(e.success,a),{id:s,...r,...r==null?void 0:r.success}),a)).catch(a=>{f.error(I(e.error,a),{id:s,...r,...r==null?void 0:r.error})}),t};var wt=(t,e)=>{$({type:1,toast:{id:t,height:e}})},$t=()=>{$({type:5,time:Date.now()})},Ct=t=>{let{toasts:e,pausedAt:r}=bt(t);d.useEffect(()=>{if(r)return;let o=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(l<0){i.visible&&f.dismiss(i.id);return}return setTimeout(()=>f.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,r]);let s=d.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),a=d.useCallback((o,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=e.filter(h=>(h.position||c)===(o.position||c)&&h.height),g=p.findIndex(h=>h.id===o.id),m=p.filter((h,O)=>O<g&&h.visible).length;return p.filter(h=>h.visible).slice(...i?[m+1]:[0,m]).reduce((h,O)=>h+(O.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:wt,startPause:$t,endPause:s,calculateOffset:a}}},jt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Et=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kt=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,St=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Et} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Tt=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,It=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Tt} 1s linear infinite;
`,Mt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ot=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ht=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ot} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,At=w("div")`
  position: absolute;
`,Zt=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Vt=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Dt=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Vt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Nt=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return e!==void 0?typeof e=="string"?d.createElement(Dt,null,e):e:r==="blank"?null:d.createElement(Zt,null,d.createElement(It,{...s}),r!=="loading"&&d.createElement(At,null,r==="error"?d.createElement(St,{...s}):d.createElement(Ht,{...s})))},zt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Bt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Lt="0%{opacity:0;} 100%{opacity:1;}",Rt="0%{opacity:1;} 100%{opacity:0;}",_t=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ft=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Pt=(t,e)=>{let r=t.includes("top")?1:-1,[s,a]=L()?[Lt,Rt]:[zt(r),Bt(r)];return{animation:e?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ut=d.memo(({toast:t,position:e,style:r,children:s})=>{let a=t.height?Pt(t.position||e||"top-center",t.visible):{opacity:0},o=d.createElement(Nt,{toast:t}),n=d.createElement(Ft,{...t.ariaProps},I(t.message,t));return d.createElement(_t,{className:t.className,style:{...a,...r,...t.style}},typeof s=="function"?s({icon:o,message:n}):d.createElement(d.Fragment,null,o,n))});ut(d.createElement);var Wt=({id:t,className:e,style:r,onHeightUpdate:s,children:a})=>{let o=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return d.createElement("div",{ref:o,className:e,style:r},a)},Yt=(t,e)=>{let r=t.includes("top"),s=r?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:L()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...s,...a}},qt=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Gt=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:a,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:l}=Ct(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...o},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||e,g=l.calculateOffset(c,{reverseOrder:t,gutter:s,defaultPosition:e}),m=Yt(p,g);return d.createElement(Wt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?qt:"",style:m},c.type==="custom"?I(c.message,c):a?a(c):d.createElement(Ut,{toast:c,position:p}))}))};const Jt=4e3,Qt=1/0,Xt=V.BottomCenter,Kt=V.BottomRight,ie=({type:t,title:e,message:r,children:s,dismissible:a,...o})=>{const n=t===C.Error?Qt:Jt;f.custom(i=>u.jsx(st,{dismissible:a,id:i.id,isVisible:i.visible,message:r,onClose:()=>f.dismiss(i.id),title:e,type:t,children:s}),{duration:n,...o})},ne=({gutter:t=8,...e})=>{const r=P(),s=R(`(max-width: ${r.breakpoints.s})`),a=s?Xt:Kt,o=s?8:16;return u.jsx(Gt,{gutter:t,position:a,...e,containerStyle:{bottom:16,right:o,top:o,left:o,...e.containerStyle}})};export{st as T,U as W,C as a,ne as b,ie as e};
