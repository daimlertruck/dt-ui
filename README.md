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

Go to **Edit Profile** page in [Artifactory](https://artifacts.i.mercedes-benz.com/). You can find an **API key** field in the **Authentication Settings** section.

If the API key field is empty, you can click on the button to generate the key.

#### Create `.npmrc` file

Inside your project root folder create a file

```bash
touch .npmrc
```

#### **Configuring the npm Client for a Scope Registry**

Scopes can be associated with a separate registry. This allows you to seamlessly use a mix of packages from the public npm registry and one or more private registries. You need to paste the following into the .npmrc file instead:

```
@dt-ui:registry=https://artifacts.i.mercedes-benz.com/artifactory/api/npm/tdh-main-npm-releases/
//artifacts.i.mercedes-benz.com/artifactory/api/npm/tdh-main-npm-releases/:_password=<BASE64_PASSWORD>
//artifacts.i.mercedes-benz.com/artifactory/api/npm/tdh-main-npm-releases/:username=<USERNAME>
//artifacts.i.mercedes-benz.com/artifactory/api/npm/tdh-main-npm-releases/:email=youremail@daimlertruck.com
//artifacts.i.mercedes-benz.com/artifactory/api/npm/tdh-main-npm-releases/:always-auth=true
```

Encode your `<apiKey>` to `<BASE64_PASSWORD>` using an appropriate [encoding tool like this one](https://www.base64encode.org).

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

- Node.js >= v16.13.0 < v17.0.0
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
- 🚧 [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- [Yarn](https://yarnpkg.com/) from managing packages

#### Useful Commands

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally
- `yarn lint` - Lint all packages
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `yarn format` - Format all TypeScript, TypeScript with JSX, and Markdown files based on prettier
- `yarn test` - Run tests for all packages
- 🚧 `yarn changeset` - Generate a changeset
- 🚧 `yarn version-packages` - consumes all changesets, and updates to the most appropriate semver version based on those changesets. It also writes changelog entries for each consumed changeset
- 🚧 `yarn release` - Build all packages and run npm publish in each package that is of a later version than the one currently listed on npm

### Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Developer documentation site, built with Storybook
- `packages/dt-ui-react`: Core React components
- `packages/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-custom`: ESLint preset
- `packages/jest-config`: Shared jest configuration file

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

#### How to add documentation pages?

Add a file with `.stories.mdx` extension inside `apps/docs` directory, following the instructions on https://storybook.js.org/docs/6.5/react/writing-docs/mdx#documentation-only-mdx.
Afterwards, the page is included automatically in the documentation.

If you created custom components to import in the page or a lot of subpages, we recommend to create a sub-directory for all the files related to the page and subpages, including the MDX file(s). The page(s) will still be included automatically.

Note: On Storybook v6, documentation pages still use the `.stories.mdx` extension (otherwise they are not included). On v7 these pages can use `.mdx` extension.

#### How to add component stories?

In case you want to add documentation more complex than the usual component stories, add a `.stories.mdx` file alongside with the component inside `packages/dt-ui-react/components`, or convert the current story in Component Story Format (CSF) to MDX format (see an example of the conversion on https://storybook.js.org/docs/6.5/react/writing-docs/mdx#mdx-flavored-csf).

For more information on how to write MDX stories see https://storybook.js.org/docs/6.5/react/writing-docs/mdx#writing-stories.

Note: MDX and CSF stories can't coexist in the same directory.

### 🚧 Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

#### 🚧 Generating the Changelog

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

#### 🚧 Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

⚠️ All flagged 🚧 information on this file needs further review since might not be working as expected.

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
