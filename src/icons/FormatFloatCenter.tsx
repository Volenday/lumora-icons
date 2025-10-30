import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatFloatCenter: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v1H3zm0 12h17v1H3zm13 4v1H3v-1zM8 7h7v7H8zm6 1H9v5h5z" /></IconBase>;
};
export default FormatFloatCenter;