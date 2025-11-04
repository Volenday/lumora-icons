import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Console: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2zM3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3zm14 0h-5v-1h5zM6 10.5l.71-.71 4.2 4.21-4.2 4.21L6 17.5 9.5 14z" /></IconBase>;
};
export default Console;