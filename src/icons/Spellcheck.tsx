import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Spellcheck: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m8.5 17.5.71-.71 3.5 3.5 7.79-7.79.71.71-8.5 8.5zM4.71 13 3.5 16h-1L7.35 4h1.4l4.85 12h-1l-1.21-3zm.41-1H11L8.05 4.74z" /></IconBase>;
};
export default Spellcheck;