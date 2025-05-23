import{n as e}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const n=e.div`
  ${({theme:o,hasBackground:t,isDisabled:r,hasBorder:a})=>`
    position: relative;
    width: 100%;
    background-color: ${t?o.palette.surface.light:"transparent"};
    border-bottom: ${a?`1px solid ${o.palette.border.default}`:"none"};

    ${r?`
          background-color: ${o.palette.surface.light};
          color: ${o.palette.content.light};

          * {
            cursor: not-allowed;
            user-select: none;
            color: inherit;
          }
        `:`
          &:hover {
            background-color: ${o.palette.surface.default};
            box-shadow: ${o.shadows.xs};
          }
        `}
  `}
`,l=e.header`
  ${({theme:o})=>`
    ${o.fontStyles.h6};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${o.spacing["4xs"]};
    padding: ${o.spacing["2xs"]};
    cursor: pointer;
    user-select: none;
    color: ${o.palette.surface.dark};

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }
  `}
`,d=e.div`
  ${({theme:o,isOpenState:t})=>`
    ${o.fontStyles.body1};
    display: grid;
    grid-template-rows: ${t?"1fr":"0fr"};
    transition: grid-template-rows 0.3s ease-in-out, padding 0.3s ease-in-out;
    color: ${o.palette.content.dark};
    
    padding: 0 ${o.spacing["2xs"]} ${t?o.spacing["2xs"]:0};
      
    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `}
`;export{n as A,d as B,l as H};
