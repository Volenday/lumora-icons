import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatFloatRight: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 4v1H3V4zm-9 4v1H3V8zm-8 4h5v1H3zm0 4h13v1H3zm0 4h17v1H3zM20 7v7h-7V7zm-1 1h-5v5h5z" /></IconBase>;
};
export default FormatFloatRight;