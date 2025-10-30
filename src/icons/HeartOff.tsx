import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const HeartOff: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m1.79 3.46.71-.71L19.25 19.5l-.71.71-3.16-3.17-3.88 3.88-7.96-7.96a5.247 5.247 0 0 1 .17-7.59zm2.45 8.79 7.26 7.25 3.17-3.16L4.42 6.08C3.55 6.86 3 8 3 9.25c0 1.17.47 2.25 1.24 3m14.52 0c.74-.75 1.24-1.83 1.24-3a4.25 4.25 0 0 0-7.94-2.11h-1.12A4.24 4.24 0 0 0 7.25 5l-.97.11-.81-.8C6.03 4.11 6.63 4 7.25 4c1.75 0 3.3.85 4.25 2.17C12.45 4.85 14 4 15.75 4A5.25 5.25 0 0 1 21 9.25c0 1.45-.59 2.75-1.54 3.71l-2.67 2.67-.7-.71z" /></IconBase>;
};
export default HeartOff;