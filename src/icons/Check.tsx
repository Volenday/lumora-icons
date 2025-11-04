import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Check: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M18.9 8.1 9 18l-4.95-4.95.71-.71L9 16.59l9.19-9.2z" /></IconBase>;
};
export default Check;