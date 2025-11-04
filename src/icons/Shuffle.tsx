import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Shuffle: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M13 5h6v6h-1V6.71L4.71 20 4 19.29 17.29 6H13zm0 14h4.29l-4.58-4.59.7-.7L18 18.29V14h1v6h-6zM4 5.71 4.71 5l5.58 5.59-.7.7z" /></IconBase>;
};
export default Shuffle;