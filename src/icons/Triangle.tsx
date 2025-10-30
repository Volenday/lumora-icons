import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Triangle: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M1 21 11.5 2.81 22 21zm19.27-1L11.5 4.81 2.73 20z" /></IconBase>;
};
export default Triangle;