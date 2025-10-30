import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatAlignCenter: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v1H3zm4 4h9v1H7zm-4 4h17v1H3zm4 4h9v1H7zm-4 4h17v1H3z" /></IconBase>;
};
export default FormatAlignCenter;