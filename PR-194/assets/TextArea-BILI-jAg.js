import{j as s}from"./jsx-runtime-CKrituN3.js";import{L as S}from"./LabelField-DjWwJnuS.js";import{T as g}from"./Typography-IFB7dyWN.js";import{r as a}from"./index-CBqU2yxZ.js";import{n as p}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const A=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`,T=p.textarea`
  ${({theme:e})=>`
    ${e.fontStyles.pSmall}

    background-color: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};

    color: ${e.palette.content.body};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`,$=({label:e,onChange:n,dataTestId:x,name:f,value:t,maxLength:l=120})=>{const[c,i]=a.useState(0),[u,o]=a.useState(!1),m=()=>o(!0),h=()=>c>0?o(!0):o(!1),y=d=>{i(d.target.value.length),n&&n(d)};a.useEffect(()=>{t&&(o(!0),i(t.length))},[t]);const r=x??`${e.replaceAll(" ","-").toLocaleLowerCase()}-textarea`;return s.jsxs(A,{"data-testid":r,children:[s.jsx(S,{forId:r,isActive:u,children:e}),s.jsx(T,{id:r,maxLength:l,name:f||r,onBlur:h,onChange:y,onFocus:m,value:t}),s.jsxs(g,{color:"content.secondary",element:"span",fontStyles:"pXSmall",children:[l-c," Characters"]})]})},E=$;export{E as T};
