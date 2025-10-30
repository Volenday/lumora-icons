import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Cancel: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11.5 22a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19m0-1a8.5 8.5 0 0 0 8.5-8.5c0-2.17-.81-4.15-2.14-5.65l-12.01 12A8.47 8.47 0 0 0 11.5 21m0-17A8.5 8.5 0 0 0 3 12.5c0 2.17.81 4.14 2.15 5.64l12-12A8.5 8.5 0 0 0 11.5 4" /></IconBase>;
};
export default Cancel;