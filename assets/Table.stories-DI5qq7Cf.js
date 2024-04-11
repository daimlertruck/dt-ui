import{j as e}from"./jsx-runtime-CKrituN3.js";import{A as y}from"./Avatar-CyrhDGUy.js";import{A as b,a as w}from"./Avatar.styled-JkSIcOpu.js";import{T as v}from"./Tag-D-KFSfjp.js";import{T as s}from"./Tooltip-CJo5Yl2a.js";import{I as T}from"./InfoOutline-Bzo0hciy.js";import{T as o}from"./Table-CtZ67XCT.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./Close-CGHfkSk3.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Portal-U_0UEmB3.js";import"./z-index-Bx-k-k_v.js";const r=["Name","Email","Role","Status","Phone","Department","Location","Manager"],C=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York","Alice"],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco","Bob"],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles","Charlie"],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago","David"]],j={Name:"200px",Status:"120px"},D=n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{size:b.Small,title:n,type:w.Primary}),n]}),S=n=>e.jsx(v,{border:"rounded",color:n,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[n]}),f=(n,a)=>{const t=r[n];return t!=="Name"&&t!=="Status"?a:{Name:D(a),Status:S(a)}[t]},K={title:"Data Display/Table",component:o,render:({isFixed:n,hasFixedHeader:a})=>e.jsx("div",{style:{...a&&{height:"200px",overflow:"auto"}},children:e.jsxs(o,{isFixed:n,children:[e.jsx(o.Head,{hasFixedHeader:a,children:e.jsx(o.Row,{children:r.map(t=>e.jsx(o.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[t,t==="Status"&&e.jsxs(s,{children:[e.jsx(T,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${t}`))})}),e.jsx(o.Body,{children:C.map(t=>e.jsx(o.Row,{children:t.map((m,d)=>e.jsx(o.DataCell,{columnWidth:j[r[d]],children:f(d,m)},`column-${r[d]}-${m}`))},t.toString()))})]})})},l={args:{isFixed:!1,hasFixedHeader:!1}},A=1,I=2,i={title:"Table",component:o,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(o,{fixedColumnCount:A,fixedEndColumnCount:I,children:[e.jsx(o.Head,{children:e.jsx(o.Row,{children:r.map(n=>e.jsx(o.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(s,{children:[e.jsx(T,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(o.Body,{children:C.map(n=>e.jsx(o.Row,{children:n.map((a,t)=>e.jsx(o.DataCell,{columnWidth:j[r[t]],children:f(t,a)},`column-${r[t]}-${a}`))},n.toString()))})]})})};var c,p,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  title: 'Table',
  component: Table,
  render: () => <div style={{
    width: '500px',
    overflow: 'auto'
  }}>
      <Table fixedColumnCount={fixedColumnCount} fixedEndColumnCount={fixedEndColumnCount}>
        <Table.Head>
          <Table.Row>
            {columns.map((column: string) => <Table.ColumnHeader dataTestId='test' key={\`column-header-\${column}\`}>
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
              {row.map((content: string, i: number) => <Table.DataCell columnWidth={columnSizes[columns[i]]} key={\`column-\${columns[i]}-\${content}\`}>
                  {renderContent(i, content)}
                </Table.DataCell>)}
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Q=["Default","TableWithPinnedColumns"];export{l as Default,i as TableWithPinnedColumns,Q as __namedExportsOrder,K as default};
