import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatWrapTopBottom: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11.5 8 4.5 9H7zm0 2.24L8.62 16h5.76zM3 4h17v1H3zm17 16v1H3v-1z" /></IconBase>;
};
export default FormatWrapTopBottom;