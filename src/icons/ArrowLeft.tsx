import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowLeft: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M19 13H6.75L12 18.25l-.66.75-6.5-6.5 6.5-6.5.66.75L6.75 12H19z" /></IconBase>;
};
export default ArrowLeft;