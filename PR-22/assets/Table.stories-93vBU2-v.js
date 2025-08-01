import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{I as C}from"./index-DeYKBhF6.js";import"./index-CTjT7uj6.js";import"./AccordionBody.styled-T1ZGrYot.js";import"./Icon-XPmSDfR_.js";import{A as w}from"./Avatar-ChyPrFom.js";import{a as f,A as b}from"./Avatar.styled-CbbELAwp.js";import"./Backdrop-1-tAShNA.js";import"./index-BYbd7N6y.js";import"./Breadcrumb-7ST2aODR.js";import"./index-hXYCrZJD.js";import"./index-B_xFk7rk.js";import"./Divider.styled-Bk3wOty6.js";import"./Drawer-B3sL03yJ.js";import"./EmptyState-BTiHfl4o.js";import"./Typography-BSz25Ey7.js";import"./LabelField-BJhr132g.js";import"./Message-D1Q1Qz8h.js";import"./Spinner-BAiVm7Kg.js";import"./Tabs-tcrfxDgz.js";import{T as v}from"./Tag-DLEvEdO6.js";import{T as s}from"./Tooltip-c2s7oC9N.js";import"./Checkbox-I7KIrKgF.js";import{I as A}from"./IconButton-BBUlNHzM.js";import"./TextField.styled-B7HBn3fh.js";import{T as t}from"./Table-BRbzIMF0.js";import"./Button.styled-DfkbVDCK.js";import"./ProgressBar.styled-3pfNiOxb.js";import"./Select-CKV8ibKz.js";import"./Step-Dd-Q2t8i.js";import"./Radio.styled-D3snQ6_2.js";import"./Modal-Br8wAy2I.js";import"./Card-BAXYlAht.js";import"./SegmentedControl-CG_fH0YX.js";import"./Dropdown-CtVkc-Br.js";import"./Toggle.styled-BCl9MhJ0.js";import"./TextArea.styled-DOoI3Ioj.js";import"./Form-xATkHRWW.js";import"./Pagination-DTsC5Pqm.js";import"./constants-B-8Kuy0B.js";import"./Close-BgpoXZkN.js";import"./emotion-styled.browser.esm-DuL_gwYN.js";import"./z-index-Ds5QkyqS.js";import"./useMedia-bxl5YFrZ.js";import"./useDebounceResize-BemOgpiz.js";import"./debounce-BF4Cdv7I.js";import"./index-BAMY2Nnw.js";import"./iframe-Yy73yYJN.js";import"./Info-CbG8KzIT.js";import"./Portal-0PPEY0jR.js";import"./useClickOutside-CvVYzr-_.js";const D=n=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"})}),i=["Name","Email","Role","Status","Phone","Department","Location","Actions"],T=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York",""],["Jane Smith","jane@example.com","Designer","yellow","+987654321","Design","San Francisco",""],["Alice Johnson","alice@example.com","Manager","grey","+135792468","Management","Los Angeles",""],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago",""]],j={Name:"200px",Status:"120px",Actions:"fit-content"},S=n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(w,{size:b.Small,title:n,type:f.Primary}),n]}),I=n=>{const r={green:"success",yellow:"warning",grey:"secondary"}[n]||"secondary";return e.jsx(v,{border:"rounded",color:r,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[n]})},y=(n,r)=>{const o=i[n];return{Name:S(r),Status:I(r),Actions:E()}[o]??r},E=()=>e.jsx(A,{children:e.jsx(D,{})}),Ee={title:"Data Display/Table",component:t,render:({isFixed:n,hasFixedHeader:r})=>e.jsx("div",{style:{...r&&{height:"200px",overflow:"auto"}},children:e.jsxs(t,{isFixed:n,children:[e.jsx(t.Head,{hasFixedHeader:r,children:e.jsx(t.Row,{children:i.map(o=>e.jsx(t.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o,o==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${o}`))})}),e.jsx(t.Body,{children:T.map(o=>e.jsx(t.Row,{children:o.map((m,d)=>e.jsx(t.DataCell,{columnWidth:j[i[d]],children:y(d,m)},`column-${i[d]}-${m}`))},o.toString()))})]})})},a={args:{isFixed:!1,hasFixedHeader:!1}},R=1,B=2,l={title:"Table",component:t,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(t,{fixedColumnCount:R,fixedEndColumnCount:B,children:[e.jsx(t.Head,{children:e.jsx(t.Row,{children:i.map(n=>e.jsx(t.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(t.Body,{children:T.map(n=>e.jsx(t.Row,{children:n.map((r,o)=>e.jsx(t.DataCell,{columnWidth:j[i[o]],style:{...i[o]==="Actions"&&{minWidth:"65px"}},children:y(o,r)},`column-${i[o]}-${r}`))},n.toString()))})]})})};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
              {row.map((content: string, i: number) => <Table.DataCell columnWidth={columnSizes[columns[i]]} key={\`column-\${columns[i]}-\${content}\`} style={{
            ...(columns[i] === 'Actions' && {
              minWidth: '65px'
            })
          }}>
                  {renderContent(i, content)}
                </Table.DataCell>)}
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Re=["Default","TableWithPinnedColumns"];export{a as Default,l as TableWithPinnedColumns,Re as __namedExportsOrder,Ee as default};
