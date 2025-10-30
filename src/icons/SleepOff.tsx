import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const SleepOff: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.79 4.46.71-.71L20.25 20.5l-.71.71L14 15.66V16H9v-1l1.86-2.5zM2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2zm12-4v1l-1.21 1.62-.72-.71.68-.91h-1.59l-1-1zm-3.74 6h3.08l-1.76-1.76zM16 5h5v1l-3.74 5H21v1h-5v-1l3.75-5H16z" /></IconBase>;
};
export default SleepOff;