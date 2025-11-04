import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const BorderAll: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v17H3zm1 1v7h7V5zm15 7V5h-7v7zM4 20h7v-7H4zm15 0v-7h-7v7z" /></IconBase>;
};
export default BorderAll;