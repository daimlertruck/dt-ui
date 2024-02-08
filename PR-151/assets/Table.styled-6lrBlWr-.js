import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{T as n}from"./z-index-zwCKGdcf.js";const r=t.table`
  ${({isFixed:a})=>`
    table-layout: ${a?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,l=t.tbody`
  ${({theme:a})=>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${a.spacing["3xs"]};
    
    tr:hover {
      background-color: ${a.palette.base.light};
    }

    @media (min-width: ${a.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`,e=t.thead`
  ${({theme:a,hasFixedHeader:o})=>`
    display: none;

    tr {
      background: transparent;
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-header-group;

      ${o&&`
          position: sticky;
          top: 0;
          background-color: ${a.palette.base.default};
          z-index: ${n};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,p=t.tr`
  ${({theme:a,selectableRow:o=!0})=>`
    display: block;
    padding: ${a.spacing.xs};
    width: 100%;
    background-color: ${a.palette.base.default};
    border-radius: ${a.radius["4xs"]};
    box-shadow: ${a.shadows.s};
    cursor: ${o?"pointer":"auto"};
    flex: 1;

    @media (min-width: ${a.breakpoints.m}) {
      display: table-row;
      border-radius: ${a.radius.none};
      box-shadow: ${a.shadows.none};
      padding: ${a.spacing.none};
    }

  `}
`,b=t.th`
  ${({theme:a,textAlign:o})=>`
    text-align: ${o};
    color: ${a.palette.content.heading};
    padding: 0 ${a.spacing["2xs"]} ${a.spacing["2xs"]};
    ${a.fontStyles.button3};
  `}
`,$=t.td`
  ${({theme:a,columnWidth:o,textAlign:d})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${a.spacing["3xs"]};
    padding: ${a.spacing["3xs"]} ${a.spacing["2xs"]};
    word-break: break-word;
    text-align: ${d};
    color: ${a.palette.content.body};
    ${a.fontStyles.body2};

    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${a.palette.content.heading};
        word-break: keep-all;
        ${a.fontStyles.button2};
      }
    }

    &:first-of-type {
      color: ${a.palette.content.heading};
      border-bottom: 1px solid ${a.palette.border.light};
      padding-top: 0;
      ${a.fontStyles.body2Bold};
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${a.palette.border.light};
      padding: ${a.spacing["2xs"]};
      max-width: 0;
      ${a.fontStyles.body2};
      
      &:first-of-type {
        color: ${a.palette.content.body};
        padding-top: ${a.spacing["2xs"]};
        border-bottom: none;
        ${a.fontStyles.body2};
      }

      &:before {
        display: none;
      }
      
      word-break: break-word;

      ${!!o&&`
        white-space: unset;
        width: ${o};
        max-width: ${o};
      `}
    }

  `}
`;export{b as C,p as R,r as T,e as a,l as b,$ as c};
