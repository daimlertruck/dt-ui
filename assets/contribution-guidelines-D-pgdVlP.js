import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as s,f as a}from"./index-Bz-q7dgM.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-NBWvOQEN.js";import"../sb-preview/runtime.js";import"./chunk-EIRT5I3Z-CbnHSNsj.js";import"./extends-DJVMZnyl.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-qciFhAsL.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-DrFu-skq.js";const r=`# Coding Standards and Guidelines

This guide is intended to support the developers by providing a set of programming conventions, style and best practices to follow on DT-UI Design System.

- [Coding Standards and Guidelines](#coding-standards-and-guidelines)
  - [1. Branch Naming Convention](#1-branch-naming-convention)
  - [2. Commits](#2-commits)
    - [2.1. Message Convention](#21-message-convention)
    - [2.2 Strategy](#22-strategy)
    - [2.3 References](#23-references)
  - [3. Pull Requests](#3-pull-requests)
    - [3.1. Name Convention](#31-name-convention)
    - [3.2. Preview Link](#32-preview-link)
    - [3.3. Work in Progress](#33-work-in-progress)
    - [3.4. Code Reviews](#34-code-reviews)
      - [3.4.1 Continuation of Pull Request](#341-continuation-of-pull-request)
      - [3.4.2 Merging the Pull Request](#342-merging-the-pull-request)
  - [4. Code Standards & Good Practices](#4-code-standards--good-practices)
    - [4.1. Start developing on DT-UI](#41-start-developing-on-dt-ui)
    - [4.2. How to build a component from scratch](#42-how-to-build-a-component-from-scratch)
    - [4.3. When to use Types / Interfaces](#43-when-to-use-types--interfaces)
    - [4.4. Compound components pattern](#44-compound-components-pattern)
    - [4.5. Enum vs String literals unions](#45-enum-vs-string-literals-unions)
    - [4.6. Enum vs Objects with as const](#46-enum-vs-objects-with-as-const)
  - [5. Versioning](#5-versioning)

## 1. Branch Naming Convention

New branches should follow the name pattern \`{type}/{ticket}/{description-in-kebab-case}\` (example: \`feature/DTUI-XXX/new-feature\`). When there is no JIRA ticket, replace \`{ticket}\` for \`NO-ISSUE\`.

**Note:** The rule should be to always have a JIRA ticket created for each task.

## 2. Commits

### 2.1. Message Convention

All commit messages should follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.  
The message should be structured as follows:

\`\`\`
<type>[optional scope]: <description>

[optional body]
\`\`\`

The commit title has a limit of 50 characters. **Description** should be written in the present tense (**change**, not **changed** or **changes**), to be consistent with generated messages from commands like git merge.

Even though the **body** is optional, the developer should always consider adding one so that the project has a more clear and detailed commit history for anyone to follow. Each line of **body** should be wrapped at 72 characters.

### 2.2 Strategy

- Avoid mixing concerns, commits should be “atomic”. For example, creating two different components should produce two separate commits.
- Commits should never crash the application. For example, a refactor that changed a payload of a request, needs to be applied to all places in the same commit. It's the same for tests, should be added in the same commit of the feature/fix, etc.

### 2.3 References

For more information on how to commit, read the following documentation and blog posts:

- [Write a good commit message](https://con.t3.daimlertruck.com/display/TDH/Write+a+good+commit+message)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Git Commit Best Practices](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60)
- [Help him!! Help your code reviewer.](https://leidsoncruz.github.io/post/help-him-help-your-code-reviewer/)

## 3. Pull Requests

### 3.1. Name Convention

Pull Requests (PRs) should be opened with the following title structure \`{ticket}: {description}\`, for example: \`DTUI-XXX: PR description\`.  
Besides that, the project already includes a PR template (see it under the folder \`.github\`) that should be correcly filled in.

### 3.2. Preview Link

After a PR is opened, a deploy to the github pages gets triggered and a Preview Link is added to the PR description. This will enable developers and designers to see the changes and review accordingly.

### 3.3. Work in Progress

When creating a PR that is not ready to be reviewed, create it as a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/). Furthermore, the PR title should include the \`[WIP]\` tag in the beginning, for example: \`[WIP] DTUI-XXX: PR description\`.

### 3.4. Code Reviews

Every PR should be reviewed and approved by at least two reviewers before being merged to the main branch.

As a contributor organise yourself and try to ideally review the pending PR's in the first 24h. 💡

After each review, and every time the developer need to perform a fix on a branch, fixes related to a commit should reference the same commit using [fixup commit](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupamendrewordltcommitgt). This allows the reviewers to track the changes easier and keeps clean and clear commit history.

#### 3.4.1 Continuation of Pull Request

As a rule of thumb the code author is also the PR assignee. "Assignees are responsible for making sure the pull request is not blocked. They are responsible for making sure the pull request progresses."

Check it out the [useful PR guidelines by MDN](https://developer.mozilla.org/en-US/docs/MDN/Community/Pull_requests)

#### 3.4.2 Merging the Pull Request

After the review process is completed and before merging the branch, all discussions **must** be resolved by the one that opened them. This way, everyone is aware if the discussion is finished or if there is something pending. Besides that, and after merging the branch, the developer should also rebase the branch with the main/develop branch using the \`autosquash\` commit, so that all fixups' commits are squashed with its respective parent commit.

Even if the PR is approved by the assignees, the comments made by other contributors must be considered;

After all of this, the branch is ready to be merged using \`rebase and merge\`.

## 4. Code Standards & Good Practices

It is important to follow certain coding guidelines and standards to maintain consistency across the project's code base.

### 4.1. Start developing on DT-UI

Only create a new component if the design specification is ready and approved in the contributors sync, the component spec's to be found on [Figma](https://www.figma.com/file/HMNEjcZa01vPjEaBbB0vtF/DT_UI?type=design&node-id=48%3A8967&mode=design&t=UTbLy7JmqDqrFuWC-1).

Challenge the specification, raise concerns and your point of view to have great component results.

There is a case where you don't have the specification ready but the component is urgent for your product, it should be created in the scope of your product at first;

### 4.2. How to build a component from scratch

1. Run \`yarn generate:component\`

2. You will be asked for a package name (in kebab-case)

3. A component package with a boilerplate will be created in the workspace react-packages 🎉

### 4.3. When to use Types / Interfaces

Types and interfaces are very similar, in the last versions of typescript almost all features of an interface are available in type.

To follow a standard and have everyone on the same page we should use:

\`Interfaces\`: to define object shapes until you need some feature that is available only on the type alias.

\`Types\`: to "create" a new data type or define an object shape that needs something that only types have (Ex: conditional types, extends primitives, etc).

Also, it has differences to get a better error explanation. You can find the documentation related to the usage below:

[errors](https://www.typescriptlang.org/play#code/PTAEBUAsFMCdtAQ3qALgdwPagLaIJYB2ammANgM4mgAm0AxmcgqjKBZIgA4KYBmSQgCgQoTACMAVg1QAuUEVRw+ietCqJCNNAE8eSMvkQV1AOhHALEGDqQoAbnFsV8OfE1gAaQdr6ZYaGw4mBSooPSYOMHE9MbqVqphrAgUiDjQ5kKoeggAQviwNOA5oAC8oADeQqCg6EQA5hTyAEwA3EIAvu1CisqqeQU0AJKESrAqapXVtQ1NoG2dQkIRhKGg4oMAjPL5hcX65RUzhI0toF3LmKthG4XNO4MjYxMIh8en8+fdorkMiACuJggOQAyvRYPguGF8Bp2KhYP96Kh-rBEGRdPoKDpQtAcJ4rPhUAByKhcEIucRkFjYXqwNwAD0C0AKoEB1MwmRWa1uNAAzA9Ck8+pNyjzNt8wFBoLZxJhWOx-lwybAwtB6UotA0xMkArSXhotBizFZ9gg0UYTFQaNhWDDQPYjApRnATEj8FcjRRvOhIO5oATneN+lROI4kKAANbSrCFTLZfQAeXQ6LehEwSJRhDR8nh-wQHVAADJQLsijl2vGEAAlCREMqVUBpjOwLNkeQqSj5oslx6Bl7dPX9UAABWgqnTEdAao1NCopdNUxqETImBRfH+bbQCOg7RqfEM6nbaJM7Q6PT7Q4Awr76FHiNPoFo573nkOqkvyKvxhuj53d6B93wQ8AOPHdFiEKkwkwZN5CTFMGzqE45mabwm2RFtsy3PMvgg6AwnoG873ka98FvR96yORCPhQ8JPzXH8QM7bxAOAjsgQuE1ODCVJ8Bob0EHgCIokfbQdFXVkgUHNQqEwRwAkrBJDDiChTFAEEeHofA+FItEyB0bxxD+NlQDE-4ZjIdF6jw9Y8LGKdYFgfwrHSChUislTQCGARTNASBZLgMQ5KZADyBXKj7Mc2AvRM8TYmEUQTAQPz0GBHgwQhKFwk0UAuEch06DQF0As0bRghQPx6DZGhnPUNz1FqGBiBjCMtTqeUpPqwwo1AEiyMITJoPggjSLvdphr6+tBolUAE0IBA8EkfxaC0vg4EfSZDIwaByMrAwLXq+wqA6igEhQVhEGhC9pLsXgeGIEqjT25SbvCFcTBocxRCgO10k0KgfLiqd1REwQnVfDbbDoRhkC1QkEnYBgrm0VBXAyJYOtAABpQkNUXHKUSi+RZXIMdCFPdGroQbHUFx99aJXFF5FCCETnJqwRmCuUYACWIgUQR64rTG4EAIzQrO0VdUBcAr+AJKXaAYDwLvdfqll24dFS4WxDmmZd-CZ+EGlPbp1c17W8dQTBsXkQh-hwQzYGNpZRAAEWgO6aC1D1TICepMGPbxbStFa1sISYIg3bRDKQKwyRcFGwyW-m5vqZXHFUgAJaDoCCvwAi4f5KVIvSgbj6BqtEStosJElw02uzYgs6g8G65IcFBjrMlEWbeAEZIbLWeAKC-a684R5kTgMdF+GC8urKsXn6uQVdDSr+0jsp6Kg7hVRJ388YwqsVh4EQbQ7X5v3MG0LgmEmS2d5VWRnbASAaa4JoQFCXf9-3aDTCE4AABHPMoQVYUGALyAA7M0XkUDeQAFZgBV3BJCVAABaY6aDDpoKrsAeBzQABsAAOZopCAAMABifBxDSHNDIUIIAA)
[documentations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

Examples of usage:

\`\`\`typescript
type NullableString = string | null;

interface MyInterface {
  name: NullableString;
}
\`\`\`

### 4.4. Compound components pattern

We must use this pattern when creating components that are composable, not all the cases will apply this pattern, but for example cases where we have a main component that depends on other parts such as:

- Menu depends on items;
- Dropdown depends on items;
- Table depends on headers, columns, rows, footers
- ...

**Why?**

Compound components manage their own internal state, which they share among the several child components. When implementing a compound component, we don’t have to worry about managing the state ourselves.

When importing a compound component, we don’t have to explicitly import the child components that are available on that component.
Reference: https://www.patterns.dev/react/compound-pattern/

### 4.5. Enum vs String literals unions

We encourage and see as a good practice using String literal unions rather than Enum to define a set of values, there are still some cases where enum's can be used, but for sure it will be an exception.

Examples of usage:

\`\`\`typescript
enum PortfolioProjectStatus { DRAFT, PUBLISHED }
vs.
type PortfolioProjectStatus = "DRAFT" | "PUBLISHED"
\`\`\`

Enums requires to be exported/imported by the files that depend on them, for example in a method or passing it through component props.

If there isn't a strong need to use enum it should be avoided. An exception of using enum is when you have an API and you need to change a specific code that represents a category, you can use an enum to improve the code readability.

Example:

\`\`\`typescript
enum DecodedCategory {
  BOOKS = 'B01',
  MOVIES = 'M01',
  MUSIC = 'MU01',
}
\`\`\`

Reference: https://contra.com/p/W3ol7m3o-enums-vs-string-literal-unions-in-type-script

### 4.6. Enum vs Objects with as const

Given the objects keeps the base code aligned with the state of JavaScript we are in favor of this approach instead of using enums.

The biggest argument in favour of this format over TypeScript’s enum is that it keeps your codebase aligned with the state of JavaScript, and when/if enums are added to JavaScript then you can move to the additional syntax.

Reference: https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums

### 4.6. Named Exports vs Default Exports

**We should always use named exports for components and utility functions**, as default exports have many downsides.
Default exports were introduced mostly for easier interoperability with thousands CommonJS modules that were exporting single values. They don’t bring many benefits when used internally in our codebase.

We want to be clear and objective about which components we provide in an assertive way.

Reference: https://stackoverflow.com/a/68665805

## 5. Versioning

New changes should be tracked using the [Semantic Versioning](https://semver.org/).
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Contribution Guidelines"}),`
`,e.jsx(a,{children:r})]})}function E(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o()}export{E as default};
