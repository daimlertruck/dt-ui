import { FormEvent, ReactNode } from 'react';

import { InfoIcon } from '../../../core';
import { BaseProps } from '../../../types';
import { TooltipDirection } from '../../tooltip';
import Tooltip from '../../tooltip/Tooltip';
import { Typography } from '../../typography';

import {
  FormStyled,
  GroupItemsStyled,
  GroupStyled,
  LabelStyled,
} from './Form.styled';

export interface GroupProps extends BaseProps {
  isDisabled?: boolean;
  title?: string;
  tooltip?: ReactNode;
}

export interface FormProps extends BaseProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const DEFAULT_ON_SUBMIT = (event: FormEvent<HTMLFormElement>) =>
  event.preventDefault();

const Form = ({
  children,
  dataTestId,
  style,
  onSubmit = DEFAULT_ON_SUBMIT,
}: FormProps) => {
  const testId = dataTestId ?? 'test-form';

  return (
    <FormStyled data-testid={testId} style={style} onSubmit={onSubmit}>
      {children}
    </FormStyled>
  );
};

Form.Group = ({ children, isDisabled, title, tooltip, style }: GroupProps) => {
  return (
    <GroupStyled style={style}>
      {title && (
        <LabelStyled>
          <Typography
            fontStyles='h6'
            color='blue_100'
            style={{ textTransform: 'uppercase' }}
          >
            {title}
          </Typography>
          {tooltip && (
            <Tooltip>
              <InfoIcon width='16' height='16' />
              <Tooltip.Content
                style={{ maxWidth: 250 }}
                direction={TooltipDirection.Right}
              >
                {tooltip}
              </Tooltip.Content>
            </Tooltip>
          )}
        </LabelStyled>
      )}

      <GroupItemsStyled disabled={isDisabled}>{children}</GroupItemsStyled>
    </GroupStyled>
  );
};

export default Form;
