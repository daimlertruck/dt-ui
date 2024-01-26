import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const a=o.button`
  ${({theme:t,color:e,disabled:n})=>`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${t.palette.content.body};

    &:hover {
      color: ${e==="default"?t.palette.content.heading:t.palette[e].default};
    };
    
    ${n&&`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`;export{a as I};
