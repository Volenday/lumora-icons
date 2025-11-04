import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatAlignJustify: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 5V4h17v1zm0 4V8h17v1zm0 4v-1h17v1zm0 4v-1h17v1zm0 4v-1h17v1z" /></IconBase>;
};
export default FormatAlignJustify;