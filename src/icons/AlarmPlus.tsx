import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const AlarmPlus: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11.5 6a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m0 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m3.75-1.75.64-.75 3.83 3.2-.64.76zm-7.5 0L3.92 8.46l-.64-.76 3.83-3.2zM11 11h1v2h2v1h-2v2h-1v-2H9v-1h2z" /></IconBase>;
};
export default AlarmPlus;