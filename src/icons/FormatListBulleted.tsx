import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatListBulleted: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 18v1H7v-1zm-16.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M20 12v1H7v-1zm-16.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M20 6v1H7V6zM3.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></IconBase>;
};
export default FormatListBulleted;