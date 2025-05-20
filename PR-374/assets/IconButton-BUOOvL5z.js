import{j as s}from"./jsx-runtime-DMAvRu52.js";import{n as p}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const d=p.button(({theme:t,disabled:o,variant:e="default"})=>{const n=e==="default",r=()=>o?n?t.palette.content.light:t.palette.content.default:n?t.palette.content.default:t.palette.content.contrast,a=n?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${o?"not-allowed":"pointer"};

      i {
        color: ${r()};
      }

      &:not(:disabled) > i {
        &:hover, &:active {
          color: ${a};
        }
      }
    `}),x=({children:t,dataTestId:o,isDisabled:e,ariaLabel:n,variant:r,style:a,onClick:c,...i})=>{const u=l=>{e||(l.preventDefault(),l.stopPropagation(),c&&c(l))};return s.jsx(d,{"aria-label":n,"data-testid":o||"icon-button",disabled:e,onClick:u,style:a,variant:r,...i,children:t})};export{x as I};
