import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Script: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 19a2 2 0 0 0 2 2h6.76c-.47-.53-.76-1.23-.76-2zm11 2a2 2 0 0 0 2-2V6c0-.77.29-1.47.76-2H8a2 2 0 0 0-2 2v12h6v1a2 2 0 0 0 2 2M5 6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v2h-5v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h3zm16 1V6a2 2 0 1 0-4 0v1z" /></IconBase>;
};
export default Script;