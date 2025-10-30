import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const TooltipText: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 4h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5l-3 3-3-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.91l2.59 2.59L14.09 18H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 3h13v1H5zm0 3h12v1H5zm0 3h8v1H5z" /></IconBase>;
};
export default TooltipText;