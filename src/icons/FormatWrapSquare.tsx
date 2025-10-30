import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatWrapSquare: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11.5 8 4.5 9H7zm0 2.24L8.62 16h5.76zM3 16h2v1H3zm0-4h2v1H3zm0-4h2v1H3zm15 0h2v1h-2zm0 4h2v1h-2zm0 4h2v1h-2zm2 4v1H3v-1zM3 4h17v1H3z" /></IconBase>;
};
export default FormatWrapSquare;