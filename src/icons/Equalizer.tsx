import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Equalizer: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M13 4v17h-3V4zm7 6v11h-3V10zM6 13v8H3v-8zm8-10H9v19h5zm7 6h-5v13h5zM7 12H2v10h5z" /></IconBase>;
};
export default Equalizer;