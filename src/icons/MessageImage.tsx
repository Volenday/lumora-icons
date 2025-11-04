import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const MessageImage: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 20.59 6.59 17H18a2 2 0 0 0 2-2v-.09l-5.21-5.2-5 5-2.5-2.5L3 16.5zM20 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.09l4.29-4.3 2.5 2.5 5-5L20 13.5zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7zM9 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></IconBase>;
};
export default MessageImage;