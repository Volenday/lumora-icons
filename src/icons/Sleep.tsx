import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Sleep: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2zm7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9zm7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16z" /></IconBase>;
};
export default Sleep;