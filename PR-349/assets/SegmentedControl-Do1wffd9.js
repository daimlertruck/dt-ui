import{j as o}from"./jsx-runtime-BTCK_S7S.js";import{I as b}from"./Icon-_on6jYg0.js";import{T as u}from"./Tooltip-BxV2U-93.js";import{r as d}from"./index-CBqU2yxZ.js";import{n as g}from"./emotion-styled.browser.esm-DQrX-Ye0.js";const $={selectedValue:void 0,showLabel:!0,onChange:()=>null,setSelectedValue:()=>null},x=d.createContext($),S=()=>{const t=d.useContext(x);if(!t)throw new Error("useSegmentedControlContext must be used within a SegmentedControlProvider");return t},f=({children:t,selectedValue:e,showLabel:n,onChange:r})=>{const[s,l]=d.useState(e);d.useEffect(()=>{l(e)},[e]);const c=a=>{r(a),l(a)};return o.jsx(x.Provider,{value:{selectedValue:s,setSelectedValue:c,showLabel:n,onChange:r},children:t})},C=g.button`
  ${({theme:t,showLabel:e})=>`
    ${t.fontStyles.body2};

    display: flex;
    align-items: center;
    gap: ${t.spacing["5xs"]};
    cursor: pointer;
    background-color: ${t.palette.surface.contrast};
    color: ${t.palette.content.default};
    border: none;
    border-radius: ${t.shape.button};
    padding: ${t.spacing["5xs"]} ${t.spacing[e?"3xs":"5xs"]};

    &:not(:disabled):hover {
      background-color: ${t.palette.primary.light};
      color: ${t.palette.content.default};

      i {
        color: ${t.palette.content.dark};
      }
    }

    &:not(:disabled)[aria-pressed="true"] {
      background-color: ${t.palette.primary.default};
      color: ${t.palette.content.contrast};

      i {
        color: ${t.palette.content.contrast};
      }
    }

    &:disabled {
        color: ${t.palette.content.light};
        cursor: not-allowed;

        i {
          color: ${t.palette.content.light};
        }
    }

  `}
`,m=({label:t,iconCode:e,value:n,disabled:r})=>{const{setSelectedValue:s,showLabel:l,selectedValue:c}=S(),a=c===n,i=l||!e,p=o.jsxs(C,{"aria-label":t,"aria-pressed":a?"true":"false",disabled:r,onClick:()=>s(n),showLabel:i,type:"button",children:[e?o.jsx(b,{code:e,size:"medium"}):null,i?t:null]});return i?p:o.jsxs(u,{children:[p,o.jsx(u.Content,{children:t})]})},y=g.div`
  ${({theme:t})=>`
    display: inline-flex;
    align-items: center;
    padding: ${t.spacing["5xs"]};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.segmentedControl};
  `}
`,j=({dataTestId:t,children:e,showLabel:n=!1,selectedValue:r,onChangeControl:s=()=>null,...l})=>o.jsx(f,{onChange:s,selectedValue:r,showLabel:n,children:o.jsx(y,{"data-testid":t,role:"group",...l,children:e})});j.Option=m;export{j as S};
