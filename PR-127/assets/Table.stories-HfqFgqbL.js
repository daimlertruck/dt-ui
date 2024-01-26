import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{A as u}from"./Avatar-7jBlCUdH.js";import{A as T}from"./Avatar.styled-wGWCdTJL.js";import{T as b}from"./Tag-H0w2aQ53.js";import{T as x,a as y,b as h,R as j,C as g,c as S}from"./Table.styled-diSp-w12.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TooltipProvider-e8-_owln.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Tooltip-UV5WzYwK.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-n4kBdkOc.js";import"./Close-ix0QOkL6.js";const d=({children:e,dataTestId:a,isFixed:r})=>o.jsx(x,{"data-testid":a??"table",isFixed:r,children:e}),w=({children:e})=>o.jsx(y,{children:e}),f=({children:e})=>o.jsx(h,{children:e}),s=({children:e,onClick:a})=>{const r=!!a;return o.jsx(j,{...a&&{onClick:a},selectableRow:r,children:e})},R=({children:e,textAlign:a="left"})=>o.jsx(g,{textAlign:a,children:e}),A=({children:e,columnWidth:a,dataLabel:r,textAlign:t="left",isVisible:p})=>o.jsx(S,{columnWidth:a,"data-label":r,isVisible:p,textAlign:t,children:e}),Y={title:"Data Display/Table",component:d},n=["Name","Email","Role","Status"],C=[["Thomas Morse","thomas.morse@myhugecompanynamem.com","Operator","yellow"],["Hanna Apple","hanna.apple@companysample.com","Admin","green"],["Marcus Klein","marcus.klein@companysample.com","Operator","green"],["Rick Thor","rick.thor@companysample.com","Admin","grey"]],D={Name:"200px",Status:"120px"},H=e=>o.jsxs("div",{style:{display:"flex"},children:[o.jsx(u,{title:e,type:T.TeamMember}),e]}),E=e=>o.jsx(b,{border:"rounded",color:e,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[e]}),$=(e,a)=>({Name:H(a),Status:E(a),Email:a,Role:a})[n[e]],B=({isFixed:e})=>o.jsxs(d,{isFixed:e,children:[o.jsx(w,{children:o.jsx(s,{children:n.map(a=>o.jsx(R,{children:a},`column-header-${a}`))})}),o.jsx(f,{children:C.map(a=>o.jsx(s,{children:a.map((r,t)=>o.jsx(A,{columnWidth:D[n[t]],dataLabel:n[t],children:$(t,r)},`column-${n[t]}-${r}`))},a.toString()))})]}),l=B.bind({});l.args={isFixed:!1};var m,i,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const Z=["Default"];export{l as Default,Z as __namedExportsOrder,Y as default};
