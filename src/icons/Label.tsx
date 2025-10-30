import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Label: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 6h8c.97 0 1.83.46 2.38 1.18l4.16 5.32-4.16 5.32C15.83 18.54 14.97 19 14 19H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m9.58 11.23 3.69-4.73-3.69-4.73C15.21 7.3 14.64 7 14 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8c.64 0 1.21-.3 1.58-.77" /></IconBase>;
};
export default Label;