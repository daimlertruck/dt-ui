import{j as u}from"./jsx-runtime-CKrituN3.js";import{n as b}from"./emotion-styled.browser.esm-CRzct0lr.js";const f=b.button`
  ${({theme:t,color:o,disabled:n})=>`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${t.palette.content.body};

    &:hover {
      color: ${o==="default"?t.palette.content.heading:t.palette[o].default};
    };
    
    ${n&&`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`,x=({children:t,dataTestId:o,isDisabled:n,ariaLabel:a,onClick:r,onMouseDown:l,onMouseUp:i,onMouseOver:p,onMouseEnter:s,color:c="primary"})=>{const d=e=>{e.preventDefault(),e.stopPropagation(),r&&r(e)};return u.jsx(f,{"aria-label":a,color:c,"data-testid":o||"icon-button",disabled:n,onClick:d,onMouseDown:l,onMouseEnter:s,onMouseOver:p,onMouseUp:i,children:t})};export{x as I};
