import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as i,f as s}from"./index-4KkOtqSa.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-SLqyVIqZ.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-Uk8hDnuP.js";import"./extends-E30VzY7q.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-IIpmmaL8.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-PPLHz8o0.js";const a=`# Coding Standards and Guidelines

This guide is intended to support the developers by providing a set of programming conventions, style and best practices to follow on API Portal.

- [Coding Standards and Guidelines](#coding-standards-and-guidelines)
  - [1. Branch Naming Convention](#1-branch-naming-convention)
  - [2. Commits](#2-commits)
    - [2.1. Message Convention](#21-message-convention)
    - [2.2 Strategy](#22-strategy)
    - [2.3 References](#23-references)
  - [3. Pull Requests](#3-pull-requests)
    - [3.1. Name Convention](#31-name-convention)
    - [3.2. Work in Progress](#32-work-in-progress)
    - [3.3. Code Reviews](#33-code-reviews)
    - [3.4. Preview Link](#34-preview-link)
  - [4. Versioning](#4-versioning)

## 1. Branch Naming Convention

New branches should follow the name pattern \`{type}/{ticket}/{description-in-kebab-case}\` (example: \`feature/ITCAPI-XXX/new-feature\`). When there is no JIRA ticket, replace \`{ticket}\` for \`NO-ISSUE\`.

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

Pull Requests (PRs) should be opened with the following title structure \`{ticket}: {description}\`, for example: \`ITCAPI-XXX: PR description\`.   
Besides that, the project already includes a PR template (see it under the folder \`.github\`) that should be correcly filled in. 

### 3.2. Work in Progress

When creating a PR that is not ready to be reviewed, create it as a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/). Furthermore, the PR title should include the \`[WIP]\` tag in the beginning, for example: \`[WIP] ITCAPI-XXX: PR description\`.

### 3.3. Code Reviews

Every PR should be reviewed and approved by at least two reviewers before being merged to the main branch.

After each review, and every time the developer need to perform a fix on a branch, fixes related to a commit should reference the same commit using [fixup commit](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupamendrewordltcommitgt). This allows the reviewers to track the changes easier and keeps clean and clear commit history.

After the review process is completed and before merging the branch, all discussions should be resolved by the one that opened them. This way, everyone is aware if the discussion is finished or if there is something pending. Besides that, and after merging the branch, the developer should also rebase the branch with the main/develop branch using the \`autosquash\` commit, so that all fixups' commits are squashed with its respective parent commit.

After all of this, the branch is ready to be merged using \`rebase and merge\`.

### 3.4. Preview Link

After a PR is opened, a deploy to the github pages gets triggered and a Preview Link is added to the PR description. This will enable developers and designers to see the changes and review accordingly. 

### 4. Versioning

New changes should be tracked using the [Semantic Versioning](https://semver.org/).`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contribution Guidelines"}),`
`,e.jsx(s,{children:a})]})}function x(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o()}export{x as default};
