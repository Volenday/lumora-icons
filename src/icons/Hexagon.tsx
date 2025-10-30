import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Hexagon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m6.59 21-4.9-8.5L6.6 4h9.81l4.91 8.5-4.91 8.5zm9.24-16H7.18l-4.34 7.5L7.17 20h8.66l4.33-7.5z" /></IconBase>;
};
export default Hexagon;