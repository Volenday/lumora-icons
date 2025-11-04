import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Pencil: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m19.71 8.04-2.34 2.33-3.75-3.75 2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25 13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54 2.34 2.34 1.54-1.54zM15.36 11 13 8.64l-9 9.02V20h2.34z" /></IconBase>;
};
export default Pencil;