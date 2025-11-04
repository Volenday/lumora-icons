import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Download: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 4v12.25L17.25 11l.75.66-6.5 6.5-6.5-6.5.75-.66L11 16.25V4zM3 19h1v2h15v-2h1v3H3z" /></IconBase>;
};
export default Download;