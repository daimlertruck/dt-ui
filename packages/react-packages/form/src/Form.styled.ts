import styled from '@emotion/styled';

interface GroupItemsStyledProps {
  disabled?: boolean;
}

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ theme }) => theme.spacing.medium};
`;

export const GroupStyled = styled.div`
  ${({ theme }) => `
    row-gap: ${theme.spacing.xmedium};
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${theme.palette.content.default};
  `}
`;

export const LabelStyled = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const GroupItemsStyled = styled.div<GroupItemsStyledProps>`
  ${({ theme, disabled }) => `
    display: flex;
    gap: ${theme.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    flex-direction: column;

    @media only screen and (min-width: ${theme.breakpoints.mq3}px) {
      flex-direction: row;
    }

    ${
      disabled &&
      `
        opacity: 0.5;
        pointer-events: none;
      `
    }
  `}
`;
