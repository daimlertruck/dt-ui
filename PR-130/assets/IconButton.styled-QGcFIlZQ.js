import{n}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const c=n.button`
  ${({theme:o,color:r,disabled:e})=>`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${o.colors.grey_200};

    &:hover {
      color: ${o.palette[r]};
    };
    
    ${e&&`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`;export{c as I};
