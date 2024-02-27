import { BaseProps } from '@dt-ui/react-core';
import { Divider } from '@dt-ui/react-divider';

import {
  UnfoldMoreIcon,
  UnfoldLessIcon,
} from '../../../../../dt-ui-react/core';
import { AccordionBackgroundColor } from '../../constants';

import {
  ChildrenContainerStyled,
  FlexContainerStyled,
  HeaderStyled,
  IconContainerStyled,
} from './AccordionHeader.styled';

export interface AccordionHeaderProps extends BaseProps {
  handleHeaderClick: () => void;
  handleHeaderKeyPress: (event: { key: string }) => void;
  backgroundColor: AccordionBackgroundColor;
  isOpenState: boolean;
  isDisabled: boolean;
}

export const AccordionHeader = ({
  handleHeaderClick,
  handleHeaderKeyPress,
  isOpenState,
  backgroundColor,
  isDisabled,
  children,
  dataTestId,
  style,
}: AccordionHeaderProps) => (
  <HeaderStyled
    aria-disabled={isDisabled}
    data-testid={dataTestId ?? 'accordion-header'}
    isDisabled={isDisabled}
    onClick={handleHeaderClick}
    onKeyDown={handleHeaderKeyPress}
    role='button'
    style={style}
    tabIndex={isDisabled ? -1 : 0}
  >
    <FlexContainerStyled>
      <ChildrenContainerStyled>{children}</ChildrenContainerStyled>
      <IconContainerStyled>
        {isOpenState ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
      </IconContainerStyled>
    </FlexContainerStyled>

    {backgroundColor === AccordionBackgroundColor.White ? (
      <Divider style={{ margin: 0, marginTop: -1 }} />
    ) : null}
  </HeaderStyled>
);
