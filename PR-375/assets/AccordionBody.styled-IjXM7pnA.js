import{n as t}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const a=t.div`
  ${({theme:o,hasBackground:e,isDisabled:r})=>`
    position: relative;
    width: 100%;
    background-color: ${e?o.palette.surface.light:"transparent"};
    border-bottom: 1px solid ${o.palette.border.default};

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
            box-shadow: ${o.shadows.xs}
          }
        `}
  `}
`,i=t.header`
  ${({theme:o})=>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${o.spacing["4xs"]};
    padding: ${o.spacing["2xs"]};
    cursor: pointer;
    user-select: none;

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }
  `}
`,d=t.div`
  ${({theme:o,isOpenState:e})=>`
    display: grid;
    grid-template-rows: ${e?"1fr":"0fr"};
    transition: grid-template-rows 0.3s ease-in-out, padding 0.3s ease-in-out;
    padding: 0 ${o.spacing["2xs"]} ${e?o.spacing["2xs"]:0};
      
    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `}
`;export{a as A,d as B,i as H};
