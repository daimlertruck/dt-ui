# Select Package

A Select is designed to gather input from users by offering a selection from a predefined list of choices, allowing for single selection and multiple selections.

## Select Usage

```jsx
import { Select, SelectOptionValue } from '@dt-ui/react-select';

const items: SelectOptionValue[] = [
  { value: 'value1', label: 'Value 1' },
  { value: 'value2', label: 'Value 2' },
  { value: 'value3', label: 'Value 3', disabled: true },
];

export const App = () => {
  return (
    <Select {...props}>
      {items.map((item, index) => (
        <Select.Option
          disabled={item.disabled}
          index={index}
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </Select>
  );
};
```

## Select

| Property       | Type                 | Default | Description                                                           |
| -------------- | -------------------- | ------- | --------------------------------------------------------------------- |
| `label`        | `string`             | -       | A label to help users understand the scope of the select field.       |
| `initialValue` | `string \| string[]` | []      | Sets the initial value of the select field.                           |
| `helperText`   | `string`             | -       | The message to be displayed below the select field. Useful for hints. |
| `hasError`     | `boolean`            | false   | Set error state for select field.                                     |
| `isDisabled`   | `boolean`            | false   | Determines the disabled state of the select field.                    |
| `isRequired`   | `boolean`            | -       | Set the state of the select field to required.                        |
| `errorMessage` | `string`             | -       | The error message to show when hasError is true                       |
| `style`        | `CSSProperties`      | -       | Add css style directly to the select field.                           |
| `onChange`     | `function`           | -       | The triggered function when the selected option changes.              |
| `isMulti`      | `boolean`            | false   | Toggles the Select between multi selection and single selection       |
| `children`     | `React node`         | -       | Child components to be rendered. Useful to pass the list of options   |

### Select.Option

| Property     | Type                  | Default           | Description                                    |
| ------------ | --------------------- | ----------------- | ---------------------------------------------- |
| `children`   | `ReactNode`           | -                 | Child component to be rendered                 |
| `value`      | `string`              | -                 | Value of the option                            |
| `label`      | `string`              | -                 | Text that describes the option                 |
| `style`      | `React.CSSProperties` | -                 | Add css style directly to the select option.   |
| `dataTestId` | `string`              | `dropdown-select` | Customizable test identifier                   |
| `index`      | `number`              | -                 | To be used to get the properties of the option |

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
- [Downshift](https://www.downshift-js.com/) managing accessibility

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
select
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
