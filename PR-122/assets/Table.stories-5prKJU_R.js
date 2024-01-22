import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{A as p}from"./Avatar-sTG7EtXe.js";import{A as u}from"./Avatar.styled-F4C8p4pP.js";import{T}from"./Tag-qdEcNpvW.js";import{T as b,a as x,b as y,R as h,C as j,c as g}from"./Table.styled-JsMD2Sy8.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TooltipProvider-7kej92-2.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Tooltip-i_6FrtaN.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-Shn8SnzJ.js";import"./Close-ix0QOkL6.js";const d=({children:e,dataTestId:a,isFixed:r})=>o.jsx(b,{"data-testid":a??"table",isFixed:r,children:e}),S=({children:e})=>o.jsx(x,{children:e}),w=({children:e})=>o.jsx(y,{children:e}),s=({children:e,onClick:a})=>{const r=!!a;return o.jsx(h,{...a&&{onClick:a},selectableRow:r,children:e})},f=({children:e,textAlign:a="left"})=>o.jsx(j,{textAlign:a,children:e}),R=({children:e,columnWidth:a,dataLabel:r,textAlign:t="left"})=>o.jsx(g,{columnWidth:a,"data-label":r,textAlign:t,children:e}),X={title:"Data Display/Table",component:d},n=["Name","Email","Role","Status"],A=[["Thomas Morse","thomas.morse@myhugecompanynamem.com","Operator","yellow"],["Hanna Apple","hanna.apple@companysample.com","Admin","green"],["Marcus Klein","marcus.klein@companysample.com","Operator","green"],["Rick Thor","rick.thor@companysample.com","Admin","grey"]],C={Name:"200px",Status:"120px"},D=e=>o.jsxs("div",{style:{display:"flex"},children:[o.jsx(p,{title:e,type:u.TeamMember}),e]}),H=e=>o.jsx(T,{border:"rounded",color:e,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[e]}),E=(e,a)=>({Name:D(a),Status:H(a),Email:a,Role:a})[n[e]],$=({isFixed:e})=>o.jsxs(d,{isFixed:e,children:[o.jsx(S,{children:o.jsx(s,{children:n.map(a=>o.jsx(f,{children:a},`column-header-${a}`))})}),o.jsx(w,{children:A.map(a=>o.jsx(s,{children:a.map((r,t)=>o.jsx(R,{columnWidth:C[n[t]],dataLabel:n[t],children:E(t,r)},`column-${n[t]}-${r}`))},a.toString()))})]}),l=$.bind({});l.args={isFixed:!1};var m,i,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`({
  isFixed
}) => {
  return <Table isFixed={isFixed}>
      <TableHead>
        <TableRow>
          {columns.map((column: string) => <ColumnHeader key={\`column-header-\${column}\`}>
              {column}
            </ColumnHeader>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: string[]) => <TableRow key={row.toString()}>
            {row.map((content: string, i: number) => <DataCell columnWidth={columnSizes[columns[i]]} dataLabel={columns[i]} key={\`column-\${columns[i]}-\${content}\`}>
                {renderContent(i, content)}
              </DataCell>)}
          </TableRow>)}
      </TableBody>
    </Table>;
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const Y=["Default"];export{l as Default,Y as __namedExportsOrder,X as default};
