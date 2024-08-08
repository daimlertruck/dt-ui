import{j as s}from"./jsx-runtime-CKrituN3.js";import{L as S}from"./LabelField-BF4x__zc.js";import{T as $}from"./Typography-BM34Rtmj.js";import{r as a}from"./index-CBqU2yxZ.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const g=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`,A=d.textarea`
  ${({theme:t})=>`
    ${t.fontStyles.pSmall}

    background-color: ${t.palette.surface.contrast};
    border: 1px solid ${t.palette.border.default};

    color: ${t.palette.content.default};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: 1px solid ${t.palette.primary.default};
      border: 1px solid transparent;
    }
  `}
`,T=({label:t,onChange:n,dataTestId:x,name:f,value:e,maxLength:l=120})=>{const[i,c]=a.useState(0),[u,r]=a.useState(!1),m=()=>r(!0),h=()=>i>0?r(!0):r(!1),y=p=>{c(p.target.value.length),n&&n(p)};a.useEffect(()=>{e&&(r(!0),c(e.length))},[e]);const o=x??`${t.replaceAll(" ","-").toLocaleLowerCase()}-textarea`;return s.jsxs(g,{"data-testid":o,children:[s.jsx(S,{htmlFor:o,isActive:u,children:t}),s.jsx(A,{id:o,maxLength:l,name:f||o,onBlur:h,onChange:y,onFocus:m,value:e}),s.jsxs($,{color:"content.medium",element:"span",fontStyles:"pXSmall",children:[l-i," Characters"]})]})},E=T;export{E as T};
