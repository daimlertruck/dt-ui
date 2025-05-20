import{j as s}from"./jsx-runtime-DMAvRu52.js";import{n as p}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f=p.button(({theme:t,disabled:o,variant:e="default"})=>{const n=e==="default",r=()=>n?t.palette.content.light:t.palette.content.default,l=()=>o?r():n?t.palette.content.default:t.palette.content.contrast,a=()=>o?r():n?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${o?"not-allowed":"pointer"};

      i {
        color: ${l()};

        &:hover, &:active {
          color: ${a()};
        }
      }
    `}),x=({children:t,dataTestId:o,isDisabled:e,ariaLabel:n,variant:r,style:l,onClick:a,...u})=>{const i=c=>{e||(c.preventDefault(),c.stopPropagation(),a&&a(c))};return s.jsx(f,{"aria-label":n,"data-testid":o||"icon-button",disabled:e,onClick:i,style:l,variant:r,...u,children:t})};export{x as I};
