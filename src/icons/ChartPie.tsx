import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ChartPie: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 3h1a8 8 0 0 1 8 8v1h-9zm1 8h7a7 7 0 0 0-7-7zm-3 3h8a8 8 0 1 1-8-8zm-1 1V7.07A7 7 0 1 0 16.93 15z" /></IconBase>;
};
export default ChartPie;