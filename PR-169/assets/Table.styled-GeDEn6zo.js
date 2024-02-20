import"./jsx-runtime-vNq4Oc-g.js";import"./index-LonLnBAn.js";import"./index-jmm5gWkb.js";import"./Icon.styled-_wbYwLP-.js";import{T as n}from"./z-index-zwCKGdcf.js";import"./index-4g5l5LRQ.js";import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const $=t.table`
  ${({isFixed:o})=>`
    table-layout: ${o?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,c=t.tbody`
  ${({theme:o})=>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${o.spacing["3xs"]};
    
    tr:hover {
      background-color: ${o.palette.base.light};
    }

    @media (min-width: ${o.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${o.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`,g=t.thead`
  ${({theme:o,hasFixedHeader:a})=>`
    display: none;

    tr {
      background: transparent;
    }

    @media (min-width: ${o.breakpoints.m}) {
      display: table-header-group;

      ${a&&`
          position: sticky;
          top: 0;
          background-color: ${o.palette.base.default};
          z-index: ${n};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,y=t.tr`
  ${({theme:o,selectableRow:a=!0})=>`
    display: block;
    padding: ${o.spacing.xs};
    width: 100%;
    background-color: ${o.palette.base.default};
    border-radius: ${o.radius["4xs"]};
    box-shadow: ${o.shadows.s};
    cursor: ${a?"pointer":"auto"};
    flex: 1;

    @media (min-width: ${o.breakpoints.m}) {
      display: table-row;
      border-radius: ${o.radius.none};
      box-shadow: ${o.shadows.none};
      padding: ${o.spacing.none};
    }

  `}
`,f=t.th`
  ${({theme:o,textAlign:a})=>`
    text-align: ${a};
    color: ${o.palette.content.heading};
    padding: 0 ${o.spacing["2xs"]} ${o.spacing["2xs"]};
    ${o.fontStyles.button3};
  `}
`,w=t.td`
  ${({theme:o,columnWidth:a,textAlign:d})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${o.spacing["3xs"]};
    padding: ${o.spacing["3xs"]} ${o.spacing["2xs"]};
    word-break: break-word;
    text-align: ${d};
    color: ${o.palette.content.body};
    ${o.fontStyles.body2};

    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${o.palette.content.heading};
        word-break: keep-all;
        ${o.fontStyles.button2};
      }
    }

    &:first-of-type {
      color: ${o.palette.content.heading};
      border-bottom: 1px solid ${o.palette.border.light};
      padding-top: 0;
      ${o.fontStyles.body2Bold};
    }

    @media (min-width: ${o.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${o.palette.border.light};
      padding: ${o.spacing["2xs"]};
      max-width: 0;
      ${o.fontStyles.body2};
      
      &:first-of-type {
        color: ${o.palette.content.body};
        padding-top: ${o.spacing["2xs"]};
        border-bottom: none;
        ${o.fontStyles.body2};
      }

      &:before {
        display: none;
      }
      
      word-break: break-word;

      ${!!a&&`
        white-space: unset;
        width: ${a};
        max-width: ${a};
      `}
    }

  `}
`;export{f as C,y as R,$ as T,g as a,c as b,w as c};
