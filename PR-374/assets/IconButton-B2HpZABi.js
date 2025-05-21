import{j as u}from"./jsx-runtime-DMAvRu52.js";import{n as p}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f={"extra-small":`
    font-size: 12px;
  `,small:`
    font-size: 16px;
  `,medium:`
    font-size: 20px;
  `,large:`
    font-size: 24px;
  `,"extra-large":`
    font-size: 32px;
  `},d=p.button(({theme:t,disabled:o,variant:n="default",size:r="large"})=>{const e=n==="default",l=()=>o?e?t.palette.content.light:t.palette.content.default:e?t.palette.content.default:t.palette.content.contrast,a=e?t.palette.accent.default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${o?"not-allowed":"pointer"};

      i {
        ${f[r]};
        color: ${l()};
      }

      &:not(:disabled) > i {
        &:hover, &:active {
          color: ${a};
        }
      }
    `}),m=({children:t,dataTestId:o,isDisabled:n,ariaLabel:r,variant:e,size:l,onClick:a,...i})=>{const s=c=>{n||(c.preventDefault(),c.stopPropagation(),a&&a(c))};return u.jsx(d,{"aria-label":r,"data-testid":o||"icon-button",disabled:n,onClick:s,size:l,variant:e,...i,children:t})};export{m as I};
