import{k as e}from"./emotion-react.browser.esm-bvpyIPwg.js";import{n as i}from"./emotion-styled.browser.esm-yeljtSWm.js";const s=e`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,a={small:"32px",medium:"48px",large:"56px","extra-large":"64px"},o=r=>({positive:{main:r.palette.primary.default,background:r.palette.primary.contrast},negative:{main:r.palette.text.contrast,background:r.palette.text.secondary}}),l=i.div`
  ${({theme:r,size:t,colorScheme:n})=>`
    width: ${a[t]};
    height: ${a[t]};
    border: 2px solid ${o(r)[n].background};
    border-radius: 50%;
    border-top: 2px solid ${o(r)[n].main};
  `};
  animation: ${s} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;export{l as S};
