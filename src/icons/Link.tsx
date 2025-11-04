import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Link: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M8 13v-1h7v1zm7.5-6a5.5 5.5 0 0 1 0 11H13v-1h2.5c2.5 0 4.5-2 4.5-4.5S18 8 15.5 8H13V7zm-8 11a5.5 5.5 0 0 1 0-11H10v1H7.5C5 8 3 10 3 12.5S5 17 7.5 17H10v1z" /></IconBase>;
};
export default Link;