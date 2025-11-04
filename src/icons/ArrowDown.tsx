import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowDown: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 5v12.25L17.25 12l.75.66-6.5 6.5-6.5-6.5.75-.66L11 17.25V5z" /></IconBase>;
};
export default ArrowDown;