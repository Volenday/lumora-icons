import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatLineSpacing: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M21 6v1H10V6zm0 6v1H10v-1zm0 6v1H10v-1zM5 19.25 7.25 17l.75.66-3.5 3.5-3.5-3.5.75-.66L4 19.25V5.75L1.75 8 1 7.34l3.5-3.5L8 7.34 7.25 8 5 5.75z" /></IconBase>;
};
export default FormatLineSpacing;