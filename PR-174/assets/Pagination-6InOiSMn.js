import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import"./index-tGsFdLcJ.js";import"./index-jmm5gWkb.js";import{r as n}from"./index-4g5l5LRQ.js";import{d as b}from"./debounce-hfrKQpz_.js";import{A as y}from"./ArrowRight-R00SQyn0.js";import{T as C}from"./Typography-D6FO4u36.js";import{n as a}from"./emotion-styled.browser.esm-QTPHyGVR.js";const $=t=>o.jsx("svg",{fill:"none",height:"12",viewBox:"0 0 8 12",width:"8",xmlns:"http://www.w3.org/2000/svg",...t,children:o.jsx("path",{clipRule:"evenodd",d:"M1.00372 4.99554L5.59672 0.40254C5.68831 0.309085 5.79751 0.234713 5.91802 0.183725C6.03853 0.132736 6.16795 0.106142 6.29879 0.105481C6.42964 0.104821 6.55932 0.130105 6.68034 0.179874C6.80136 0.229643 6.91131 0.302908 7.00383 0.395433C7.09636 0.487958 7.16962 0.597907 7.21939 0.718923C7.26916 0.839939 7.29444 0.96962 7.29378 1.10047C7.29312 1.23132 7.26653 1.36074 7.21554 1.48124C7.16455 1.60175 7.09018 1.71095 6.99672 1.80254L3.09672 5.70254L6.99672 9.60254C7.17929 9.78883 7.28096 10.0396 7.27964 10.3005C7.27832 10.5613 7.17413 10.8111 6.98969 10.9955C6.80525 11.1799 6.55548 11.2841 6.29465 11.2855C6.03382 11.2868 5.78301 11.1851 5.59672 11.0025L1.00372 6.41054C0.816253 6.22301 0.710938 5.9687 0.710938 5.70354C0.710938 5.43838 0.816253 5.18407 1.00372 4.99654V4.99554Z",fill:"currentColor",fillRule:"evenodd"})}),w=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 48px;
`,h=a.button`
  ${({theme:t})=>`
    background-color: transparent;
    color: ${t.palette.primary.default};
    border: none;
    cursor: pointer;
  `}
`,f=a.button`
  ${({theme:t,disabled:e})=>`
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: ${t.palette.base.default};
    border: none;
    border-radius: 3px;
    color: ${e?t.palette.content.body:t.palette.primary.default};
    cursor: ${e?"default":"pointer"};
  `}
`,j=a.input`
  ${({theme:t,hasError:e})=>`
    ${t.fontStyles.pXSmall};
    text-align: center;
    padding: 6px 8px;
    margin: 0px;
    width: 50px;
    height: 32px;
    background-color: ${t.palette.base.default};
    color: ${t.palette.content.body};
    border: ${e?`2px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};
    border-radius: 3px;

    &:focus {
       ${!e&&`border-bottom: 2px solid ${t.palette.primary.default}`};
    }
  `}
`,l=({children:t,dataTestId:e})=>o.jsx(w,{"data-testid":e??"pagination-wrapper",children:t});l.Content=({totalPages:t,onClick:e})=>o.jsxs(C,{fontStyles:"pXSmall",children:["of"," ",o.jsx(h,{"data-testid":"pagination-last-page",onClick:e,title:"Go to last page",children:t})]});l.NextItem=({onClick:t,disabled:e})=>o.jsx(f,{"data-testid":"pagination-next-item",disabled:e,onClick:t,title:"Go to next page",children:o.jsx(y,{})});l.PreviousItem=({onClick:t,disabled:e})=>o.jsx(f,{"data-testid":"pagination-previous-item",disabled:e,onClick:t,title:"Go to previous page",children:o.jsx($,{})});const k=({totalPages:t,onHandleKeyDown:e,value:i,onChange:d})=>{const[r,u]=n.useState(1),[g,c]=n.useState(!1),x=n.useMemo(()=>b(s=>s(),500),[]);n.useEffect(()=>{i!==void 0&&u(i)},[i]),n.useEffect(()=>{r&&r<=t&&x(()=>{d(r)})},[x,r,d,t]);const m=s=>{const p=Number(s.target.value);u(p),p>t||p===0?c(!0):c(!1)};return o.jsx(j,{"data-testid":"pagination-input",hasError:g,onChange:m,onKeyDown:e,value:r})};export{l as P,k as a};
