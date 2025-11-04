import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatWrapInline: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 4v1H3V4zm0 12v1h-6v-1zm0 4v1H3v-1zM7.5 8l4.5 9H3zm0 2.24L4.62 16h5.76z" /></IconBase>;
};
export default FormatWrapInline;