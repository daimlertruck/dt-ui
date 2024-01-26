import{n as a}from"./emotion-styled.browser.esm-MfHNkeEy.js";const e=a.div`
  ${({theme:i,gridTemplateColumns:n="repeat(3, minmax(0, 1fr))"})=>`
    padding: ${i.spacing.none};
    margin: ${i.spacing.none};
    display: grid;
    grid-gap: ${i.spacing.medium};
    padding-top: ${i.spacing.large};
    width: 100%;

    /* Small screen specific styles */
    @media only screen and (max-width: ${i.breakpoints.md}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  
    /* Mid screen specific styles */
    @media only screen and (min-width: ${i.breakpoints.md}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media only screen and (min-width: ${i.breakpoints.lg}) {
      grid-template-columns: ${n};
    }
  `}
`;export{e as G};
