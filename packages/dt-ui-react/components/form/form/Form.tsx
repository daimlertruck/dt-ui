import { FormEvent, ReactNode } from 'react';

import { InfoIcon } from '../../../core';
import { BaseProps } from '../../../types';
import { OTooltipDirection } from '../../tooltip';
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
    <FormStyled data-testid={testId} onSubmit={onSubmit} style={style}>
      {children}
    </FormStyled>
  );
};

Form.Group = ({ children, isDisabled, title, tooltip }: GroupProps) => {
  return (
    <GroupStyled>
      {title ? (
        <LabelStyled>
          <Typography
            color='blue_100'
            fontStyles='h6'
            style={{ textTransform: 'uppercase' }}
          >
            {title}
          </Typography>
          {tooltip ? (
            <Tooltip>
              <InfoIcon height='16' width='16' />
              <Tooltip.Content
                direction={OTooltipDirection.Right}
                style={{ maxWidth: 250 }}
              >
                {tooltip}
              </Tooltip.Content>
            </Tooltip>
          ) : null}
        </LabelStyled>
      ) : null}

      <GroupItemsStyled disabled={isDisabled}>{children}</GroupItemsStyled>
    </GroupStyled>
  );
};

export default Form;
