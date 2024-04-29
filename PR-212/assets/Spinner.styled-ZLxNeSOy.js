import{k as e}from"./index-B6w6wOUX.js";import{n as i}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const s=e`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,a={small:"32px",medium:"48px",large:"56px","extra-large":"64px"},o=n=>({positive:{main:n.palette.primary.default,background:n.palette.primary.contrast},negative:{main:n.palette.content.contrast,background:n.palette.content.secondary}}),l=i.div`
  ${({theme:n,size:r,colorScheme:t})=>`
    width: ${a[r]};
    height: ${a[r]};
    border: 2px solid ${o(n)[t].background};
    border-radius: 50%;
    border-top: 2px solid ${o(n)[t].main};
  `};
  animation: ${s} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;export{l as S};
