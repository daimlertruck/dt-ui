import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{A as f}from"./Avatar-_o5WF7ry.js";import{A as C}from"./Avatar.styled-0ZAnmqU-.js";import{T as R}from"./Tag-xrGueKzV.js";import{T as D,a as F,b as $,R as A,C as k,c as E}from"./Table.styled-6lrBlWr-.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Tooltip-X3IACSlU.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";import"./z-index-zwCKGdcf.js";import"./typography-TwTgPMES.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";const c=({children:n,dataTestId:e,isFixed:r=!1})=>a.jsx(D,{"data-testid":e??"table",isFixed:r,children:n}),y=({children:n,hasFixedHeader:e=!1})=>a.jsx(F,{hasFixedHeader:e,children:n}),j=({children:n})=>a.jsx($,{children:n}),i=({children:n,onClick:e})=>{const r=!!e;return a.jsx(A,{...e&&{onClick:e},selectableRow:r,children:n})},g=({children:n,textAlign:e="left"})=>a.jsx(k,{textAlign:e,children:n}),w=({children:n,columnWidth:e,dataLabel:r,textAlign:o="left"})=>a.jsx(E,{columnWidth:e,"data-label":r,textAlign:o,children:n}),re={title:"Data Display/Table",component:c},l=["Name","Email","Role","Status"],d=[["Thomas Morse","thomas.morse@myhugecompanynamem.com","Operator","yellow"],["Hanna Apple","hanna.apple@companysample.com","Admin","green"],["Marcus Klein","marcus.klein@companysample.com","Operator","green"],["Rick Thor","rick.thor@companysample.com","Admin","grey"]],S={Name:"200px",Status:"120px"},v=n=>a.jsxs("div",{style:{display:"flex"},children:[a.jsx(f,{title:n,type:C.TeamMember}),n]}),B=n=>a.jsx(R,{border:"rounded",color:n,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[n]}),H=(n,e)=>({Name:v(e),Status:B(e),Email:e,Role:e})[l[n]],N=({isFixed:n})=>a.jsxs(c,{isFixed:n,children:[a.jsx(y,{children:a.jsx(i,{children:l.map(e=>a.jsx(g,{children:e},`column-header-${e}`))})}),a.jsx(j,{children:d.map(e=>a.jsx(i,{children:e.map((r,o)=>a.jsx(w,{columnWidth:S[l[o]],dataLabel:l[o],children:H(o,r)},`column-${l[o]}-${r}`))},e.toString()))})]}),t=N.bind({});t.args={isFixed:!1};const W=({isFixed:n,hasFixedHeader:e})=>a.jsx("div",{style:{height:"200px",overflow:"auto"},children:a.jsxs(c,{isFixed:n,children:[a.jsx(y,{hasFixedHeader:e,children:a.jsx(i,{children:l.map(r=>a.jsx(g,{children:r},`column-header-${r}`))})}),a.jsx(j,{children:[...d,...d].map(r=>a.jsx(i,{children:r.map((o,m)=>a.jsx(w,{columnWidth:S[l[m]],dataLabel:l[m],children:H(m,o)},`column-${l[m]}-${o}`))},r.toString()))})]})}),s=W.bind({});s.args={isFixed:!0,hasFixedHeader:!0};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,T,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`({
  isFixed,
  hasFixedHeader
}) => {
  return <div style={{
    height: '200px',
    overflow: 'auto'
  }}>
      <Table isFixed={isFixed}>
        <TableHead hasFixedHeader={hasFixedHeader}>
          <TableRow>
            {columns.map((column: string) => <ColumnHeader key={\`column-header-\${column}\`}>
                {column}
              </ColumnHeader>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...rows, ...rows].map((row: string[]) => <TableRow key={row.toString()}>
              {row.map((content: string, i: number) => <DataCell columnWidth={columnSizes[columns[i]]} dataLabel={columns[i]} key={\`column-\${columns[i]}-\${content}\`}>
                  {renderContent(i, content)}
                </DataCell>)}
            </TableRow>)}
        </TableBody>
      </Table>
    </div>;
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const oe=["Default","StickyHeaderExample"];export{t as Default,s as StickyHeaderExample,oe as __namedExportsOrder,re as default};
