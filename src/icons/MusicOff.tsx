import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const MusicOff: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.79 4.46.71-.71L20.25 20.5l-.71.71-2.42-2.43c-.35.14-.72.22-1.12.22a3 3 0 0 1-3-3c0-.4.08-.77.22-1.12L9 10.66V17a3 3 0 1 1-3-3c.77 0 1.47.29 2 .76v-5.1zM8 6.1 19 5v11c0 .53-.14 1.03-.38 1.46l-.75-.75a2 2 0 0 0-2.58-2.58l-.75-.75a3.01 3.01 0 0 1 3.46.38V9.04l-7 .78-.92-.91L18 8.04V6.09L9 7v.84l-1-1zm6 9.9a2 2 0 0 0 2 2h.31L14 15.69zm-6 1a2 2 0 1 0-4 0 2 2 0 0 0 4 0" /></IconBase>;
};
export default MusicOff;