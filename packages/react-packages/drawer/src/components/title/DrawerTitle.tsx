import { Typography } from '@dt-ui/react-typography';

export interface DrawerTitleProps {
  title: string;
}

export const DrawerTitle = ({ title }: DrawerTitleProps) => (
  <Typography color='content.dark' element='h4' fontStyles='h4'>
    {title}
  </Typography>
);
