import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Logout: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5 3h9v7h-1V4H3v17h10v-6h1v7H2V3zm3 9h11.25L16 8.75l.66-.75 4.5 4.5-4.5 4.5-.66-.75L19.25 13H8z" /></IconBase>;
};
export default Logout;