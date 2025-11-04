import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowRight: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M4 12h12.25L11 6.75l.66-.75 6.5 6.5-6.5 6.5-.66-.75L16.25 13H4z" /></IconBase>;
};
export default ArrowRight;