import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Music: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M8 6.1 19 5v11a3 3 0 1 1-3-3c.77 0 1.47.29 2 .76V9.04l-9 1V17a3 3 0 1 1-3-3c.77 0 1.47.29 2 .76zM9 7v2.03l9-.99V6.09zM8 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0m10-1a2 2 0 1 0-4 0 2 2 0 0 0 4 0" /></IconBase>;
};
export default Music;