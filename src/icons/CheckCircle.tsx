import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const CheckCircle: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M17.15 9.6 10 16.75l-3.2-3.2.7-.71 2.5 2.5 6.44-6.45zM11.5 3c5.25 0 9.5 4.25 9.5 9.5S16.75 22 11.5 22 2 17.75 2 12.5 6.25 3 11.5 3m0 1C6.81 4 3 7.81 3 12.5S6.81 21 11.5 21s8.5-3.81 8.5-8.5S16.19 4 11.5 4" /></IconBase>;
};
export default CheckCircle;