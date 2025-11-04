import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const MinusCircle: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M7 12h9v1H7zm4.5-9a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 1a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17" /></IconBase>;
};
export default MinusCircle;