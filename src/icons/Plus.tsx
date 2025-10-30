import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Plus: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" /></IconBase>;
};
export default Plus;