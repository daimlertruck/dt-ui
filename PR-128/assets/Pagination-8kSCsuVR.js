import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as n}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{A as y}from"./ArrowRight-R00SQyn0.js";import"./TooltipProvider-MBvKdTIL.js";import{d as C}from"./debounce-hfrKQpz_.js";import{T as w}from"./Typography-_GTkkcG8.js";import{n as i}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const h=t=>r.jsx("svg",{fill:"none",height:"12",viewBox:"0 0 8 12",width:"8",xmlns:"http://www.w3.org/2000/svg",...t,children:r.jsx("path",{clipRule:"evenodd",d:"M1.00372 4.99554L5.59672 0.40254C5.68831 0.309085 5.79751 0.234713 5.91802 0.183725C6.03853 0.132736 6.16795 0.106142 6.29879 0.105481C6.42964 0.104821 6.55932 0.130105 6.68034 0.179874C6.80136 0.229643 6.91131 0.302908 7.00383 0.395433C7.09636 0.487958 7.16962 0.597907 7.21939 0.718923C7.26916 0.839939 7.29444 0.96962 7.29378 1.10047C7.29312 1.23132 7.26653 1.36074 7.21554 1.48124C7.16455 1.60175 7.09018 1.71095 6.99672 1.80254L3.09672 5.70254L6.99672 9.60254C7.17929 9.78883 7.28096 10.0396 7.27964 10.3005C7.27832 10.5613 7.17413 10.8111 6.98969 10.9955C6.80525 11.1799 6.55548 11.2841 6.29465 11.2855C6.03382 11.2868 5.78301 11.1851 5.59672 11.0025L1.00372 6.41054C0.816253 6.22301 0.710938 5.9687 0.710938 5.70354C0.710938 5.43838 0.816253 5.18407 1.00372 4.99654V4.99554Z",fill:"currentColor",fillRule:"evenodd"})}),$=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 48px;
`,b=i.button`
  ${({theme:t})=>`
    background-color: transparent;
    color: ${t.palette.primary};
    border: none;
    cursor: pointer;
  `}
`,g=i.button`
  ${({theme:t,disabled:o})=>`
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: ${t.colors.white};
    border: none;
    border-radius: 3px;
    color: ${o?t.colors.grey_90:t.palette.primary};
    cursor: ${o?"default":"pointer"};
  `}
`,j=i.input`
  ${({theme:t,hasError:o})=>`
    ${t.fontStyles.pXSmall};
    text-align: center;
    padding: 6px 8px;
    margin: 0px;
    width: 50px;
    height: 32px;
    background-color: ${t.colors.white};
    color: ${t.colors.grey_200};
    border: ${o?`2px solid ${t.palette.error}`:`1px solid ${t.colors.grey_90}`};
    border-radius: 3px;

    &:focus {
       ${!o&&`border-bottom: 2px solid ${t.palette.primary}`};
    }
  `}
`,l=({children:t,dataTestId:o})=>r.jsx($,{"data-testid":o??"pagination-wrapper",children:t});l.Content=({totalPages:t,onClick:o})=>r.jsxs(w,{fontStyles:"pXSmall",children:["of"," ",r.jsx(b,{"data-testid":"pagination-last-page",onClick:o,title:"Go to last page",children:t})]});l.NextItem=({onClick:t,disabled:o})=>r.jsx(g,{"data-testid":"pagination-next-item",disabled:o,onClick:t,title:"Go to next page",children:r.jsx(y,{})});l.PreviousItem=({onClick:t,disabled:o})=>r.jsx(g,{"data-testid":"pagination-previous-item",disabled:o,onClick:t,title:"Go to previous page",children:r.jsx(h,{})});const k=({totalPages:t,onHandleKeyDown:o,value:a,onChange:d})=>{const[e,c]=n.useState(1),[f,u]=n.useState(!1),x=n.useMemo(()=>C(s=>s(),500),[]);n.useEffect(()=>{a!==void 0&&c(a)},[a]),n.useEffect(()=>{e&&e<=t&&x(()=>{d(e)})},[x,e,d,t]);const m=s=>{const p=Number(s.target.value);c(p),p>t||p===0?u(!0):u(!1)};return r.jsx(j,{"data-testid":"pagination-input",hasError:f,onChange:m,onKeyDown:o,value:e})};export{l as P,k as a};
