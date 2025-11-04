import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';
const CurrencyGbp: FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M7 13v-1h2.82c-.07-.47-.16-.9-.25-1.3-.19-.88-.36-1.7-.32-2.7.08-1.82.67-3.07 1.78-3.73 1.68-1.02 4.02-.27 4.97.09l-.15 1.01c-.64-.27-2.89-1.1-4.31-.24-.8.47-1.23 1.45-1.29 2.87-.04.9.12 1.64.3 2.5.1.45.2.94.29 1.5H15v1h-4.05c.05.38.05.8.05 1.25C11 17.43 9.53 19 8.35 20H17v1H6.5v-1l.81-.43c1.13-.95 2.69-2.24 2.69-5.32 0-.45 0-.87-.05-1.25z" /></IconBase>;
};
export default CurrencyGbp;