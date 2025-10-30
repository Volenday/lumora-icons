import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Layers: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.7 11 8.67-6.75 8.93 6.98L11.63 18zm16 .21L11.39 5.5 4.32 11l7.31 5.73zM11.63 21 2.7 14l.8-.6 8.11 6.35 7.89-6.16.8.64z" /></IconBase>;
};
export default Layers;