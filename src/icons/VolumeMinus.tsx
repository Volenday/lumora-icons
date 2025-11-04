import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const VolumeMinus: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3zm11-2v-1h7v1z" /></IconBase>;
};
export default VolumeMinus;