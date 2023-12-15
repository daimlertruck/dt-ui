import { BackdropStyled, BackdropStyledProps } from './Backdrop.styled';
import { BackdropType } from './constants';

export interface BackdropProps extends BackdropStyledProps {
  isOpen: boolean;
  children: React.ReactNode;
  dataTestId?: string;
}

export const Backdrop = ({
  isOpen = false,
  type = BackdropType.Dark,
  children,
  dataTestId,
}: BackdropProps) => {
  return (
    <>
      {isOpen && (
        <BackdropStyled type={type} data-testid={dataTestId ?? 'backdrop'}>
          <>{children}</>
        </BackdropStyled>
      )}
    </>
  );
};
