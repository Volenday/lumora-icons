import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatIndentIncrease: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 21v-1h17v1zm8-4v-1h9v1zm0-4v-1h9v1zm0-4V8h9v1zM3 5V4h17v1zm5.5 7.5L3 18V7zm-1.41 0L4 9.41v6.18z" /></IconBase>;
};
export default FormatIndentIncrease;