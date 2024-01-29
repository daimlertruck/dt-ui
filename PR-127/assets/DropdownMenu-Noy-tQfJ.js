import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{n as s}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{D as i}from"./z-index-n4kBdkOc.js";const p=o=>r.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...o,children:r.jsx("path",{d:"M1.41 0.0898438L6 4.66984L10.59 0.0898438L12 1.49984L6 7.49984L0 1.49984L1.41 0.0898438Z",fill:"currentColor"})}),w=o=>r.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...o,children:r.jsx("path",{d:"M10.59 7.91016L6 3.33016L1.41 7.91016L1.23266e-07 6.50016L6 0.500156L12 6.50016L10.59 7.91016Z",fill:"currentColor"})}),e=s.ul`
  ${({theme:o})=>`
    background: ${o.palette.base.default};
    border: 1px solid ${o.palette.border.default};
    border-radius: ${o.shape.dropdown};
    width: 100%;
    padding:${o.spacing["4xs"]} ${o.spacing.none};
    margin: ${o.spacing["6xs"]} ${o.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${i};
    max-height: 180px;
    overflow: auto;
  `}
`,u=({children:o,dataTestId:n,style:t})=>r.jsx(e,{"data-testid":`${n?n+"-":""}menu`,style:t,children:o});export{u as D,p as O,w as a};
