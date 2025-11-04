import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const MagnifyPlus: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65-.71.71-5.65-5.65A6.47 6.47 0 0 1 9.5 17a6.5 6.5 0 1 1 0-13m0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M7 10h2V8h1v2h2v1h-2v2H9v-2H7z" /></IconBase>;
};
export default MagnifyPlus;