import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const SimAlert: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11 3-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.41 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.59zM11 9v5h1V9zm0 7v2h1v-2z" /></IconBase>;
};
export default SimAlert;