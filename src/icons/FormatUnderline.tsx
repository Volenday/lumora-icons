import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatUnderline: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M17 11.5a5.5 5.5 0 0 1-11 0V4h1v7.5C7 14 9 16 11.5 16s4.5-2 4.5-4.5V4h1zM5 21v-1h13v1z" /></IconBase>;
};
export default FormatUnderline;