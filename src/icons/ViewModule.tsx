import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ViewModule: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M15 6h5v6h-5zm-6 6V6h5v6zm6 7v-6h5v6zm-6 0v-6h5v6zm-6 0v-6h5v6zm0-7V6h5v6zm1-5v4h3V7zm6 0v4h3V7zm6 0v4h3V7zM4 14v4h3v-4zm6 0v4h3v-4zm6 0v4h3v-4z" /></IconBase>;
};
export default ViewModule;