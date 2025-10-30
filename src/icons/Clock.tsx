import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Clock: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11.5 3a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 1a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17M11 7h1v5.42l4.7 2.71-.5.87-5.2-3z" /></IconBase>;
};
export default Clock;