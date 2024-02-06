import{t as F}from"./Typography-rdSq6_KA.js";import{p as U,c as E,s as W,r as D,a as Y,h as m}from"./typography-i172ZzKq.js";import{n as v,u as q}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{j as u}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{u as G}from"./Breadcrumb-Ft0keHhE.js";import"./index-lb1Yyg-x.js";import{C as J}from"./Close-fCiS4iy8.js";import{k as Q}from"./emotion-react.browser.esm-7R29exhq.js";const X=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"})}),K=t=>u.jsx("svg",{fill:"currentColor",height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z",fill:"currentColor"})}),tt=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),et=t=>u.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z",fill:"currentColor"})}),rt={...U,primary:{default:E.greenPastel_60,light:E.greenPastel_10,medium:E.greenPastel_30,dark:E.greenPastel_80,contrast:E.white}},ot={...W,button:D.xl,modal:D["3xs"]},at={default:"Poppins, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif"},st={...Y,h1:m(600,"2.5rem","3rem","0.03rem"),h2:m(600,"2rem","2.5rem"),h3:m(600,"1.5rem","1.75rem"),h4:m(600,"1.25rem","1.5rem"),h5:m(600,"1rem","1.25rem"),h6:m(600,"1rem","1.5rem","normal","uppercase"),body1Bold:m(600,"1rem","1.5rem"),body2Bold:m(600,"0.875rem","1.25rem"),body3Bold:m(600,"0.75rem","1rem"),body4Bold:m(600,"0.625rem","0.875rem"),link1Bold:m(600,"1rem","1.5rem"),link2Bold:m(600,"0.875rem","1.25rem"),link3Bold:m(600,"0.75rem","1rem"),button1:m(700,"1rem","1.5rem","0.02rem","uppercase"),button2:m(700,"0.875rem","1.25rem","0.018rem","uppercase"),button3:m(700,"0.625rem","1rem","0.015rem","uppercase")},ve={...F,fontFamily:at,fontStyles:st,palette:rt,shape:ot};v.button`
  ${({theme:t,disabled:e})=>`
    background-color: transparent;
    border: none;
    cursor: ${e?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${t.spacing.small};
    }
  `}
`;var V=(t=>(t.TopLeft="top-left",t.TopCenter="top-center",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomCenter="bottom-center",t.BottomRight="bottom-right",t))(V||{}),j=(t=>(t.Success="success",t.Error="error",t.Info="informative",t.Warning="warning",t))(j||{});const it=v.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({theme:t,type:e})=>`
    background-color: ${t.palette[e].default};  
    color: ${t.palette[e].contrast}
`}
`,nt=Q`
  from { opacity: 0; }
  to   { opacity: 1; }
`,lt=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  animation: ${nt} 0.75s ease-in;
  transition: all 0.75s ease-in-out;
  overflow: hidden;
  ${({theme:t,isVisible:e})=>`
    background-color: ${t.palette.base.default};  
    opacity: ${e?1:0};
    color: ${t.palette.content.body};
    border-radius: ${t.radius["5xs"]};
    box-shadow: ${t.shadows.s};
  `}
`,ct=v.div`
  ${({theme:t})=>`
    height: 100%;
    flex-grow: 1;
    padding: ${t.spacing["2xs"]} ${t.spacing["2xs"]};
  `}
`,dt=v.div`
  ${({theme:t})=>`
      ${t.fontStyles.h6};
      color: ${t.palette.content.heading};
      margin-bottom: ${t.spacing["5xs"]};
      text-transform: capitalize;
  `}
`,pt=v.div`
  ${({theme:t})=>`
    ${t.fontStyles.body2};
    color: ${t.palette.content.body};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`,ut=v.button`
  ${({theme:t})=>`
    color: ${t.palette.content.body};
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    font-size: 0;
    line-height: 0;
  
    &:hover {
      background-color: ${t.palette.base.light};
    }
  `}
`,mt=v.div`
  ${({theme:t,hasCloseButton:e})=>`
    display: grid;
    ${e?"grid-template-columns: auto 24px;":"grid-template-rows: auto auto;"}
    column-gap: ${t.spacing["2xs"]};
  `}
`,ft=v.div`
  ${({theme:t,hasChildren:e})=>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${e?t.spacing["5xs"]:0};
  `}
