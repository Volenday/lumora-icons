import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const MessageReply: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 20.59 16.41 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2zM20 22h1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h11z" /></IconBase>;
};
export default MessageReply;