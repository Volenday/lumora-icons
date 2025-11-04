import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatBold: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M16 14.5a3.5 3.5 0 0 1-3.5 3.5H7V5h4.5A3.5 3.5 0 0 1 15 8.5c0 1.1-.5 2.07-1.29 2.71C15.05 11.71 16 13 16 14.5M11.5 6H8v5h3.5a2.5 2.5 0 0 0 0-5m1 6H8v5h4.5a2.5 2.5 0 0 0 0-5" /></IconBase>;
};
export default FormatBold;