`,gt={[j.Success]:K,[j.Error]:et,[j.Info]:tt,[j.Warning]:X},ht=({children:t,id:e,dataTestId:r,title:s,message:a,onClose:o,type:n,isVisible:i=!0,dismissible:l=!0})=>{const c=gt[n],p=r??`toast-${e}`;return u.jsxs(lt,{"data-testid":p,isVisible:i,type:n,children:[u.jsx(it,{type:n,children:u.jsx(c,{})}),u.jsxs(ct,{children:[u.jsxs(mt,{hasCloseButton:l,children:[u.jsx(dt,{children:s}),l?u.jsx(ut,{onClick:o,children:u.jsx(J,{})}):null,u.jsx(pt,{children:a})]}),u.jsx(ft,{hasChildren:!!t,children:t})]})]},e)};let yt={data:""},bt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||yt,xt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vt=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,w=(t,e)=>{let r="",s="",a="";for(let o in t){let n=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+n+";":s+=o[1]=="f"?w(n,o):o+"{"+w(n,o[1]=="k"?"":e)+"}":typeof n=="object"?s+=w(n,e?e.replace(/([^,])+/g,i=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=w.p?w.p(o,n):o+":"+n+";")}return r+(e&&a?e+"{"+a+"}":a)+s},b={},_=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+_(t[r]);return e}return t},wt=(t,e,r,s,a)=>{let o=_(t),n=b[o]||(b[o]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(o));if(!b[n]){let l=o!==t?t:(c=>{let p,h,g=[{}];for(;p=xt.exec(c.replace(vt,""));)p[4]?g.shift():p[3]?(h=p[3].replace(z," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][p[1]]=p[2].replace(z," ").trim();return g[0]})(t);b[n]=w(a?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&b.g?b.g:null;return r&&(b.g=b[n]),((l,c,p,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(b[n],e,s,i),n},$t=(t,e,r)=>t.reduce((s,a,o)=>{let n=e[o];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":w(i,""):i===!1?"":i}return s+a+(n??"")},"");function B(t){let e=this||{},r=t.call?t(e.p):t;return wt(r.unshift?r.raw?$t(r,[].slice.call(arguments,1),e.p):r.reduce((s,a)=>Object.assign(s,a&&a.call?a(e.p):a),{}):r,bt(e.target),e.g,e.o,e.k)}let P,A,Z;B.bind({g:1});let x=B.bind({k:1});function Ct(t,e,r,s){w.p=e,P=t,A=r,Z=s}function $(t,e){let r=this||{};return function(){let s=arguments;function a(o,n){let i=Object.assign({},o),l=i.className||a.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=B.apply(r,s)+(l?" "+l:""),e&&(i.ref=n);let c=t;return t[0]&&(c=i.as||t,delete i.as),Z&&c[0]&&Z(i),P(c,i)}return e?e(a):a}}var jt=t=>typeof t=="function",O=(t,e)=>jt(t)?t(e):t,Et=(()=>{let t=0;return()=>(++t).toString()})(),R=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),kt=20,T=new Map,St=1e3,L=t=>{if(T.has(t))return;let e=setTimeout(()=>{T.delete(t),C({type:4,toastId:t})},St);T.set(t,e)},Tt=t=>{let e=T.get(t);e&&clearTimeout(e)},N=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,kt)};case 1:return e.toast.id&&Tt(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return t.toasts.find(o=>o.id===r.id)?N(t,{type:1,toast:r}):N(t,{type:0,toast:r});case 3:let{toastId:s}=e;return s?L(s):t.toasts.forEach(o=>{L(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+a}))}}},I=[],M={toasts:[],pausedAt:void 0},C=t=>{M=N(M,t),I.forEach(e=>{e(M)})},It={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Mt=(t={})=>{let[e,r]=d.useState(M);d.useEffect(()=>(I.push(r),()=>{let a=I.indexOf(r);a>-1&&I.splice(a,1)}),[e]);let s=e.toasts.map(a=>{var o,n;return{...t,...t[a.type],...a,duration:a.duration||((o=t[a.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||It[a.type],style:{...t.style,...(n=t[a.type])==null?void 0:n.style,...a.style}}});return{...e,toasts:s}},Ot=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Et()}),k=t=>(e,r)=>{let s=Ot(e,t,r);return C({type:2,toast:s}),s.id},f=(t,e)=>k("blank")(t,e);f.error=k("error");f.success=k("success");f.loading=k("loading");f.custom=k("custom");f.dismiss=t=>{C({type:3,toastId:t})};f.remove=t=>C({type:4,toastId:t});f.promise=(t,e,r)=>{let s=f.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(a=>(f.success(O(e.success,a),{id:s,...r,...r==null?void 0:r.success}),a)).catch(a=>{f.error(O(e.error,a),{id:s,...r,...r==null?void 0:r.error})}),t};var Bt=(t,e)=>{C({type:1,toast:{id:t,height:e}})},Ht=()=>{C({type:5,time:Date.now()})},At=t=>{let{toasts:e,pausedAt:r}=Mt(t);d.useEffect(()=>{if(r)return;let o=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(l<0){i.visible&&f.dismiss(i.id);return}return setTimeout(()=>f.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,r]);let s=d.useCallback(()=>{r&&C({type:6,time:Date.now()})},[r]),a=d.useCallback((o,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=e.filter(y=>(y.position||c)===(o.position||c)&&y.height),h=p.findIndex(y=>y.id===o.id),g=p.filter((y,H)=>H<h&&y.visible).length;return p.filter(y=>y.visible).slice(...i?[g+1]:[0,g]).reduce((y,H)=>y+(H.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:Bt,startPause:Ht,endPause:s,calculateOffset:a}}},Zt=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Nt=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Vt=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Dt=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nt} 0.15s ease-out forwards;
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
    animation: ${Vt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zt=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Lt=$("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${zt} 1s linear infinite;
`,_t=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pt=x`
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
}`,Rt=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_t} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pt} 0.2s ease-out forwards;
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
`,Ft=$("div")`
  position: absolute;
