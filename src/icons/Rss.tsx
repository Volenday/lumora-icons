import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Rss: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3-6c6.08 0 11 4.92 11 11h-1A10 10 0 0 0 2 12zm0-4a15 15 0 0 1 15 15h-1A14 14 0 0 0 2 8zm0-4c10.5 0 19 8.5 19 19h-1A18 18 0 0 0 2 4z" /></IconBase>;
};
export default Rss;