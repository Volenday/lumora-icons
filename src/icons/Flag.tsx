import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Flag: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 5h8.42l1.16 2H19v9h-6l-1.15-2H6v7H5zm13 10V8h-4l-1.15-2H6v7h6.42l1.16 2z" /></IconBase>;
};
export default Flag;