import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Rewind: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m1 12.5 9.4 5.88 1 .62v-5.62l8 5 1 .62V6l-9 5.62V6zm1.89 0 7.51-4.7v9.4zm9 0 7.51-4.7v9.4z" /></IconBase>;
};
export default Rewind;