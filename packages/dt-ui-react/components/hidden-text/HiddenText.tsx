import { BaseProps } from '../../types';
import { Box } from '../box';

import { DiscStyled } from './Disc.styled';

export interface HiddenTextProps extends BaseProps {
  text: string;
  isVisible?: boolean;
  size?: number;
  visibleCharSize?: number;
}

export const HiddenText = ({
  text,
  dataTestId,
  isVisible = false,
  size = 27,
  visibleCharSize,
  style,
}: HiddenTextProps) => {
  const componentText = isVisible
    ? text
    : visibleCharSize
    ? Array.from({ length: size }, (_, idx) =>
        idx >= visibleCharSize ? <DiscStyled key={idx} /> : text[idx]
      )
    : Array.from({ length: size }, (_, idx) => <DiscStyled key={idx} />);

  return (
    <Box
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...style,
      }}
      element='span'
      dataTestId={dataTestId ?? 'hidden-text'}
    >
      {componentText}
    </Box>
  );
};
