import{n}from"./emotion-styled.browser.esm-yeljtSWm.js";const a=n.button`
  ${({theme:o,color:t,disabled:e})=>`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${o.palette.text.body};

    &:hover {
      color: ${o.palette[t].default};
    };
    
    ${e&&`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`;export{a as I};
