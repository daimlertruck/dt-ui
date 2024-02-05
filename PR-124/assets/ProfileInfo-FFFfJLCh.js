import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{n as r}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./typography-KYNEswLX.js";import"./index-lb1Yyg-x.js";import"./index-4g5l5LRQ.js";import{h as l}from"./hexToRgba-fpzAFQCT.js";import{D as i}from"./DropdownOption.styled-WDQMJYkj.js";const p=r.ul`
  ${({theme:o})=>`
    padding: ${o.spacing.none};
    background: ${o.palette.base.default};
    box-shadow: ${o.shadows[4]};
    border-radius: ${o.spacing.xxsmall};
    color: ${o.palette.content.body};
    position: absolute;
    right: 0;
    z-index: 1;
  `}
`,n=r(i)`
  ${({theme:o})=>`
    ${o.fontStyles.pSmall}
    padding: ${o.spacing.xsmall} ${o.spacing.gutter};
    display: grid;
    grid-template-columns: 20px auto;
    gap: 10px;
    align-items: center;

    svg {
      justify-self: center;
    }

    &[disabled] {
      opacity: 1;
      background-color: ${l(o.palette.base.dark,.4)};
    }

    &:first-of-type {
      border-radius:  ${o.spacing.xxsmall} ${o.spacing.xxsmall} 0px 0px;
    }

    &:last-child {
      font-weight: bold;

      &:hover {
        background: ${o.palette.primary.default};
        color: ${o.palette.primary.contrast};
        cursor: pointer;
        border-radius: 0px 0px ${o.spacing.xxsmall} ${o.spacing.xxsmall};

        path {
          fill: ${o.palette.base.default};
        }
      }
    }
  `}
`,d=({children:o})=>a.jsx(p,{children:o});d.Item=({children:o,disabled:t,onClick:s})=>a.jsx(n,{disabled:t,onClick:s,role:"option",children:o});export{d as P};
