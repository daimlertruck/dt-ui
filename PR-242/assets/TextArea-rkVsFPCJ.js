import{j as s}from"./jsx-runtime-CKrituN3.js";import{L as S}from"./LabelField-WcP_84OW.js";import{T as $}from"./Typography-Bej0cKKK.js";import{r as a}from"./index-CBqU2yxZ.js";import{n as p}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const g=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`,A=p.textarea`
  ${({theme:e})=>`
    ${e.fontStyles.pSmall}

    background-color: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};

    color: ${e.palette.content.body};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: 1px solid ${e.palette.primary.default};
      border: 1px solid transparent;
    }
  `}
`,T=({label:e,onChange:n,dataTestId:x,name:f,value:t,maxLength:l=120})=>{const[i,c]=a.useState(0),[u,r]=a.useState(!1),m=()=>r(!0),h=()=>i>0?r(!0):r(!1),y=d=>{c(d.target.value.length),n&&n(d)};a.useEffect(()=>{t&&(r(!0),c(t.length))},[t]);const o=x??`${e.replaceAll(" ","-").toLocaleLowerCase()}-textarea`;return s.jsxs(g,{"data-testid":o,children:[s.jsx(S,{forId:o,isActive:u,children:e}),s.jsx(A,{id:o,maxLength:l,name:f||o,onBlur:h,onChange:y,onFocus:m,value:t}),s.jsxs($,{color:"content.secondary",element:"span",fontStyles:"pXSmall",children:[l-i," Characters"]})]})},E=T;export{E as T};
