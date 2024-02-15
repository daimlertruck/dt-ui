import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{A as h}from"./Avatar-Gp9UvB7j.js";import{A as u,a as x}from"./Avatar.styled-CUHg7m_f.js";import{T as m}from"./Tooltip-7UO75mSz.js";import{I as T}from"./InfoOutline-vkAQEiMk.js";import{T as y}from"./Tag-S0pXlfY5.js";import{T as n}from"./Table-0C3M9edK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-aMdyWyTB.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Portal-EY94Zi_-.js";import"./z-index-tR9610fR.js";import"./Close-fCiS4iy8.js";const l=["Name","Email","Role","Status"],g=[["Thomas Morse","thomas.morse@myhugecompanynamem.com","Operator","yellow"],["Hanna Apple","hanna.apple@companysample.com","Admin","green"],["Marcus Klein","marcus.klein@companysample.com","Operator","green"],["Rick Thor","rick.thor@companysample.com","Admin","grey"]],f={Name:"200px",Status:"120px"},b=a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(h,{size:u.Small,title:a,type:x.Primary}),a]}),w=a=>e.jsx(y,{border:"rounded",color:a,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[a]}),j=(a,o)=>({Name:b(o),Status:w(o),Email:o,Role:o})[l[a]],Y={title:"Data Display/Table",component:n},t={args:{isFixed:!1,hasFixedHeader:!1},render:({isFixed:a,hasFixedHeader:o})=>e.jsx("div",{style:{...o&&{height:"200px",overflow:"auto"}},children:e.jsxs(n,{isFixed:a,children:[e.jsx(n.Head,{hasFixedHeader:o,children:e.jsx(n.Row,{children:l.map(r=>e.jsx(n.ColumnHeader,{"data-label":`column-header-${r}`,dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r,r==="Status"&&e.jsxs(m,{children:[e.jsx(T,{height:16,width:16}),e.jsx(m.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${r}`))})}),e.jsx(n.Body,{children:g.map(r=>e.jsx(n.Row,{children:r.map((s,i)=>e.jsx(n.DataCell,{columnWidth:f[l[i]],children:j(i,s)},`column-${l[i]}-${s}`))},r.toString()))})]})})};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  },
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
            {columns.map((column: string) => <Table.ColumnHeader data-label={\`column-header-\${column}\`} dataTestId='test' key={\`column-header-\${column}\`}>
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,Y as default};
