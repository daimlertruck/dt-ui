import{n as l}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const t=l.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:n="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}) {
      flex-direction: ${n==="horizontal"?"row":"column"}
    }
  `}
`;export{t as S};
