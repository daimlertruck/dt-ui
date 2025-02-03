import styled from '@emotion/styled';

import {
  TextAreaVariant,
  TextAreaBackgroundFill,
  getThemedBackgroundFill,
} from './constants';

export interface TextAreaStyledProps {
  variant: TextAreaVariant;
  backgroundFill: TextAreaBackgroundFill;
  enableResize?: boolean;
  hasError?: boolean;
}

export const TextAreaWrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    
    border-style: solid;
    border-width: 0;
    border-color: ${theme.palette.border.dark};
    
    
    `}
`;

export const TextAreaMessageStyled = styled.div`
  ${({ theme }) => `padding-left: ${theme.spacing['2xs']}`};
`;

export const TextAreaMessages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const TextAreaStyled = styled.textarea<TextAreaStyledProps>`
  ${({
    theme,
    variant,
    enableResize = false,
    hasError = false,
    backgroundFill: backgroundFill,
  }) => `
    ${theme.fontStyles.body1}

    background-color: ${getThemedBackgroundFill(backgroundFill, theme)};

    width: 100%;
    padding: 20px 14px 14px 14px;
    margin-top: 5px;
    color: ${theme.palette.content.dark};
    resize: ${enableResize ? 'vertical' : 'none'};
    outline: none;


    ${
      variant === 'outlined'
        ? `border-radius: ${theme.shape.formField};
            border: 1px solid ${
              hasError
                ? theme.palette.error.default
                : theme.palette.border.default
            };
              &:focus { border: 1px solid ${
                hasError
                  ? theme.palette.error.default
                  : theme.palette.primary.default
              }};`
        : `border-radius: ${theme.shape.formField} 
                            ${theme.shape.formField} 0 0;
            border-bottom: 1px solid ${
              hasError
                ? theme.palette.error.default
                : theme.palette.border.default
            };
              &:focus { border-bottom: 1px solid  ${
                hasError
                  ? theme.palette.error.default
                  : theme.palette.primary.default
              };}`
    };

    ${variant === 'outlined' ? 'border-width: 1px' : 'border-width: 0 0 1px'};

  `}
`;
