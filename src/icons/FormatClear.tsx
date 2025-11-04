import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatClear: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M8 4h9v1h-4L8.5 17h-1L12 5H8zM5 21v-1h8v1zm11.79-3.5L14 14.71l.71-.71 2.79 2.79L20.29 14l.71.71-2.79 2.79L21 20.29l-.71.71-2.79-2.79L14.71 21l-.71-.71z" /></IconBase>;
};
export default FormatClear;