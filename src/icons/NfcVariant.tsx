import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const NfcVariant: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm8 8.5a1.5 1.5 0 1 1-3 0c0-.65.42-1.21 1-1.41V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H7v9h9V8h-4v3.09c.58.2 1 .76 1 1.41m-1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></IconBase>;
};
export default NfcVariant;