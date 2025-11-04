import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const CropFree: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 4h2v1H6a2 2 0 0 0-2 2v2H3V7a3 3 0 0 1 3-3M4 18a2 2 0 0 0 2 2h2v1H6a3 3 0 0 1-3-3v-2h1zM17 4a3 3 0 0 1 3 3v2h-1V7a2 2 0 0 0-2-2h-2V4zm3 14a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1z" /></IconBase>;
};
export default CropFree;