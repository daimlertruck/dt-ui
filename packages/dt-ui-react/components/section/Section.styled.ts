import styled from '@emotion/styled';

import { SectionVariant } from './constants';

interface SectionStyledProps {
  variant?: SectionVariant;
  withPageHeader?: boolean;
}

interface DetailStyledProps {
  isInline: boolean;
}

export const SectionStyled = styled.section<SectionStyledProps>`
  ${({ theme, variant, withPageHeader }) => `
  margin-top: ${theme.spacing.large};

    ${
      variant == SectionVariant.Box &&
      `
        background-color: ${theme.colors.white};
        box-shadow: ${theme.shadows[0.5]};
        padding: ${theme.spacing.large};

        > div:first-of-type {
          padding-top: ${theme.spacing.medium};
        };
      `
    };

    ${
      withPageHeader &&
      `
        padding: ${theme.spacing.xlarge} ${theme.spacing.large};
        margin-top: 0px;
      `
    };
  `}
`;

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing.none};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailStyled = styled.div<DetailStyledProps>`
  ${({ isInline }) => `
    p:first-of-type {
      display: ${isInline ? 'inline' : 'block'};
      padding-right: ${isInline ? '10px' : '0'};
    }

    p:last-child {
      display: ${isInline ? 'inline' : 'block'};
    }
  `}
`;

export const SubSectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.gray_90};
  border-top: none;
`;

export const FooterStyled = styled.div`
  ${({ theme }) => `
      display: flex;
      justify-content: space-between;
      align-item: center;
      width: 100%;
      padding: ${theme.spacing.xmedium} ${theme.spacing.large};
      background-color: ${theme.colors.gray_70};
    `}
`;
