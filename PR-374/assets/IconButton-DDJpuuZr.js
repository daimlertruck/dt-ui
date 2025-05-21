import{j as p}from"./jsx-runtime-DMAvRu52.js";import{n as f}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const d={"extra-small":`
    font-size: 12px;
  `,small:`
    font-size: 16px;
  `,medium:`
    font-size: 20px;
  `,large:`
    font-size: 24px;
  `,"extra-large":`
    font-size: 32px;
  `},x=f.button(({theme:t,disabled:o,variant:n="default",size:a="large"})=>{const e=n==="default",r=()=>o?e?t.palette.content.light:t.palette.content.default:e?t.palette.content.default:t.palette.content.contrast,l=e?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${o?"not-allowed":"pointer"};

      i {
        ${d[a]};
        color: ${r()};
      }

      &:not(:disabled) > i {
        &:hover, &:active {
          color: ${l};
        }
      }
    `}),b=({children:t,dataTestId:o,isDisabled:n,ariaLabel:a,variant:e,style:r,size:l,onClick:i,...s})=>{const u=c=>{n||(c.preventDefault(),c.stopPropagation(),i&&i(c))};return p.jsx(x,{"aria-label":a,"data-testid":o||"icon-button",disabled:n,onClick:u,size:l,style:r,variant:e,...s,children:t})};export{b as I};
