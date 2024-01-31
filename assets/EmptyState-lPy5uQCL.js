import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{T as i}from"./Typography-WNFydnn9.js";import{n as a}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const r=a.div`
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
`,d=a.div`
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
`,c=({children:t,dataTestId:e,style:s})=>n.jsx(r,{"data-testid":e??"empty-state",style:s,children:t});c.Content=({dataTestId:t,style:e,title:s,description:o})=>n.jsxs(d,{"data-testid":t??"empty-state-content",style:e,children:[n.jsx(i,{color:"textPrimary",element:"h2",fontStyles:"h4",children:s}),n.jsx(i,{color:"textSecondary",fontStyles:"body1",children:o})]});export{c as E};
