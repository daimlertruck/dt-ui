import{j as p}from"./jsx-runtime-DMAvRu52.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const d=s.button(({theme:t,color:o,disabled:n,variant:r="default"})=>{const e=r==="default",a=()=>n?e?t.palette.content.light:t.palette.content.default:e?t.palette.content.default:t.palette.content.contrast,l=()=>n?e?t.palette.content.light:t.palette.content.default:e?o==="default"?t.palette.accent.default:t.palette[o].default:t.palette.accent.medium;return`
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: ${n?"not-allowed":"pointer"};

      i {
        color: ${a()};

        &:hover, &:active {
          color: ${l()};
        }
      }
    `}),b=({children:t,dataTestId:o,isDisabled:n,ariaLabel:r,color:e="default",variant:a="default",style:l,onClick:c,...i})=>{const f=u=>{n||(u.preventDefault(),u.stopPropagation(),c&&c(u))};return p.jsx(d,{"aria-label":r,color:e,"data-testid":o||"icon-button",disabled:n,onClick:f,style:l,variant:a,...i,children:t})};export{b as I};
