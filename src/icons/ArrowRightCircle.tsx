import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrowRightCircle: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 12h8.25L11 8.75l.67-.75 4.5 4.5-4.5 4.5-.67-.75L14.25 13H6zm15 .5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0m-1 0a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0" /></IconBase>;
};
export default ArrowRightCircle;