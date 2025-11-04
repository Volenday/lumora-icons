import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Pin: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M14 12.41V5h1V4H8v1h1v7.41l-2 2V15h9v-.59zM17 14v2h-5v4.5l-.5 1.5-.5-1.5V16H6v-2l2-2V6H7V3h9v3h-1v6z" /></IconBase>;
};
export default Pin;