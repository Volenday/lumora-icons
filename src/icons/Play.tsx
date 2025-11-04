import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Play: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M18.4 12.5 9 18.38 8 19V6zm-1.9 0L9 7.8v9.4z" /></IconBase>;
};
export default Play;