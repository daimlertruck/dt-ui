import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{T as s}from"./z-index-zwCKGdcf.js";const l=t.table`
  ${({isFixed:o})=>`
    table-layout: ${o?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,e=t.tbody`
  ${({theme:o})=>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${o.spacing["3xs"]};
    
    tr:hover {
      background-color: ${o.palette.neutralLight_100};
    }

    @media (min-width: ${o.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${o.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`,p=t.thead`
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
          background-color: ${o.colors.white};
          z-index: ${s};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,$=t.tr`
  ${({theme:o,selectableRow:a=!0})=>`
    display: block;
    padding: ${o.spacing.xs};
    width: 100%;
    background-color: ${o.colors.white};
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
`,b=t.th`
  ${({theme:o,textAlign:a})=>`
    text-align: ${a};
    color: ${o.palette.textPrimary};
    padding: 0 ${o.spacing["2xs"]} ${o.spacing["2xs"]};
    ${o.fontStyles.button3};
  `}
`,c=t.td`
  ${({theme:o,columnWidth:a,textAlign:r,isVisible:d})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${o.spacing["3xs"]};
    padding: ${o.spacing["3xs"]} ${o.spacing["2xs"]};
    word-break: break-word;
    text-align: ${r};
    color: ${o.palette.textSecondary};
    ${o.fontStyles.body2};

    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${o.palette.textPrimary};
        word-break: keep-all;
        ${o.fontStyles.button2};
      }
    }

    &:first-of-type {
      color: ${o.palette.textPrimary};
      border-bottom: 1px solid ${o.palette.neutral};
      padding-top: 0;
      ${o.fontStyles.body2Bold};
    }

    @media (min-width: ${o.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${o.palette.neutral};
      padding: ${o.spacing["2xs"]};
      max-width: 0;
      ${o.fontStyles.body2};
      
      &:first-of-type {
        color: ${o.palette.textSecondary};
        padding-top: ${o.spacing["2xs"]};
        border-bottom: none;
        ${o.fontStyles.body2};
      }

      &:before {
        display: none;
      }
      
      white-space: nowrap;
      overflow: ${d?"visible":"hidden"};
      text-overflow: ellipsis;

      ${!!a&&`
        white-space: unset;
        word-break: break-word;
        width: ${a};
        max-width: ${a};
      `}
    }

  `}
`;export{b as C,$ as R,l as T,p as a,e as b,c};
