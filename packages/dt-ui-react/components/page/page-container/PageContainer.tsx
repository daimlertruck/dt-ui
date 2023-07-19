import { BaseProps } from '../../../types';
import { PageType } from '../constants';

import { PageContainerStyled } from './PageContainer.styled';

export interface PageContainerProps extends BaseProps {
  pageType?: PageType;
}

export const PageContainer = ({
  children,
  pageType = PageType.None,
}: PageContainerProps) => {
  return (
    <PageContainerStyled pageType={pageType} data-testid='page-container'>
      {children}
    </PageContainerStyled>
  );
};
