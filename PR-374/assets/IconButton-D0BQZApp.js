import{j as p}from"./jsx-runtime-DMAvRu52.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f=s.button(({theme:t,disabled:n,variant:e="default"})=>{const o=e==="default",r=()=>n?o?t.palette.content.light:t.palette.content.default:o?t.palette.content.default:t.palette.content.contrast,a=()=>n?o?t.palette.content.light:t.palette.content.default:o?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${n?"not-allowed":"pointer"};

      i {
        color: ${r()};

        &:hover, &:active {
          color: ${a()};
        }
      }
    `}),x=({children:t,dataTestId:n,isDisabled:e,ariaLabel:o,variant:r,style:a,onClick:c,...u})=>{const i=l=>{e||(l.preventDefault(),l.stopPropagation(),c&&c(l))};return p.jsx(f,{"aria-label":o,"data-testid":n||"icon-button",disabled:e,onClick:i,style:a,variant:r,...u,children:t})};export{x as I};
