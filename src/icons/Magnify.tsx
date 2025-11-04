import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Magnify: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M9.104 3.833a6.23 6.23 0 0 1 6.23 6.23c0 1.552-.566 2.97-1.505 4.053l5.414 5.415-.68.68-5.415-5.414a6.2 6.2 0 0 1-4.044 1.495 6.23 6.23 0 0 1 0-12.459m0 .959a5.27 5.27 0 1 0 0 10.541 5.27 5.27 0 0 0 0-10.541" /></IconBase>;
};
export default Magnify;