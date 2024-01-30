import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{T as i}from"./Typography-66na6NNO.js";import{n as s}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const a=s.div`
  ${({theme:t})=>`
    padding: ${t.spacing.l} ${t.spacing.s};
    background-color: ${t.palette.base.light};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${t.shape.emptyState};
    border: 1px dashed ${t.palette.border.default};
    width: 100%;
    height: 100%;
    gap: ${t.spacing.xs};
    
    @media only screen and (min-width: ${t.breakpoints.s}) {
      padding: ${t.spacing["2xl"]} ${t.spacing["5xl"]};
    }
  `}
`,o=s.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({theme:t})=>`
      gap: ${t.spacing["4xs"]};

      @media only screen and (min-width: ${t.breakpoints.s}) {
        gap: ${t.spacing["3xs"]};
      }
  `}
`,d=({children:t,dataTestId:e})=>n.jsx(a,{"data-testid":e??"empty-state",children:t});d.Content=({title:t,description:e})=>n.jsxs(o,{children:[n.jsx(i,{color:"content.heading",element:"h2",fontStyles:"h4",children:t}),n.jsx(i,{color:"content.body",fontStyles:"body1",children:e})]});export{d as E};
