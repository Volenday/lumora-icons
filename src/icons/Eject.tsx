import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Eject: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m5.33 15 6.17-9.25L17.67 15zM5 18h13v1H5zm2-3.97h9l-4.5-6.78z" /></IconBase>;
};
export default Eject;