`,Ut=$("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Wt=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Yt=$("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Wt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,qt=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return e!==void 0?typeof e=="string"?d.createElement(Yt,null,e):e:r==="blank"?null:d.createElement(Ut,null,d.createElement(Lt,{...s}),r!=="loading"&&d.createElement(Ft,null,r==="error"?d.createElement(Dt,{...s}):d.createElement(Rt,{...s})))},Gt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Jt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Qt="0%{opacity:0;} 100%{opacity:1;}",Xt="0%{opacity:1;} 100%{opacity:0;}",Kt=$("div")`
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
`,te=$("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ee=(t,e)=>{let r=t.includes("top")?1:-1,[s,a]=R()?[Qt,Xt]:[Gt(r),Jt(r)];return{animation:e?`${x(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},re=d.memo(({toast:t,position:e,style:r,children:s})=>{let a=t.height?ee(t.position||e||"top-center",t.visible):{opacity:0},o=d.createElement(qt,{toast:t}),n=d.createElement(te,{...t.ariaProps},O(t.message,t));return d.createElement(Kt,{className:t.className,style:{...a,...r,...t.style}},typeof s=="function"?s({icon:o,message:n}):d.createElement(d.Fragment,null,o,n))});Ct(d.createElement);var oe=({id:t,className:e,style:r,onHeightUpdate:s,children:a})=>{let o=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return d.createElement("div",{ref:o,className:e,style:r},a)},ae=(t,e)=>{let r=t.includes("top"),s=r?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...s,...a}},se=B`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,S=16,ie=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:a,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:l}=At(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:S,left:S,right:S,bottom:S,pointerEvents:"none",...o},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||e,h=l.calculateOffset(c,{reverseOrder:t,gutter:s,defaultPosition:e}),g=ae(p,h);return d.createElement(oe,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?se:"",style:g},c.type==="custom"?O(c.message,c):a?a(c):d.createElement(re,{toast:c,position:p}))}))};const ne=4e3,le=1/0,ce=V.BottomCenter,de=V.BottomRight,we=({type:t,title:e,message:r,children:s,dismissible:a,...o})=>{const n=t===j.Error?le:ne;f.custom(i=>{const l=d.Children.map(s,c=>c&&d.cloneElement(c,{toastId:i.id,...c.props}));return u.jsx(ht,{dismissible:a,id:i.id,isVisible:i.visible,message:r,onClose:()=>f.dismiss(i.id),title:e,type:t,children:l})},{duration:n,...o})},$e=({gutter:t=8,...e})=>{const r=q(),s=G(`(max-width: ${r.breakpoints.s})`),a=s?ce:de,o=s?8:16;return u.jsx(ie,{gutter:t,position:a,...e,containerStyle:{bottom:16,right:o,top:o,left:o,...e.containerStyle}})};export{ht as T,j as a,$e as b,we as e,ve as g};
