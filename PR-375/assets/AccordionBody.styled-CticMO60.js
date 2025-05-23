import{n as e}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const s=e.div`
  ${({theme:o,hasBackground:t,isDisabled:a})=>`
    position: relative;
    width: 100%;
    background-color: ${t?o.palette.surface.light:"transparent"};
    border-bottom: 1px solid ${o.palette.border.default};

    ${a?`
          background-color: ${o.palette.surface.light};
          color: ${o.palette.content.light};

          * {
            cursor: not-allowed;
            color: inherit;
          }
        `:`
          &:hover {
            background-color: ${o.palette.surface.default};
            box-shadow: ${o.shadows.xs}
          }
        `}
  `}
`,i=e.header`
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
`,d=e.div`
  ${({theme:o,isOpenState:t})=>`
    display: grid;
    grid-template-rows: ${t?"1fr":"0fr"};
    transition: grid-template-rows 0.3s ease-in-out, padding 0.3s ease-in-out;
    padding: 0 ${o.spacing["2xs"]} ${t?o.spacing["2xs"]:0};
      
    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `}
`;export{s as A,d as B,i as H};
