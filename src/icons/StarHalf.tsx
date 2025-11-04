import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const StarHalf: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11 6.06-1.86 4.39-4.75.41L8 14l-1.08 4.63L11 16.18v1.16L5.42 20.7l1.46-6.35-4.92-4.28 6.49-.57 2.55-6z" /></IconBase>;
};
export default StarHalf;