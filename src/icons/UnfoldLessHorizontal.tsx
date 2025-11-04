import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const UnfoldLessHorizontal: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M15.74 5.29 11.5 9.54 7.26 5.29l.7-.7 3.54 3.53 3.54-3.53zm0 14.42-.7.7-3.54-3.53-3.54 3.53-.7-.7 4.24-4.25z" /></IconBase>;
};
export default UnfoldLessHorizontal;