import { ReactNode } from 'react';

export interface BaseProps {
  children?: ReactNode;
  dataTestId?: string;
  style?: React.CSSProperties;
}
