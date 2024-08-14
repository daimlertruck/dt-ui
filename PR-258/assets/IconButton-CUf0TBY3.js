import{j as u}from"./jsx-runtime-CKrituN3.js";import{n as f}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const b=f.button`
  ${({theme:t,color:o,disabled:n})=>`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${t.palette.content.default};

    &:hover {
      color: ${o==="default"?t.palette.content.dark:t.palette[o].default};
    };
    
    ${n&&`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`,y=({children:t,dataTestId:o,isDisabled:n,ariaLabel:a,onClick:r,onMouseDown:l,onMouseUp:i,onMouseOver:p,onMouseEnter:s,color:c="primary"})=>{const d=e=>{e.preventDefault(),e.stopPropagation(),r&&r(e)};return u.jsx(b,{"aria-label":a,color:c,"data-testid":o||"icon-button",disabled:n,onClick:d,onMouseDown:l,onMouseEnter:s,onMouseOver:p,onMouseUp:i,children:t})};export{y as I};
