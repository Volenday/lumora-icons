import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Square: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v17H3zm1 1v15h15V5z" /></IconBase>;
};
export default Square;