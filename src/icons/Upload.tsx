import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Upload: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12 18.16V5.91l5.25 5.25.75-.66L11.5 4 5 10.5l.75.66L11 5.91v12.25zM3 19h1v2h15v-2h1v3H3z" /></IconBase>;
};
export default Upload;