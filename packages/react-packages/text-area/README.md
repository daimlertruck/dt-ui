# TextArea Package

Textarea is an input that provides the same features as the text field, but accepts multiple lines of text.

## TextArea Usage

```jsx
import { TextArea } from '@dt-ui/react';

export const App = () => {
  return <TextArea label='My text area' maxLength={200} />;
};
```

## Properties

| Property     | Type              | Default          | Description                                                   |
| ------------ | ----------------- | ---------------- | ------------------------------------------------------------- |
| `label`      | `string`          | -                | A label to help users understand the scope of the text area.  |
| `name`       | `string`          | -                | The attribute to specify the name of the text area.           |
| `value`      | `string`          | -                | Value of the text area                                        |
| `dataTestId` | `string`          | `label`-textarea | Customizable test identifier                                  |
| `maxLength`  | `number`          | 120              | The maximum number of characters that user can enter.         |
| `onChange`   | `function`        | -                | The triggered function when the input change.                 |

## Stack

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [React](https://reactjs.org/) — JavaScript library for user interfaces
- [Emotion](https://emotion.sh/docs/introduction) — for writing css styles with JavaScript
- [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/) - to test UI components in a user-centric way
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- [Yarn](https://yarnpkg.com/) from managing packages

## Commands

- `yarn build` - Build the package
- `yarn dev` - Run the package locally
- `yarn lint` - Lint all files within this package
- `yarn test` - Run all unit tests
- `yarn test:report` - Open the test coverage report
- `yarn test:update:snapshot` - Run all unit tests and update the snapshot

## Compilation

Running `yarn build` from the root of the package will use [tsup](https://tsup.egoist.dev/) to compile the raw TypeScript and React code to plain JavaScript.

The `/dist` folder contains the compiled output.

```bash
text-area
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    └── index.mjs   <-- ES Modules version
    ...
```

## Versioning

Follows [semantic versioning](https://semver.org/)

## &copy; License

Licensed under [Daimler Inner Source License (ISL)](LICENSE.md)

For more info, see [Daimler FOSS](https://git.t3.daimlertruck.com/tbf/daimler-inner-source-license)
