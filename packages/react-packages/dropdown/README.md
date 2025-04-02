# Dropdown Package

The Dropdown Menu provide the users with a list of options on temporary surfaces.

## Dropdown Usage

```jsx
import { Dropdown } from '@dt-ui/react';

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
];

export const App = () => {
  return (
    <Dropdown>
      <Dropdown.Select label='Label'>
        {options.map((option) => (
          <Dropdown.Option key={option.value} option={option}>
            {option.text ?? option.value}
          </Dropdown.Option>
        ))}
      </Dropdown.Select>
    </Dropdown>
  );
};
```

## Properties

### Dropdown

| Property       | Type                  | Default    | Description                                               |
| -------------- | --------------------- | ---------- | --------------------------------------------------------- |
| `children`     | `ReactNode`           | -          | Child components to be rendered                           |
| `defaultValue` | `DropdownOptionValue` | -          | Initial selected option                                   |
| `style`        | `React.CSSProperties` | -          | Gives the Box Dropdown css properties                     |
| `dataTestId`   | `string`              | `dropdown` | Customizable test identifier                              |
| `name`         | `string`              | -          | The attribute to specify the name of the dropdown element |

### Dropdown.Select

| Property      | Type                  | Default           | Description                                                |
| ------------- | --------------------- | ----------------- | ---------------------------------------------------------- |
| `children`    | `ReactNode`           | -                 | Child components to be rendered                            |
| `label`       | `string`              | -                 | A text to help users understand the scope of the dropdown. |
| `style`       | `React.CSSProperties` | -                 | Gives the Box Dropdown css properties                      |
| `dataTestId`  | `string`              | `dropdown-select` | Customizable test identifier                               |
| `isDisabled`  | `boolean`             | `false`           | Set the dropdown disabled.                                 |
| `hasBorder`   | `boolean`             | `true`            | Set a border to the component.                             |
| `hasError`    | `boolean`             | `false`           | Set error state for dropdown                               |
| `fill`        | `DropdownFill`        | `default`         | Styles the input with a specific background color          |
| `variant`     | `DropdownVariant`     | `outlined`        | Styles the input with a specific border                    |
| `hasDeselect` | `boolean`             | `false`           | Set if dropdown has deselect X button/icon                 |

### Dropdown.Menu

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | `menu`  | Customizable test identifier    |

### Dropdown.Option

| Property     | Type                                                        | Default                          | Description                                       |
| ------------ | ----------------------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| `children`   | `ReactNode`                                                 | -                                | Child components to be rendered                   |
| `option`     | `DropdownOptionValue`                                       | -                                | The option object.                                |
| `dataTestId` | `string`                                                    | `dropdown-option-{option.value}` | Customizable test identifier                      |
| `isDisabled` | `boolean`                                                   | `false`                          | Set the dropdown disabled.                        |
| `onClick`    | `(option: string, name: string, event: MouseEvent) => void` | -                                | The triggered function when clicked on the option |

### Dropdown.Detail

| Property     | Type        | Default         | Description                           |
| ------------ | ----------- | --------------- | ------------------------------------- |
| `children`   | `ReactNode` | -               | Child components to be rendered       |
| `dataTestId` | `string`    | `dropdown-text` | Customizable test identifier          |
| `isDisabled` | `boolean`   | `false`         | Disable the dropdown detail text      |
| `hasError`   | `boolean`   | `false`         | Set error state for the dropdown text |

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
dropdown
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
