# DT-UI - Design System Library

This is DT-UI component library repository. It contains UI components, brand themes, examples and documentation for the Daimler Truck multi-brand design system.
DT-UI component library is headless and can be used to serve multiple brands.

#### **DT-UI provides:**

- A unified group of utility functions commonly used, and spread across different projects
- A unified group of reusable UI components commonly used, and spread across different projects
- W3C standards, common tooling, and high quality through CI/CD lifecycle
- Accessibility meeting WCAG 2.1 AA standards
- Faster developments and implementations
- Easy collaboration and Maintenance
- Versioning and changelogs
- Documentation

#### **Documentation via:**

- [Storybook/Developer documentation](https://git.t3.daimlertruck.com/pages/DT-Design-System/dt-ui/)
- [Figma](https://www.figma.com/file/RdxGI4OUcKDRfBRPmBJXbW/DT_UI-Design-System)
- [Confluence](https://con.t3.daimlertruck.com/display/DTUI/DT+Design+System+Home)

## 📦 Installation

At the moment, DT UI is available as an npm package, `@dt-ui/react`, for React and frameworks using React, like NextJS (compatible with Server-side rendering).

### Setup

#### Get your API key from Artifactory

Go to **Edit Profile** page in [Artifactory](https://art.t3.daimlertruck.com/). You can find an **API key** field in the **Authentication Settings** section.

If the API key field is empty, you can click on the button to generate the key.

#### Create `.npmrc` file

Inside your project root folder create a file

```bash
touch .npmrc
```

#### **Configuring the npm Client for a Scope Registry**

Scopes can be associated with a separate registry. This allows you to seamlessly use a mix of packages from the public npm registry and one or more private registries. You need to paste the following into the .npmrc file instead:

```
@dt-ui:registry=https://art.t3.daimlertruck.com/artifactory/api/npm/DTUI_NPM_LOCAL/
//art.t3.daimlertruck.com/artifactory/api/npm/DTUI_NPM_LOCAL/:_password=<BASE64_PASSWORD>
//art.t3.daimlertruck.com/artifactory/api/npm/DTUI_NPM_LOCAL/:username=<USERNAME>
//art.t3.daimlertruck.com/artifactory/api/npm/DTUI_NPM_LOCAL/:email=youremail@daimlertruck.com
//art.t3.daimlertruck.com/artifactory/api/npm/DTUI_NPM_LOCAL/:always-auth=true
```

Encode your `<apiKey>` to `<BASE64_PASSWORD>` using an appropriate [encoding tool like this one](https://www.base64encode.org).

Your `<USERNAME>` should include "_user_@tbdir.net".

### Install DT UI package

**yarn:**

```bash
yarn add @dt-ui/react
```

**npm:**

```bash
npm install @dt-ui/react
```

## 🔨 Usage

Import the DT UI global styles in the root component.

```tsx
import '@dt-ui/react/index.css';
```

And wrap your code in a `ThemeProvider` component to make it available to all components.

```tsx
import { Provider as ThemeProvider, theme } from '@dt-ui/react';

function App() {
  return <ThemeProvider theme={theme}>
    ...
  <ThemeProvider/>
}
```

For now, there is only available one theme (the default one).

## ⌨️ Development

### Prerequisites

- Node.js >= v18.0.0
- Yarn

### 📓 Installation

- Clone the repo
- `yarn` for package install

### ⚙️ DT-UI current stack

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [React](https://reactjs.org/) — JavaScript library for user interfaces
- [Emotion](https://emotion.sh/docs/introduction) — for writing css styles with JavaScript
- [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/) - to test UI components in a user-centric way
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
  - [changeset-conventional-commits (forked - custom package)](https://github.com/iamchathu/changeset-conventional-commits) for automatically generating changesets based on conventional commits
- [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- [Yarn](https://yarnpkg.com/) from managing packages
- [Turbo-gen](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation#writing-generators)/[Plop](https://plopjs.com/documentation/) for custom generators

#### Useful Commands

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally
- `yarn lint` - Lint all packages
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `yarn format` - Format all TypeScript, TypeScript with JSX, and Markdown files based on prettier
- `yarn test` - Run tests for all packages
- `yarn changesets:add` - Generates changesets based on conventional commits
- `yarn changesets:version` - Consumes all changesets, and updates to the most appropriate semver version based on those changesets. It also writes changelog entries for each consumed changeset
- `yarn changesets:tag` - Commits the newly created changelogs with the latest packages version and adds the git-tag as `<package-name>@<package-version>`
- `yarn changesets:ci` - Runs the whole changesets flow, useful for pipelines to generate changesets, versioning and tags
- 🚧 `yarn release` - Build all packages and run npm publish in each package that is of a later version than the one currently listed on npm

### Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Developer documentation site, built with Storybook
- `packages/dt-ui-react`: Core React components
- `packages/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-custom`: ESLint preset
- `packages/jest-config`: Shared jest configuration file
- `packages/changeset-conventional-commits`: Changeset plugin used to automatically generate changesets and tagging versions

#### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `yarn build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

For `dt-ui-react`, you should see a folder `dt-ui-react/dist` which contains the compiled output.

```bash
dt-ui-react
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    ├── index.mjs   <-- ES Modules version
    └── index.css   <-- CSS file
    ...
```

### Components

Each file inside of `dt-ui-react/components` is a component inside our design system.

When adding a new component, ensure the component is also exported from the root entry `index.ts` file:

```tsx:dt-ui-react/index.ts
export * from './components/buttons';
// Add new component exports here
```

### Developer Documentation

DT UI developer documentation is built with Storybook. Storybook documentation is composed by:

- Documentation pages
- Component stories

Both supports [MDX](https://github.com/mdx-js/mdx), which allows you to use Markdown syntax and JSX for more advanced components.

For more information on Storybook and Docs, read the following documentation and blog posts:

- https://storybook.js.org/addons/@storybook/addon-docs
- https://storybook.js.org/docs/6.5/react/writing-docs/introduction
- https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a
- https://storybook.js.org/tutorials/design-systems-for-developers/react/en/document/
- https://storybook.js.org/blog/structuring-your-storybook/

#### How to generate a boilerplate for new component-package?

Components are independent packages that should be created in the workspace `packages/react-packages/**`

To facilitate this process and keep consistency across all components, please make use of the following script:

```bash
yarn component:create

? What is the name of the package without suffix "@dt-ui/react-" e.g, box, accordion, empty-state.
```

Provide a name for your component and you will have the component generated with:

- `story` file for storyboook
- `styled` file for styled-component
- `test` file for tests
- `index`file with component example

All the integration with storybook and `dt-ui-react` main library will be provided automatically.

#### How to add documentation pages?

Add a file with `.stories.mdx` extension inside `apps/docs` directory, following the instructions on https://storybook.js.org/docs/6.5/react/writing-docs/mdx#documentation-only-mdx.
Afterwards, the page is included automatically in the documentation.

If you created custom components to import in the page or a lot of subpages, we recommend to create a sub-directory for all the files related to the page and subpages, including the MDX file(s). The page(s) will still be included automatically.

Note: On Storybook v6, documentation pages still use the `.stories.mdx` extension (otherwise they are not included). On v7 these pages can use `.mdx` extension.

#### How to add component stories?

In case you want to add documentation more complex than the usual component stories, add a `.stories.mdx` file alongside with the component inside `packages/dt-ui-react/components`, or convert the current story in Component Story Format (CSF) to MDX format (see an example of the conversion on https://storybook.js.org/docs/6.5/react/writing-docs/mdx#mdx-flavored-csf).

For more information on how to write MDX stories see https://storybook.js.org/docs/6.5/react/writing-docs/mdx#writing-stories.

Note: MDX and CSF stories can't coexist in the same directory.

### Versioning & Publishing Packages

This project uses [Changesets](https://github.com/changesets/changesets) and [changeset-conventional-commits (forked - custom package)](packages/changeset-conventional-commits/README.md) to manage versions and create changelogs.

#### Workflow

- `changeset-conventional-commits`: Generates changesets based on conventional commits
- `Changesets`: Consumes the changesets in order to bump the packages version and it's dependencies
- `changeset-conventional-commits`: At last, commits the new packages version and changelogs with summary: `release: version packages` and tag it using the format: `<package-name>@<package-version>`

#### Generating the Changelog

To generate your changelog, run `yarn changeset:add` followed by `yarn changeset:version` locally, you'll have the changelogs generated from the conventional commits as follows:

```markdown
# @package/example

## 1.0.0

### Major Changes

- fix(container)!: remove ability to specify the container background

### Minor Changes

- feat(button): add new property to enable different shadows

### Patch Changes

- docs: move Storybook to docs application
- docs: add support section in README
- docs: add Usage section on README
- fix: remove page components
```

🛠 This is the default format provided by changesets, it's not so flexible to customize, however we have some room for improvement, check it out: [modifying the changelog formats](https://github.com/changesets/changesets/blob/main/docs/modifying-changelog-format.md)

#### Releasing

When you merge your code to the `main` branch, the pipeline will run the `VersionAndTag` step with `yarn changeset:ci` script defined in the root `package.json`:

```bash
yarn changesets:add && yarn changesets:version && yarn changesets:tag
```

Respectively runs:

```bash
node scripts/changeset-plugin --add-changesets
```

```bash
changeset version
```

```bash
node scripts/changeset-plugin --add-tag
```

Those commands will be responsible to:

- Generate changeset based on the last conventional commits since the last tagged version
- Bump packages with semver based on changeset files
- Commit generated `CHANGELOG.md` files and updated `package.json` files, adding the summary: `release: version packages`
  - Adds git-tag for the new packages version and push changes.

🛠 Finally after versioning and tagging, the pack and publish is done in the pipeline in the step `BuildAndPublish` by running the following commands for the `@dt-ui/react` package:

- `yarn install`
- `yarn build`
- `yarn pack`
- `yarn publish`

The `BuildAndPublish` step only runs if the previous `VersionAndTag` step has been run successfully

⚠️ All flagged 🚧 information on this file needs further review since might not be working as expected.\
⚠️ All flagged 🛠 information on this file represents the current state but not the final, it needs to be improved.

## Support

### Contributing

See the [contributing guidelines](CONTRIBUTING.md).

### Bug Reports

If you've encountered a bug in our project, please follow these steps to report it:

1. **Search Existing Issues:** Before creating a new issue, please search the [existing issues](https://git.t3.daimlertruck.com/DT-Design-System/dt-ui/issues) to check if the bug has already been reported. If you find a similar issue, you can add a comment to provide additional details.

2. **Create a New Issue:** If you couldn't find an existing issue, [create a new issue](https://git.t3.daimlertruck.com/DT-Design-System/dt-ui/issues/new/choose) and use the "Bug Report" template. Provide as much detail as possible, including steps to reproduce, expected behavior, and actual behavior. Screenshots, error messages, and relevant code snippets are highly appreciated.

### Feature Requests

To propose a new feature:

1. **Search Existing Requests:** First, search the [existing issues](https://git.t3.daimlertruck.com/DT-Design-System/dt-ui/issues) to see if the feature has already been suggested. You can upvote and add your insights to existing feature requests.

2. **Create a New Issue:** If your feature idea hasn't been proposed yet, [create a new issue](https://git.t3.daimlertruck.com/DT-Design-System/dt-ui/issues/new/choose) and use the "Feature request" template.

### Issue Etiquette

- Be respectful and considerate when commenting on issues.
- Please **do not** post comments consisting solely of "+1" or ":thumbsup:".
  Use [GitHub's "reactions" feature](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)
  instead.
- Provide additional information promptly if requested by maintainers.

## ©️ License

Licensed under [Daimler Inner Source License (ISL)](LICENSE.md)

For more info, see [Daimler FOSS](https://git.t3.daimlertruck.com/tbf/daimler-inner-source-license)
