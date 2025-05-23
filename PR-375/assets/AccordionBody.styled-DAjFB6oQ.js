import{n as t}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const s=t.div`
  ${({theme:o,hasBackground:a,isDisabled:i})=>`
    position: relative;
    width: 100%;
    background-color: ${a?o.palette.surface.light:"transparent"};
    border-bottom: 1px solid ${o.palette.border.default};

    ${i?`
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
`,d=t.header`
  ${({theme:o})=>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${o.spacing["4xs"]};
    padding: ${o.spacing["2xs"]};
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }
  `}
`,e=t.div`
  ${({theme:o,isOpenState:a})=>`
    display: grid;
    grid-template-rows: ${a?"1fr":"0fr"};
    transition: all 0.3s ease-in-out;
    padding: 0 ${o.spacing["2xs"]} ${o.spacing["2xs"]};
    padding-bottom: ${a?o.spacing["2xs"]:0};
      
    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `}
`;export{s as A,e as B,d as H};
