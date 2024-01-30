import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{n as s}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./TooltipProvider-TuayAtLY.js";import"./index-lb1Yyg-x.js";import"./index-4g5l5LRQ.js";import{h as a}from"./hexToRgba-fpzAFQCT.js";import{D as p}from"./DropdownOption.styled-jNXaeOqf.js";const n=s.ul`
  ${({theme:o})=>`
    padding: ${o.spacing.none};
    background: ${o.colors.white};
    box-shadow: ${o.shadows[4]};
    border-radius: ${o.spacing.xxsmall};
    color: ${o.colors.grey_300};
    position: absolute;
    right: 0;
    z-index: 1;
  `}
`,t=s(p)`
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
      background-color: ${a(o.colors.grey_90,.4)};
    }

    &:first-of-type {
      border-radius:  ${o.spacing.xxsmall} ${o.spacing.xxsmall} 0px 0px;
    }

    &:last-child {
      font-weight: bold;

      &:hover {
        background: ${o.palette.primary};
        color: ${o.colors.white};
        cursor: pointer;
        border-radius: 0px 0px ${o.spacing.xxsmall} ${o.spacing.xxsmall};

        path {
          fill: ${o.colors.white};
        }
      }
    }
  `}
`,c=({children:o})=>r.jsx(n,{children:o});c.Item=({children:o,disabled:i,onClick:l})=>r.jsx(t,{disabled:i,onClick:l,role:"option",children:o});export{c as P};
