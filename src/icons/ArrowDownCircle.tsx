import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowDownCircle: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 7v8.25L15.25 12l.75.66-4.5 4.5-4.5-4.5.75-.66L11 15.25V7zm-.5 15a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19m0-1a8.501 8.501 0 0 0 6.01-14.51A8.5 8.5 0 1 0 11.5 21" /></IconBase>;
};
export default ArrowDownCircle;