import{k as t}from"./emotion-react.browser.esm-7R29exhq.js";import{n as e}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const s=t`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,o={small:"32px",medium:"48px",large:"56px","extra-large":"64px"},a=r=>({positive:{main:r.palette.primary,background:r.palette.neutral},negative:{main:r.palette.primary,background:r.colors.white}}),l=e.div`
  ${({theme:r,size:n,colorScheme:i})=>`
    width: ${o[n]};
    height: ${o[n]};
    border: 2px solid ${a(r)[i].background};
    border-radius: 50%;
    border-top: 2px solid ${a(r)[i].main};
  `};
  animation: ${s} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;export{l as S};
