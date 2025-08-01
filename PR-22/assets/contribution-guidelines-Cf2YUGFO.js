import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s}from"./index-C12Do6RE.js";import"./index-CTjT7uj6.js";import"./iframe-Yy73yYJN.js";import"./index-UWIiQunN.js";import"./index-B_xFk7rk.js";import"./index-DiMW2NzS.js";import"./index-DrFu-skq.js";const{deprecate:r}=__STORYBOOK_MODULE_CLIENT_LOGGER__;r("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function o(t){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Contribution Guidelines"}),`
`,e.jsx(n.h1,{id:"coding-standards-and-guidelines",children:"Coding Standards and Guidelines"}),`
`,e.jsx(n.p,{children:"This guide is intended to support the developers by providing a set of programming conventions, style and best practices to follow on DT-DDS."}),`
`,e.jsx(n.h2,{id:"1-branch-naming-convention",children:"1. Branch Naming Convention"}),`
`,e.jsxs(n.p,{children:["New branches should follow the name pattern ",e.jsx(n.code,{children:"{type}/{ticket}/{description-in-kebab-case}"})," (example: ",e.jsx(n.code,{children:"feature/DTUI-XXX/new-feature"}),"). When there is no JIRA ticket, replace ",e.jsx(n.code,{children:"{ticket}"})," for ",e.jsx(n.code,{children:"NO-ISSUE"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The rule should be to always have a JIRA ticket created for each task."]}),`
`,e.jsx(n.h2,{id:"2-commits",children:"2. Commits"}),`
`,e.jsx(n.h3,{id:"21-developer-certificate-of-origin-dco",children:"2.1. Developer Certificate of Origin (DCO)"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.a,{href:"https://developercertificate.org/",rel:"nofollow",children:"Developer Certificate of Origin (DCO)"})," is a simple mechanism that authors use to affirm they have the right to contribute their code under the project's license."]}),`
`,e.jsxs(n.p,{children:["Every Commit you submit needs a ",e.jsx(n.code,{children:"Signed-off-by: Your Name <you@example.com>"})," trailer. The easiest way to achieve this is by adding the ",e.jsx(n.code,{children:"-s"})," / ",e.jsx(n.code,{children:"--signoff"})," flag to ",e.jsx(n.code,{children:"git commit"}),`. For ease of convenience, we also provide a Husky hook which will automatically append a DCO "Signed-off-by" trailer to every commit message if one isn't already present.`]}),`
`,e.jsxs(n.p,{children:["By submitting commits with a valid ",e.jsx(n.code,{children:"Signed-off-by"})," line, you agree that your contribution is covered by the MIT license."]}),`
`,e.jsx(n.h3,{id:"22-message-convention",children:"2.2 Message Convention"}),`
`,e.jsxs(n.p,{children:["All commit messages should follow ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",rel:"nofollow",children:"Conventional Commit"})," specification.",e.jsx(n.br,{}),`
`,"The message should be structured as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<type>[optional scope]: <description>

[optional body]
`})}),`
`,e.jsxs(n.p,{children:["The commit title has a limit of 50 characters. ",e.jsx(n.strong,{children:"Description"})," should be written in the present tense (",e.jsx(n.strong,{children:"change"}),", not ",e.jsx(n.strong,{children:"changed"})," or ",e.jsx(n.strong,{children:"changes"}),"), to be consistent with generated messages from commands like git merge."]}),`
`,e.jsxs(n.p,{children:["Even though the ",e.jsx(n.strong,{children:"body"})," is optional, the developer should always consider adding one so that the project has a more clear and detailed commit history for anyone to follow. Each line of ",e.jsx(n.strong,{children:"body"})," should be wrapped at 72 characters."]}),`
`,e.jsx(n.h3,{id:"23-strategy",children:"2.3. Strategy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Avoid mixing concerns, commits should be "atomic". For example, creating two different components should produce two separate commits.'}),`
`,e.jsx(n.li,{children:"Commits should never crash the application. For example, a refactor that changed a payload of a request, needs to be applied to all places in the same commit. It's the same for tests, should be added in the same commit of the feature/fix, etc."}),`
`]}),`
`,e.jsx(n.h2,{id:"3-pull-requests",children:"3. Pull Requests"}),`
`,e.jsx(n.h3,{id:"31-name-convention",children:"3.1. Name Convention"}),`
`,e.jsxs(n.p,{children:["Pull Requests (PRs) should be opened with the following title structure ",e.jsx(n.code,{children:"{ticket}: {description}"}),", for example: ",e.jsx(n.code,{children:"DTUI-XXX: PR description"}),". The project already includes a PR template (see it under the folder ",e.jsx(n.code,{children:".github"}),") that should be correcly filled in."]}),`
`,e.jsx(n.h3,{id:"32-preview-link",children:"3.2. Preview Link"}),`
`,e.jsx(n.p,{children:"After a PR is opened, a deploy to the github pages gets triggered and a Preview Link is added to the PR description. This will enable developers and designers to see the changes and review accordingly."}),`
`,e.jsx(n.h3,{id:"33-work-in-progress",children:"3.3. Work in Progress"}),`
`,e.jsxs(n.p,{children:["When creating a PR that is not ready to be reviewed, open it as a ",e.jsx(n.a,{href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/",rel:"nofollow",children:"Draft Pull Request"}),". Furthermore, the PR title should include the ",e.jsx(n.code,{children:"[WIP]"})," tag in the beginning, for example: ",e.jsx(n.code,{children:"[WIP] DTUI-XXX: PR description"}),"."]}),`
`,e.jsx(n.h3,{id:"34-code-reviews",children:"3.4. Code Reviews"}),`
`,e.jsx(n.p,{children:"Every PR should be reviewed and approved by at least two reviewers before being merged to the main branch."}),`
`,e.jsx(n.p,{children:"As a contributor organise yourself and try to ideally review the pending PR's in the first 24h. 💡"}),`
`,e.jsxs(n.p,{children:["After each review, and every time the developer need to perform a fix on a branch, fixes related to a commit should reference the same commit using ",e.jsx(n.a,{href:"https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupamendrewordltcommitgt",rel:"nofollow",children:"fixup commit"}),". This allows the reviewers to track the changes easier and keeps clean and clear commit history."]}),`
`,e.jsx(n.h2,{id:"4-code-standards--good-practices",children:"4. Code Standards & Good Practices"}),`
`,e.jsx(n.h3,{id:"41-start-developing-on-dt-dds",children:"4.1. Start developing on DT-DDS"}),`
`,e.jsx(n.h3,{id:"42-library-compilation",children:"4.2. Library Compilation"}),`
`,e.jsx(n.h3,{id:"43-how-to-build-a-component-from-scratch",children:"4.3. How to build a component from scratch"}),`
`,e.jsx(n.h3,{id:"44-when-to-use-types--interfaces",children:"4.4. When to use Types / Interfaces"}),`
`,e.jsx(n.h3,{id:"45-compound-components-pattern",children:"4.5. Compound components pattern"}),`
`,e.jsx(n.h3,{id:"46-enum-vs-string-literals-unions",children:"4.6. Enum vs String literals unions"}),`
`,e.jsx(n.h3,{id:"47-enum-vs-objects-with-as-const",children:"4.7. Enum vs Objects with as const"}),`
`,e.jsx(n.h3,{id:"48-named-exports-vs-default-exports",children:"4.8. Named Exports vs Default Exports"}),`
`,e.jsx(n.h3,{id:"49-developer-documentation",children:"4.9. Developer Documentation"}),`
`,e.jsx(n.h3,{id:"410-how-to-add-component-stories",children:"4.10. How to add component stories?"}),`
`,e.jsx(n.h2,{id:"5-versioning--publishing-packages",children:"5. Versioning & Publishing Packages"}),`
`,e.jsxs(n.p,{children:["For the complete contributing guidelines, please refer to the ",e.jsx(n.a,{href:"../../../../CONTRIBUTING.md",children:"CONTRIBUTING.md"})," file in the root of this repository."]})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
