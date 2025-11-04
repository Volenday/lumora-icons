import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Flash: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m16 3-3.5 7H16l-6 12.03V14H7V3zm-5.11 8 3.49-7H8v9h3v4.79L14.38 11z" /></IconBase>;
};
export default Flash;