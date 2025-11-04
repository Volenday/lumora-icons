import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FastForward: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M21.4 12.5 12 18.38 11 19v-5.62l-8 5L2 19V6l9 5.62V6zm-1.9 0L12 7.8v9.4zm-9 0L3 7.8v9.4z" /></IconBase>;
};
export default FastForward;