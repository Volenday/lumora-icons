import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Rhombus: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.59 12.5 8.91-8.91 8.91 8.91-8.91 8.91zM11.5 5 4 12.5l7.5 7.5 7.5-7.5z" /></IconBase>;
};
export default Rhombus;