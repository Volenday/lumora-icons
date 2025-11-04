import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const UnfoldMoreHorizontal: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m15.74 8.83-.7.71L11.5 6 7.96 9.54l-.7-.71 4.24-4.24zm0 7.34-4.24 4.24-4.24-4.24.7-.71L11.5 19l3.54-3.54z" /></IconBase>;
};
export default UnfoldMoreHorizontal;