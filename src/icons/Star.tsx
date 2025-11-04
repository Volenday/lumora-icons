import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const Star: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M12.86 10.44 11 6.06l-1.86 4.39-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14zm3.73 10.26L11 17.34 5.42 20.7l1.46-6.35-4.92-4.28 6.49-.57 2.55-6 2.55 6 6.49.57-4.92 4.27z" /></IconBase>;
};
export default Star;