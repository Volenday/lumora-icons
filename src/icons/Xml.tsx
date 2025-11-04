import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Xml: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m16.67 17.24-.71-.7L20.5 12l-4.54-4.54.71-.7L21.91 12zm-9.34 0L2.09 12l5.24-5.24.71.7L3.5 12l4.54 4.54zm5.9-12.74h1l-3.46 15h-1z" /></IconBase>;
};
export default Xml;