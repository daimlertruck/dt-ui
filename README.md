<div align="center">
<img src="dtui.png" width="55" style="vertical-align: middle;" />

# DT-UI
</div>

**Daimler Truck Design System Library**

Component library for Daimler Truck Multi-brand Design System.<br> 
It contains UI components, brand themes, examples and documentation.


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

- [Storybook/Developer documentation](https://daimlertruck.github.io/daimlertruck/dt-ui/)
- [Figma (private design files)](https://www.figma.com/file/RdxGI4OUcKDRfBRPmBJXbW/DT_UI-Design-System)
- [Confluence (private docs)](https://con.t3.daimlertruck.com/display/DTUI/DT+Design+System+Home)

## 📦 Installation

At the moment, DT-UI is available as an npm package, `@dt-ui/react`, for React and frameworks using React, like NextJS (compatible with Server-side rendering).

### Setup

#### Get your API key from Artifactory (private installs only)

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

### Install DT UI package

```bash
yarn add @dt-ui/react
```

### Install package dependencies

`@dt-ui/react` uses CSS-IN-JS behind the scenes. You'll need to add Emotion as a project dependency.

```bash
yarn add @emotion/css @emotion/react @emotion/styled
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
- `packages/dt-ui-react`: Parent React library
- `packages/react-packages`: React components
- `packages/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-custom`: ESLint preset
- `packages/jest-config`: Shared jest configuration file
- `packages/changeset-conventional-commits`: Changeset plugin used to automatically generate changesets and tagging versions

### Contributing

See the [contributing guidelines](CONTRIBUTING.md).

### Bug Reports

If you've encountered a bug in our project, please follow these steps to report it:

1. **Search Existing Issues:** Before creating a new issue, please search the [existing issues](https://github.com/daimlertruck/dt-ui/issues) to check if the bug has already been reported. If you find a similar issue, you can add a comment to provide additional details.

2. **Create a New Issue:** If you couldn't find an existing issue, [create a new issue](https://github.com/daimlertruck/dt-ui/issues/new/choose) and use the "Bug Report" template. Provide as much detail as possible, including steps to reproduce, expected behavior, and actual behavior. Screenshots, error messages, and relevant code snippets are highly appreciated.

### Feature Requests

To propose a new feature:

1. **Search Existing Requests:** First, search the [existing issues](https://github.com/daimlertruck/dt-ui/issues) to see if the feature has already been suggested. You can upvote and add your insights to existing feature requests.

2. **Create a New Issue:** If your feature idea hasn't been proposed yet, [create a new issue](https://github.com/daimlertruck/dt-ui/issues/new/choose) and use the "Feature request" template.

### Issue Etiquette

- Be respectful and considerate when commenting on issues.
- Please **do not** post comments consisting solely of "+1" or ":thumbsup:".
  Use [GitHub's "reactions" feature](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)
  instead.
- Provide additional information promptly if requested by maintainers.


## &copy; License

Licensed under [MIT License](LICENSE.md)
