import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Login: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M15 3H9c-.796 0-2.31.004-3 .004V10h1V4h9.989S17 5.47 17 6v15H7v-6H6v7h12V3zM3 12h10.25L10 8.75l.66-.75 4.5 4.5-4.5 4.5-.66-.75L13.25 13H3z" /></IconBase>;
};
export default Login;