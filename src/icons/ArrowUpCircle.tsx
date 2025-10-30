import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ArrowUpCircle: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11 18V9.75L7.75 13 7 12.34l4.5-4.5 4.5 4.5-.75.66L12 9.75V18zm.5-15a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 1a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17" /></IconBase>;
};
export default ArrowUpCircle;