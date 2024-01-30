import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{T as e}from"./Typography-WNFydnn9.js";import{n as i}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const a=i.div`
  ${({theme:t})=>`
    padding: ${t.spacing.l} ${t.spacing.s};
    background-color: ${t.colors.grey_10};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${t.shape.emptyState};
    border: 1px dashed ${t.colors.grey_30};
    width: 100%;
    height: 100%;
    gap: ${t.spacing.xs};
    
    @media only screen and (min-width: ${t.breakpoints.s}) {
      padding: ${t.spacing["2xl"]} ${t.spacing["5xl"]};
    }
  `}
`,o=i.div`
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
`,r=({children:t,dataTestId:s})=>n.jsx(a,{"data-testid":s??"empty-state",children:t});r.Content=({title:t,description:s})=>n.jsxs(o,{children:[n.jsx(e,{color:"textPrimary",element:"h2",fontStyles:"h4",children:t}),n.jsx(e,{color:"textSecondary",fontStyles:"body1",children:s})]});export{r as E};
