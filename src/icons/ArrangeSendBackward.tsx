import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ArrangeSendBackward: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 7h4v1H7.71l6.71 6.72-.7.7L7 8.71V11H6zm14 14H8v-9l1 1v7h10V10h-7l-1-1h9zM3 16V4h12v3h-1V5H4v10h2v1z" /></IconBase>;
};
export default ArrangeSendBackward;