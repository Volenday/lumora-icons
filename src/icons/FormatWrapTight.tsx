import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const FormatWrapTight: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11.5 8 4.5 9H7zm0 2.24L8.62 16h5.76zM3 4h17v1H3zm11 4h6v1h-6zM3 8h6v1H3zm0 4h4v1H3zm0 4h2v1H3zm15 0h2v1h-2zm-2-4h4v1h-4zM3 20h17v1H3z" /></IconBase>;
};
export default FormatWrapTight;