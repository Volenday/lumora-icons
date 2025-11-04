import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowUp: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11 20V7.75L5.75 13 5 12.34l6.5-6.5 6.5 6.5-.75.66L12 7.75V20z" /></IconBase>;
};
export default ArrowUp;