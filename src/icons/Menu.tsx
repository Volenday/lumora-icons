import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Menu: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z" /></IconBase>;
};
export default Menu;