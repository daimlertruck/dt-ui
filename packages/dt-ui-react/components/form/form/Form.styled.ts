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
  row-gap: ${({ theme }) => theme.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.palette.content.default};
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
    column-gap: ${theme.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    ${
      disabled &&
      `
        opacity: 0.5;
        pointer-events: none;
      `
    }
  `}
`;
