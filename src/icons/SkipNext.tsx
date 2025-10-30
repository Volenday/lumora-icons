import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const SkipNext: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M15.4 12.5 5 6v13l1-.62zm-1.9 0L6 17.2V7.8zM18 6h-1v13h1z" /></IconBase>;
};
export default SkipNext;