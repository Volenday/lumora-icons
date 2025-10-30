import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Sim: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m11 3-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.41 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.59zM8 11v4h1v-4zm3 0v2h1v-2zm3 0v4h1v-4zm-3 4v4h1v-4zm-3 2v2h1v-2zm6 0v2h1v-2z" /></IconBase>;
};
export default Sim;