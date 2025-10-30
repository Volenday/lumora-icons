import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ChartLine: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h1v14l5.58-9.67 6.01 3.47 3.62-6.26.86.5-4.11 7.13L9.95 9.7 4 20h16v1H3z" /></IconBase>;
};
export default ChartLine;