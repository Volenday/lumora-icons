import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ChevronDoubleUp: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m5.84 17.41 5.66-5.66 5.66 5.66-.71.7-4.95-4.95-4.95 4.95zm0-4 5.66-5.66 5.66 5.66-.71.7-4.95-4.95-4.95 4.95z" /></IconBase>;
};
export default ChevronDoubleUp;