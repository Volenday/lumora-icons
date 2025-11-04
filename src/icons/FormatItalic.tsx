import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatItalic: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 17v-1h3l4-11h-3V4h7v1h-3l-4 11h3v1z" /></IconBase>;
};
export default FormatItalic;