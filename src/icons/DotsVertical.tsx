import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const DotsVertical: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></IconBase>;
};
export default DotsVertical;