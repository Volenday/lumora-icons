import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Tag: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M15.62 21.12a3 3 0 0 1-4.24 0L3.05 13C2.45 12.45 2 11.63 2 10.75V6a3 3 0 0 1 3-3h4.75c.88 0 1.7.45 2.25 1.05l8.07 8.38a3 3 0 0 1 0 4.24zm-.71-.71 4.45-4.45c.78-.78.78-2.05 0-2.83l-8.25-8.55C10.78 4.2 10.3 4 9.75 4l-4.78-.03C3.87 3.97 3 4.9 3 6v4.75c0 .55.2 1.03.58 1.36l8.5 8.3c.78.78 2.05.78 2.83 0M6.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></IconBase>;
};
export default Tag;