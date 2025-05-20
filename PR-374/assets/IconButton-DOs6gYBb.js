import{j as u}from"./jsx-runtime-DMAvRu52.js";import{n as d}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const p=d.button(({theme:t,disabled:o,variant:e="default"})=>{const n=e==="default",r=()=>o?n?t.palette.content.light:t.palette.content.default:n?t.palette.content.default:t.palette.content.contrast,a=n?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${o?"not-allowed":"pointer"};

      i {
        color: ${r()};
      }

      &:not(:disabled):hover > i,
      &:not(:disabled):active > i {
        color: ${a};
      }
    `}),x=({children:t,dataTestId:o,isDisabled:e,ariaLabel:n,variant:r,style:a,onClick:c,...i})=>{const s=l=>{e||(l.preventDefault(),l.stopPropagation(),c&&c(l))};return u.jsx(p,{"aria-label":n,"data-testid":o||"icon-button",disabled:e,onClick:s,style:a,variant:r,...i,children:t})};export{x as I};
