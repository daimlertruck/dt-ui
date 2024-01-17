import { BaseProps } from '../../types';
import { ListStyleType } from '../../utils';

import {
  DescriptionListStyled,
  DescriptionStyled,
  TermStyled,
} from './DescriptionList.styled';

export interface DescriptionListProps extends BaseProps {
  listStyleType?: ListStyleType;
}

export const DescriptionList = ({
  children,
  dataTestId,
  listStyleType = ListStyleType.None,
}: DescriptionListProps) => {
  return (
    <DescriptionListStyled
      data-testid={`${dataTestId ? dataTestId + '-' : ''}description-list`}
      listStyleType={listStyleType}
    >
      {children}
    </DescriptionListStyled>
  );
};

DescriptionList.Term = ({ children }: BaseProps) => {
  return <TermStyled>{children}</TermStyled>;
};

DescriptionList.Description = ({ children }: BaseProps) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};
