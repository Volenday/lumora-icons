import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatFloatNone: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v1H3zm9 9v-1h8v1zM3 7h7v7H3zm1 1v5h5V8zm-1 8h13v1H3zm0 4h17v1H3z" /></IconBase>;
};
export default FormatFloatNone;