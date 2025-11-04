import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const DotsHorizontal: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M16 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></IconBase>;
};
export default DotsHorizontal;