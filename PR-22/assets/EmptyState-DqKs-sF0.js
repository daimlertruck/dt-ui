import{j as n}from"./jsx-runtime-CB_V9I5Y.js";import{T as a}from"./Typography-BnMs8lqk.js";import{s as i}from"./emotion-styled.browser.esm-DuL_gwYN.js";const d=i.div`
  ${({theme:t})=>`
    padding: ${t.spacing.l} ${t.spacing.s};
    background-color: ${t.palette.surface.light};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${t.shape.emptyState};
    border: 1px dashed ${t.palette.border.default};
    width: 100%;
    height: 100%;
    gap: ${t.spacing.xs};
    
    @media only screen and (min-width: ${t.breakpoints.s}px) {
      padding: ${t.spacing["2xl"]} ${t.spacing["5xl"]};
    }
  `}
`,r=i.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({theme:t})=>`
      gap: ${t.spacing["4xs"]};

      @media only screen and (min-width: ${t.breakpoints.s}px) {
        gap: ${t.spacing["3xs"]};
      }
  `}
`,p=({children:t,dataTestId:e,style:s})=>n.jsx(d,{"data-testid":e??"empty-state",style:s,children:t});p.Content=({dataTestId:t,style:e,title:s,description:o})=>n.jsxs(r,{"data-testid":t??"empty-state-content",style:e,children:[n.jsx(a,{color:"content.dark",element:"h2",fontStyles:"h4",children:s}),n.jsx(a,{color:"content.default",fontStyles:"body1",children:o})]});export{p as E};
