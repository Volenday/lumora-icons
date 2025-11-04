import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const ChartBar: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M2 4h1v16h2V10h4v10h2V6h4v14h2v-6h4v7H2zm16 11v5h2v-5zm-6-8v13h2V7zm-6 4v9h2v-9z" /></IconBase>;
};
export default ChartBar;