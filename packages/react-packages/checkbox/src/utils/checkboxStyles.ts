import { Theme } from '@dt-ui/react-core';

export const checkboxStyles = (
  theme: Theme,
  isChecked: boolean,
  isDisabled: boolean
) => {
  if (isChecked) {
    return `
        border: none;
        background-color: ${
          isDisabled
            ? theme.palette.primary.light
            : theme.palette.primary.default
        };
    `;
  }
  return ` 
        border: 1px solid ${theme.palette.border.default};
        background-color: ${
          isDisabled ? theme.palette.base.light : theme.palette.base.default
        };
    `;
};
