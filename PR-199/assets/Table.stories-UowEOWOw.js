import{j as e}from"./jsx-runtime-CKrituN3.js";import{A as w}from"./Avatar-B4B3zA8Z.js";import{A as C,a as f}from"./Avatar.styled-JkSIcOpu.js";import{T as v}from"./Tag-D-KFSfjp.js";import{T as i}from"./Tooltip-KP-5GUKU.js";import{I as T}from"./InfoOutline-Bzo0hciy.js";import{T as t}from"./Table-Dkz2Q-F2.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./Close-CGHfkSk3.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Portal-U_0UEmB3.js";import"./z-index-Bx-k-k_v.js";const r=["Name","Email","Role","Status","Phone","Department","Location","Manager"],y=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York","Alice"],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco","Bob"],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles","Charlie"],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago","David"]],j={Name:"200px",Status:"120px"},D=n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(w,{size:C.Small,title:n,type:f.Primary}),n]}),S=n=>e.jsx(v,{border:"rounded",color:n,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[n]}),b=(n,o)=>{const a=r[n];return a!=="Name"&&a!=="Status"?o:{Name:D(o),Status:S(o)}[a]},K={title:"Data Display/Table",component:t,render:({isFixed:n,hasFixedHeader:o})=>e.jsx("div",{style:{...o&&{height:"200px",overflow:"auto"}},children:e.jsxs(t,{isFixed:n,children:[e.jsx(t.Head,{hasFixedHeader:o,children:e.jsx(t.Row,{children:r.map(a=>e.jsx(t.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[a,a==="Status"&&e.jsxs(i,{children:[e.jsx(T,{height:16,width:16}),e.jsx(i.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${a}`))})}),e.jsx(t.Body,{children:y.map(a=>e.jsx(t.Row,{children:a.map((d,m)=>e.jsx(t.DataCell,{columnWidth:j[r[m]],children:b(m,d)},`column-${r[m]}-${d}`))},a.toString()))})]})})},l={args:{isFixed:!1,hasFixedHeader:!1}},A=["Name"],I=["Status","Phone"],s={title:"Table",component:t,render:()=>e.jsx("div",{style:{width:"400px",overflow:"auto"},children:e.jsxs(t,{stickyColumns:A,stickyEndColumns:I,children:[e.jsx(t.Head,{children:e.jsx(t.Row,{children:r.map(n=>e.jsx(t.ColumnHeader,{columnName:n,dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(i,{children:[e.jsx(T,{height:16,width:16}),e.jsx(i.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(t.Body,{children:y.map(n=>e.jsx(t.Row,{children:n.map((o,a)=>e.jsx(t.DataCell,{columnName:r[a],columnWidth:j[r[a]],children:b(a,o)},`column-${r[a]}-${o}`))},n.toString()))})]})})};var c,p,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  title: 'Table',
  component: Table,
  render: () => <div style={{
    width: '400px',
    overflow: 'auto'
  }}>
      <Table stickyColumns={stickyColumns} stickyEndColumns={stickyEndColumns}>
        <Table.Head>
          <Table.Row>
            {columns.map((column: string) => <Table.ColumnHeader columnName={column} dataTestId='test' key={\`column-header-\${column}\`}>
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
              {row.map((content: string, i: number) => <Table.DataCell columnName={columns[i]} columnWidth={columnSizes[columns[i]]} key={\`column-\${columns[i]}-\${content}\`}>
                  {renderContent(i, content)}
                </Table.DataCell>)}
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Q=["Default","TableWithPinnedColumns"];export{l as Default,s as TableWithPinnedColumns,Q as __namedExportsOrder,K as default};
