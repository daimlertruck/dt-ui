# Pagination Package

The Pagination component enables the user to select a specific page from a range of pages.

## Pagination Usage

```jsx
import { Pagination, PaginationInput, usePagination } from '@dt-ui/react';
const totalPages = 10;

const { currentPage, handleChange, handleUserInput } = usePagination();

return (
  <Pagination>
    <Pagination.PreviousItem
      disabled={currentPage <= 1 || currentPage > totalPages}
      onClick={() => handleChange(currentPage - 1)}
    />
    <PaginationInput
      value={currentPage}
      totalPages={totalPages}
      onHandleKeyDown={handleUserInput}
      onChange={handleChange}
    />
    <Pagination.Content
      totalPages={totalPages}
      onClick={() => handleChange(totalPages)}
    />
    <Pagination.NextItem
      disabled={currentPage >= totalPages || currentPage < 1}
      onClick={() => handleChange(currentPage + 1)}
    />
  </Pagination>
);
```

## Properties

### Pagination

| Property     | Type        | Default            | Description                     |
| ------------ | ----------- | ------------------ | ------------------------------- |
| `children`   | `ReactNode` | -                  | Child components to be rendered |
| `dataTestId` | `string`    | pagination-wrapper | Customizable test identifier    |

### Pagination.PreviousItem

| Property   | Type       | Default | Description                                       |
| ---------- | ---------- | ------- | ------------------------------------------------- |
| `onClick`  | `function` | -       | The triggered function when clicked on the button |
| `disabled` | `boolean`  | false   | Determines the disabled state of the button       |

### Pagination.NextItem

| Property   | Type       | Default | Description                                       |
| ---------- | ---------- | ------- | ------------------------------------------------- |
| `onClick`  | `function` | -       | The triggered function when clicked on the button |
| `disabled` | `boolean`  | false   | Determines the disabled state of the button       |

### Pagination.Content

| Property     | Type       | Default | Description                                       |
| ------------ | ---------- | ------- | ------------------------------------------------- |
| `onClick`    | `function` | -       | The triggered function when clicked on the button |
| `totalPages` | `number`   | -       | It will be the number displayed on the button     |

### PaginationInput

| Property          | Type       | Default | Description                                          |
| ----------------- | ---------- | ------- | ---------------------------------------------------- |
| `totalPages`      | `number`   | -       | Total number of pages                                |
| `onChange`        | `function` | -       | Function to be executed when debounced value changes |
| `onHandleKeyDown` | `function` | -       | Event fired when a key is pressed                    |
| `value`           | `number`   | -       | Value to be displayed on the input                   |

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
pagination
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
