import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Heart: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3 4.25 4.25 0 0 1 7.94-2.11h1.12A4.24 4.24 0 0 1 15.75 5 4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71A5.247 5.247 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4 5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z" /></IconBase>;
};
export default Heart;