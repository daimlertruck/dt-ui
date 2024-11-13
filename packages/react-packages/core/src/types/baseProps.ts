import { ReactNode } from 'react';

export interface BaseProps {
  id?: string;
  children?: ReactNode;
  dataTestId?: string;
  style?: React.CSSProperties;
}
