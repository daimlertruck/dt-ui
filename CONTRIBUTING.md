# Coding Standards and Guidelines

This guide is intended to support the developers by providing a set of programming conventions, style and best practices to follow on API Portal.

1. [Branch Naming Convention](#1-branch-naming-convention)
2. [Commit Messages](#2-commit-messages)
3. [Pull Requests](#3-pull-requests)  
   3.1. [Name Convention](#31-name-convention)  
   3.2. [Work in Progress](#32-work-in-progress)  
   3.3. [Code Reviews](#33-code-reviews)
4. [Versioning](#4-versioning)

## 1. Branch Naming Convention

New branches should follow the name pattern `{type}/{ticket}/{description-in-kebab-case}` (example: `feature/ITCAPI-XXX/new-feature`). When there is no JIRA ticket, replace `{ticket}` for `NO-ISSUE`.

**Note:** The rule should be to always have a JIRA ticket created for each task.

## 2. Commit Messages

All commit messages should follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.  
The message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]
```

Even though the **body** is optional, the developer should always consider adding one so that the project has a more clear and detailed commit history for anyone to follow. For more information on how to write a good commit message, read the following documentation and blog posts:

- [Write a good commit message](https://gsep.daimler.com/confluence/display/TDH/Write+a+good+commit+message)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Git Commit Best Practices](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60)
- [Help him!! Help your code reviewer.](https://leidsoncruz.github.io/post/help-him-help-your-code-reviewer/)

## 3. Pull Requests

### 3.1. Name Convention

Pull Requests (PRs) should be opened with the following title structure `{ticket}: {description}`, for example: `ITCAPI-XXX: PR description`.   
Besides that, the project already includes a PR template (see it under the folder `.github`) that should be correcly filled in. 

### 3.2. Work in Progress

When creating a PR that is not ready to be reviewed, create it as a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/). Furthermore, the PR title should include the `[WIP]` tag in the beginning, for example: `[WIP] ITCAPI-XXX: PR description`.

### 3.3. Code Reviews

Every PR should be reviewed by at least two reviewers before being merged to the main/develop branch.   

After each review, and every time the developer need to perform a fix on the branch, it should create a new [fixup commit](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupamendrewordltcommitgt). This allows the reviewers keep a track on what was changed and can easily continue their review process.  

After the review process is completed and before merging the branch, all discussions should be resolved by the one that opened them. This way, everyone is aware if the discussion is finished or if there is something pending. Besides that, and after merging the branch, the developer should also rebase the branch with the main/develop branch using the `autosquash` commit, so that all fixups' commits are squashed with its respective parent commit.

After all of this, the branch is ready to be merged using `rebase and merge`. 

### 4. Versioning

New changes should be tracked using the [Semantic Versioning](https://semver.org/).