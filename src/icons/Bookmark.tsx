import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Bookmark: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M8 3h8a3 3 0 0 1 3 3v15l-7-3-7 3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13.5l6-2.56 6 2.56V6a2 2 0 0 0-2-2z" /></IconBase>;
};
export default Bookmark;