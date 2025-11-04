import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatAlignRight: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 4v1H3V4zm0 4v1H9V8zm0 4v1H3v-1zm0 4v1H9v-1zm0 4v1H3v-1z" /></IconBase>;
};
export default FormatAlignRight;