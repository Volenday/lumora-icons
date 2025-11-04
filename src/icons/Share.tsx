import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Share: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M19.59 12 15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33 2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.67c-4.47.21-7.67 1.82-10 5.08 1-5 4-10 11-11V5l7 7-7 7v-4.1c-.33 0-.66.01-1 .02" /></IconBase>;
};
export default Share;