import{k as i}from"./index-DTm2hTi9.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const p=i`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,n={"extra-small":"14px",small:"28px",medium:"42px",large:"50px","extra-large":"58px"},e={"extra-small":"2px",small:"4px",medium:"4px",large:"4px","extra-large":"4px"},o=r=>({positive:{main:r.palette.primary.default,background:r.palette.primary.contrast},negative:{main:r.palette.content.contrast,background:r.palette.content.medium}}),d=s.div`
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
