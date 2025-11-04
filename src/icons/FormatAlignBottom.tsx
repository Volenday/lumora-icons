import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatAlignBottom: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 21v-1h13v1zm0-4v-1h17v1zm8-13h1v8.25L15.25 9l.75.66-4.5 4.5L7 9.66 7.75 9 11 12.25z" /></IconBase>;
};
export default FormatAlignBottom;