import{j as e}from"./jsx-runtime-CKrituN3.js";import{A as b}from"./Avatar-B4B3zA8Z.js";import{A as v,a as I}from"./Avatar.styled-JkSIcOpu.js";import{T as E}from"./Tag-D-KFSfjp.js";import{T as p}from"./Tooltip-KP-5GUKU.js";import{I as g}from"./InfoOutline-Bzo0hciy.js";import{T as o}from"./Table-D6CIzQsi.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./Close-CGHfkSk3.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Portal-U_0UEmB3.js";import"./z-index-Bx-k-k_v.js";const i=["Name","Email","Role","Rol","Ro","Status"],w=[["Thomas Morse","thomas.morse@myhugecompanynamem.com","Operator","Operator","Operator","yellow"],["Hanna Apple","hanna.apple@companysample.com","Admin","Admin","Admin","green"],["Marcus Klein","marcus.klein@companysample.com","Operator","Operator","Operator","green"],["Rick Thor","rick.thor@companysample.com","Admin","Admin","Admin","grey"]],j={Name:"200px",Status:"120px"},O=s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(b,{size:v.Small,title:s,type:I.Primary}),s]}),A=s=>e.jsx(E,{border:"rounded",color:s,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[s]}),S=(s,a)=>({Name:O(a),Email:a,Role:a,Ro:a,Status:A(a)})[i[s]],U={title:"Data Display/Table",component:o,render:({isFixed:s,hasFixedHeader:a})=>e.jsx("div",{style:{...a&&{height:"200px",overflow:"auto"}},children:e.jsxs(o,{isFixed:s,children:[e.jsx(o.Head,{hasFixedHeader:a,children:e.jsx(o.Row,{children:i.map(n=>e.jsx(o.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(p,{children:[e.jsx(g,{height:16,width:16}),e.jsx(p.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(o.Body,{children:w.map(n=>e.jsx(o.Row,{children:n.map((l,t)=>e.jsx(o.DataCell,{columnWidth:j[i[t]],children:S(t,l)},`column-${i[t]}-${l}`))},n.toString()))})]})})},m={args:{isFixed:!1,hasFixedHeader:!1}},r=["Name"],d=["Status","Ro"],h=s=>r.indexOf(s)?d.length===d.indexOf(s)+1:r.length===r.indexOf(s)+1,c={title:"Table",component:o,render:({isFixed:s,hasFixedHeader:a})=>e.jsx("div",{style:{...a&&{height:"200px",overflow:"auto"}},children:e.jsxs(o,{isFixed:s,children:[e.jsx(o.Head,{hasFixedHeader:a,children:e.jsx(o.Row,{children:i.map(n=>e.jsx(o.ColumnHeader,{dataTestId:"test",showBoxShadow:h(n),sticky:!!r.find(l=>n===l),stickyColumnIndex:r.indexOf(n),stickyEnd:!!d.find(l=>n===l),stickyEndColumnIndex:d.indexOf(n),children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(p,{children:[e.jsx(g,{height:16,width:16}),e.jsx(p.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(o.Body,{children:w.map(n=>e.jsx(o.Row,{children:n.map((l,t)=>e.jsx(o.DataCell,{columnWidth:j[i[t]],showBoxShadow:h(i[t]),sticky:!!r.find(u=>i[t]===u),stickyColumnIndex:r.indexOf(i[t]),stickyEnd:!!d.find(u=>i[t]===u),stickyEndColumnIndex:d.indexOf(i[t]),children:S(t,l)},`column-${i[t]}-${l}`))},n.toString()))})]})})};var x,y,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,T,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  title: 'Table',
  component: Table,
  render: ({
    isFixed,
    hasFixedHeader
  }) => <div style={{
    ...(hasFixedHeader && {
      height: '200px',
      overflow: 'auto'
    })
  }}>
      <Table isFixed={isFixed}>
        <Table.Head hasFixedHeader={hasFixedHeader}>
          <Table.Row>
            {columns.map((column: string) => <Table.ColumnHeader dataTestId='test' key={\`column-header-\${column}\`} showBoxShadow={shouldShowBoxShadow(column)} sticky={!!stickyColumns.find(stickyColumn => column === stickyColumn)} stickyColumnIndex={stickyColumns.indexOf(column)} stickyEnd={!!stickyEndColumns.find(stickyColumn => column === stickyColumn)} stickyEndColumnIndex={stickyEndColumns.indexOf(column)}>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}>
                  {column}
                  {column === 'Status' && <Tooltip>
                      <InfoOutlineIcon height={16} width={16} />
                      <Tooltip.Content>
                        Pending: Yellow | Active: Green | Deactivated: Grey
                      </Tooltip.Content>
                    </Tooltip>}
                </div>
              </Table.ColumnHeader>)}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row: string[]) => <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => <Table.DataCell columnWidth={columnSizes[columns[i]]} key={\`column-\${columns[i]}-\${content}\`} showBoxShadow={shouldShowBoxShadow(columns[i])} sticky={!!stickyColumns.find(stickyColumn => columns[i] === stickyColumn)} stickyColumnIndex={stickyColumns.indexOf(columns[i])} stickyEnd={!!stickyEndColumns.find(stickyColumn => columns[i] === stickyColumn)} stickyEndColumnIndex={stickyEndColumns.indexOf(columns[i])}>
                  {renderContent(i, content)}
                </Table.DataCell>)}
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const X=["Default","TableWithPinnedColumns"];export{m as Default,c as TableWithPinnedColumns,X as __namedExportsOrder,U as default};
