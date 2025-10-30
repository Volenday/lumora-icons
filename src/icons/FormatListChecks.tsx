import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatListChecks: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M20 18v1H7v-1zm0-6v1H7v-1zm0-6v1H7V6zM2 5h3v3H2zm1 1v1h1V6zm-1 5h3v3H2zm1 1v1h1v-1zm-1 5h3v3H2zm1 1v1h1v-1z" /></IconBase>;
};
export default FormatListChecks;