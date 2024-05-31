import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as C}from"./Toaster-Bc8w18UU.js";import{I as w}from"./IconButton-BS2RgPV3.js";import"./Dropdown-BF485mS2.js";import"./index-B2rOpc4E.js";import"./index-BtM5VmRH.js";import"./index-CBqU2yxZ.js";import"./Typography-hP6P_hwr.js";import"./LabelField-PbTpmCmC.js";import"./Box.styled-B8MVCI1k.js";import"./Spinner.styled-CK0-z1jb.js";import"./TextField.styled-Cfofyo8l.js";import"./SearchField.styled-u5sU8hVh.js";import"./TextArea-BsRKrnJU.js";import"./Toggle-BFOjMQJC.js";import"./Form-B2NZFK7x.js";import"./Link-B_0vuokx.js";import"./Modal-CM8NAlmK.js";import"./Pagination-BNKQDdu9.js";import"./Radio-3aa8zbsE.js";import"./MultiSelect-DRmM46Hc.js";import"./Accordion-DB_lSP3m.js";import{A as y}from"./Avatar-Dl23nImw.js";import{a as b,A as v}from"./Avatar.styled-hWaw8SW-.js";import"./Backdrop-B5Er0HnM.js";import"./Breadcrumb-BVULQPW7.js";import"./Divider.styled-BZAesxcC.js";import"./Drawer-4HEqXdN5.js";import"./EmptyState-w3iectEz.js";import"./Icon-CHFlL13I.js";import"./Message-TShsTqPc.js";import"./Tabs-BgPTpohE.js";import{T as A}from"./Tag-D-KFSfjp.js";import{T as s}from"./Tooltip-BAc1emR9.js";import"./Checkbox-B6dJBJ-3.js";import{T as o}from"./Table-DRZjotCT.js";import"./Button.styled-CrKUpX37.js";import"./ProgressBar.styled-C0H9diWQ.js";import"./Select-D2E6Tpmr.js";import"./Stepper.styled-C6G5PIkd.js";import"./Card-BeuGuKKM.js";import"./useMedia-BZw1ksCX.js";import"./Close-CGHfkSk3.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DropdownMenu-gN2R3NB8.js";import"./z-index-C-tE6wDk.js";import"./useClickOutside-D7JrBqcS.js";import"./index-BbP3371Q.js";import"./index-BAMY2Nnw.js";import"./client-BvKKsruy.js";import"./index-Bl7H5CcN.js";import"./index-BDlDW0Uq.js";import"./Info-BPeIL3LD.js";import"./Portal-U_0UEmB3.js";import"./Spinner-DaAX0u3v.js";import"./index-gq_RjDZX.js";import"./debounce-BF4Cdv7I.js";import"./ArrowRight-Bcd3dS55.js";import"./useDebounceResize-DOYGonWs.js";import"./index-D3ylJrlI.js";const D=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"})}),i=["Name","Email","Role","Status","Phone","Department","Location","Actions"],T=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York",""],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco",""],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles",""],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago",""]],j={Name:"200px",Status:"120px",Actions:"fit-content"},S=t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{size:b.Small,title:t,type:v.Primary}),t]}),I=t=>e.jsx(A,{border:"rounded",color:t,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[t]}),f=(t,r)=>{const n=i[t];return{Name:S(r),Status:I(r),Actions:E()}[n]??r},E=()=>e.jsx(w,{children:e.jsx(D,{})}),Fe={title:"Data Display/Table",component:o,render:({isFixed:t,hasFixedHeader:r})=>e.jsx("div",{style:{...r&&{height:"200px",overflow:"auto"}},children:e.jsxs(o,{isFixed:t,children:[e.jsx(o.Head,{hasFixedHeader:r,children:e.jsx(o.Row,{children:i.map(n=>e.jsx(o.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(o.Body,{children:T.map(n=>e.jsx(o.Row,{children:n.map((m,p)=>e.jsx(o.DataCell,{columnWidth:j[i[p]],children:f(p,m)},`column-${i[p]}-${m}`))},n.toString()))})]})})},a={args:{isFixed:!1,hasFixedHeader:!1}},R=1,B=2,l={title:"Table",component:o,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(o,{fixedColumnCount:R,fixedEndColumnCount:B,children:[e.jsx(o.Head,{children:e.jsx(o.Row,{children:i.map(t=>e.jsx(o.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[t,t==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${t}`))})}),e.jsx(o.Body,{children:T.map(t=>e.jsx(o.Row,{children:t.map((r,n)=>e.jsx(o.DataCell,{columnWidth:j[i[n]],style:{...i[n]==="Actions"&&{minWidth:"65px"}},children:f(n,r)},`column-${i[n]}-${r}`))},t.toString()))})]})})};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Ye=["Default","TableWithPinnedColumns"];export{a as Default,l as TableWithPinnedColumns,Ye as __namedExportsOrder,Fe as default};
