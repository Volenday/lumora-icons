import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Bluetooth: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11 3h1l4.85 4.85-4.64 4.65 4.64 4.65L12 22h-1v-8.29l-4.45 4.45-.71-.71 4.95-4.95-4.95-4.95.71-.71L11 11.29zm1 1.41v6.88l3.44-3.44zm0 16.18 3.44-3.44L12 13.71z" /></IconBase>;
};
export default Bluetooth;