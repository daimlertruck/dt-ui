import{n as a}from"./emotion-styled.browser.esm-BiJbFOXH.js";const t={White:"white",Grey:"grey"},i=o=>({white:o.palette.surface.contrast,grey:o.palette.surface.default}),s=o=>({white:o.palette.primary.light,grey:o.palette.surface.medium}),e=o=>({white:`0px 1px 0px 0px ${o.palette.border.light}`,grey:"none"}),p=a.div`
  ${({theme:o,backgroundColor:n,isDisabled:d,isOpenState:r})=>`
    position: relative;
    width: 100%;
    min-width: 248px;
    background-color: ${i(o)[n]};
    border-radius: ${o.shape.accordion};
    box-shadow: ${r?"none":e(o)[n]};

    ${d?`
        background-color: ${i(o)[t.Grey]}
      `:`
        &:hover {
          background-color: ${s(o)[n]};
          box-shadow: ${o.shadows.xs}
        }
      `}
  `}
`,l=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;

  ${({theme:o})=>`
    background-color: ${o.palette.secondary.medium}
    border-radius: ${o.shape.accordion};
  `}
`,g=a.header`
  ${({theme:o,isDisabled:n})=>`
    padding: ${o.spacing["2xs"]};
    cursor: ${n?"not-allowed":"pointer"};
   
    @media (min-width: ${o.breakpoints.s}px) {
      padding: ${o.spacing.xs};
    }
  `}
`,$=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,y=a.div`
  width: 100%;
`,x=a.div`
  width: 24px;
  height: 24px;

  ${({theme:o})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${o.palette.content.medium}
  `}
`,u=a.div`
  ${({theme:o,isOpenState:n})=>`
    padding: ${o.spacing["2xs"]};
    padding-top: ${o.spacing.none};
    
    display: ${n?"block":"none"};

    @media only screen and (min-width: ${o.breakpoints.s}px) {
      padding: ${o.spacing.xs};
      padding-top: ${o.spacing.none};
    }
  `}
`;export{p as A,u as B,y as C,l as D,$ as F,g as H,x as I,t as a};
