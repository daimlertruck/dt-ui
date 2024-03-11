import{j as a}from"./jsx-runtime-CKrituN3.js";import"./index-CaK6GE0f.js";import"./index-BtM5VmRH.js";import"./index-CBqU2yxZ.js";import{h as l}from"./hexToRgba-DXb69hOD.js";import{n as r}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{D as i}from"./DropdownOption.styled-Cl6xa8Lk.js";const p=r.ul`
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
