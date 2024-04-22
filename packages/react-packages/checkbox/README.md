# Checkbox Package

A checkbox toggles between checked and unchecked states, enabling users to make binary choices in forms and settings.

## Checkbox Usage

```jsx
import { Checkbox } from '@dt-ui/react-checkbox';

export const App = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(evt.target.checked);
  };

  return (
    <Checkbox isChecked={checked} onChange={handleChange}>
      Label
    </Checkbox>
  );
};
```

## Properties

| Property     | Type                                           | Default       | Description                                                                   |
| ------------ | ---------------------------------------------- | ------------- | ----------------------------------------------------------------------------- |
| `children`   | `ReactNode`                                    | -             | Child components to be rendered as the label.                                 |
| `onChange`   | `(evt: ChangeEvent<HTMLInputElement>) => void` | -             | The triggered function when the input change.                                 |
| `isDisabled` | `boolean`                                      | `false`       | Specifies if the element should be disabled.                                  |
| `isChecked`  | `boolean`                                      | `false`       | Specifies if the element should be pre-selected (checked) when the page loads |
| `dataTestId` | `string`                                       | `checkbox-id` | Customizable test identifier                                                  |
| `value`      | `string`                                       | -             | Value for the checkbox to hold                                                |

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
- `yarn test` Run all unit tests
- `yarn test:report` - Open the test coverage report
- `yarn test:update:snapshot` - Run all unit tests and update the snapshot

## Compilation

Running `yarn build` from the root of the package will use [tsup](https://tsup.egoist.dev/) to compile the raw TypeScript and React code to plain JavaScript.

The `/dist` folder contains the compiled output.

```bash
checkbox
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
