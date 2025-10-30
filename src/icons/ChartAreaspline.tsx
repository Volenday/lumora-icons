import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ChartAreaspline: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h1v14l5.57-9.67 6.01 3.47 3.62-6.26.86.5-4.11 7.13L9.94 9.7 4 20h2.3l3.87-6.71.5-.86.86.5 5.15 2.97L20 10.14V21H3zm14.04 13.26-6.01-3.47L7.45 20H19v-6.12z" /></IconBase>;
};
export default ChartAreaspline;