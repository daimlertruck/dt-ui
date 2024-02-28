import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-4g5l5LRQ.js";import{h as s}from"./hexToRgba-fpzAFQCT.js";import{n as t}from"./emotion-styled.browser.esm-QTPHyGVR.js";const n=t.li`
  ${({theme:o,disabled:a})=>`
    ${o.fontStyles.body2}
    color: ${o.palette.content.body};
    list-style: none;
    padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${a?o.palette.base.light:o.palette.primary.light};
      cursor: ${a?"not-allowed":"pointer"};
    }

    ${a&&`
        color: ${o.palette.content.disabled};
        background: ${o.palette.base.light};
      `}
  `}
`,i=t.ul`
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
`,p=t(n)`
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
      background-color: ${s(o.palette.base.dark,.4)};
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
`,d=({children:o})=>l.jsx(i,{children:o});d.Item=({children:o,disabled:a,onClick:r})=>l.jsx(p,{disabled:a,onClick:r,role:"option",children:o});export{n as D,d as P};
