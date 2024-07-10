import{j as o}from"./jsx-runtime-CKrituN3.js";import{I as x}from"./Icon-CHFlL13I.js";import{T as u}from"./Tooltip-DlKrV2pO.js";import{r as d}from"./index-CBqU2yxZ.js";import{n as g}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const $={selectedValue:void 0,showLabel:!0,onChange:()=>null,setSelectedValue:()=>null},b=d.createContext($),S=()=>{const e=d.useContext(b);if(!e)throw new Error("useSegmentedControlContext must be used within a SegmentedControlProvider");return e},C=({children:e,selectedValue:t,showLabel:n,onChange:r})=>{const[l,s]=d.useState(t);d.useEffect(()=>{s(t)},[t]);const i=a=>{r(a),s(a)};return o.jsx(b.Provider,{value:{selectedValue:l,setSelectedValue:i,showLabel:n,onChange:r},children:e})},f=g.button`
  ${({theme:e,showLabel:t})=>`
    ${e.fontStyles.body2};

    display: flex;
    align-items: center;
    gap: ${e.spacing["5xs"]};
    cursor: pointer;
    background-color: ${e.palette.base.default};
    color: ${e.palette.content.body};
    border: none;
    border-radius: ${e.shape.button};
    padding: ${e.spacing["5xs"]} ${e.spacing[t?"3xs":"5xs"]};

    &:not(:disabled):hover {
      background-color: ${e.palette.base.light};
      color: ${e.palette.content.heading};

      i {
        color: ${e.palette.content.heading};
      }
    }

    &:not(:disabled)[aria-pressed="true"] {
      background-color: ${e.palette.primary.default};
      color: ${e.palette.content.contrast};

      i {
        color: ${e.palette.content.contrast};
      }
    }

    &:disabled {
        color: ${e.palette.content.disabled};
        cursor: not-allowed;

        i {
          color: ${e.palette.content.disabled};
        }
    }

  `}
`,m=({label:e,iconCode:t,value:n,disabled:r})=>{const{setSelectedValue:l,showLabel:s,selectedValue:i}=S(),a=i===n,c=s||!t,p=o.jsxs(f,{"aria-label":e,"aria-pressed":a?"true":"false",disabled:r,onClick:()=>l(n),showLabel:c,type:"button",children:[t?o.jsx(x,{code:t,size:"medium"}):null,c?e:null]});return c?p:o.jsxs(u,{children:[p,o.jsx(u.Content,{children:e})]})},y=g.div`
  ${({theme:e})=>`
    display: inline-flex;
    align-items: center;
    padding: ${e.spacing["5xs"]};
    border: 1px solid ${e.palette.border.default};
    border-radius: ${e.shape.segmentedControl};
  `}
`,j=({dataTestId:e,children:t,showLabel:n=!1,selectedValue:r,onChangeControl:l=()=>null,...s})=>o.jsx(C,{onChange:l,selectedValue:r,showLabel:n,children:o.jsx(y,{"data-testid":e,role:"group",...s,children:t})});j.Option=m;export{j as S};
