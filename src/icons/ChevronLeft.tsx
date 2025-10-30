import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ChevronLeft: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M14.41 18.16 8.75 12.5l5.66-5.66.7.71-4.95 4.95 4.95 4.95z" /></IconBase>;
};
export default ChevronLeft;