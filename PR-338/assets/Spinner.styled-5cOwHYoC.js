import{k as i}from"./index-bKUcOz2Q.js";import{n as s}from"./emotion-styled.browser.esm-B1le5_Hy.js";const p=i`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,n={"extra-small":"14px",small:"32px",medium:"48px",large:"56px","extra-large":"64px"},e={"extra-small":"1px",small:"1px",medium:"2px",large:"2px","extra-large":"2px"},o=r=>({positive:{main:r.palette.primary.default,background:r.palette.primary.contrast},negative:{main:r.palette.content.contrast,background:r.palette.content.medium}}),d=s.div`
  ${({theme:r,size:t,colorScheme:a})=>`
    width: ${n[t]};
    height: ${n[t]};
    border: ${e[t]} solid ${o(r)[a].background};
    border-radius: 50%;
    border-top: ${e[t]} solid ${o(r)[a].main};
  `};
  animation: ${p} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;export{d as S};
