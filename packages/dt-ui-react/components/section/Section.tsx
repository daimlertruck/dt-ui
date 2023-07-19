import React, { ReactNode } from 'react';

import { BaseProps } from '../../types';
import { Box } from '../box';
import { Spinner } from '../spinner';
import { Typography } from '../typography';

import { SectionVariant } from './constants';
import {
  DetailStyled,
  SectionStyled,
  SubSectionStyled,
  HeaderStyled,
  ContainerStyled,
  FooterStyled,
} from './Section.styled';

export interface SectionProps extends BaseProps {
  variant?: SectionVariant;
  withPageHeader?: boolean;
}

export interface SectionContentProps extends BaseProps {
  isLoading?: boolean;
}

export interface DetailProps extends BaseProps {
  children: ReactNode;
  title: string;
  isInline?: boolean;
}

export const Section = ({
  children,
  dataTestId,
  style,
  variant = SectionVariant.Box,
  withPageHeader = false,
}: SectionProps) => {
  return (
    <SectionStyled
      variant={variant}
      withPageHeader={withPageHeader}
      style={style}
      data-testid={`${dataTestId ? `${dataTestId}-` : ''}section`}
    >
      {children}
    </SectionStyled>
  );
};

Section.Header = ({ children }: BaseProps) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

Section.Title = ({ children, dataTestId }: BaseProps) => {
  return (
    <Typography element='h2' fontStyles='h5' dataTestId={dataTestId}>
      {children}
    </Typography>
  );
};

Section.Content = ({ isLoading, children }: SectionContentProps) => {
  if (isLoading) {
    return (
      <Box style={{ margin: '30px 0px' }}>
        <Spinner />
      </Box>
    );
  }

  return <>{children}</>;
};

Section.Detail = ({
  title,
  children,
  isInline = false,
  dataTestId,
  style,
}: DetailProps) => {
  return (
    <DetailStyled
      data-testid={dataTestId ?? 'section-detail'}
      isInline={isInline}
      style={style}
    >
      <Typography fontStyles='pXXSmall' color='gray_100'>
        {title}
      </Typography>
      {children}
    </DetailStyled>
  );
};

Section.SubSection = ({ children, dataTestId }: BaseProps) => {
  return (
    <SubSectionStyled data-testid={dataTestId ?? 'subsection-container'}>
      {children}
    </SubSectionStyled>
  );
};

Section.Container = ({
  children,
  style,
  dataTestId = 'default',
}: SectionContentProps) => {
  return (
    <ContainerStyled
      data-testid={`${dataTestId}-section-container`}
      style={style}
    >
      {children}
    </ContainerStyled>
  );
};

Section.Footer = ({ children, dataTestId = 'default' }: BaseProps) => {
  return (
    <FooterStyled data-testid={`${dataTestId}-section-footer`}>
      {children}
    </FooterStyled>
  );
};
