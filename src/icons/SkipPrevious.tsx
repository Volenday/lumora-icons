import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const SkipPrevious: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M7.6 12.5 18 6v13l-1-.62zm1.9 0 7.5 4.7V7.8zM5 6h1v13H5z" /></IconBase>;
};
export default SkipPrevious;