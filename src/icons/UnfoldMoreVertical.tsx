import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const UnfoldMoreVertical: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m15.17 16.74-.71-.7L18 12.5l-3.54-3.54.71-.7 4.24 4.24zm-7.34 0L3.59 12.5l4.24-4.24.71.7L5 12.5l3.54 3.54z" /></IconBase>;
};
export default UnfoldMoreVertical;