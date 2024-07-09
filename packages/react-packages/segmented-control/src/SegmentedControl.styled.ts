import styled from '@emotion/styled';

export const SegmentedControlStyled = styled.div`
  ${({ theme }) => `
    display: inline-flex;
    align-items: center;
    padding: ${theme.spacing['5xs']};
    border: 1px solid ${theme.palette.border.default};
    border-radius: ${theme.shape.segmentedControl};
  `}
`;
