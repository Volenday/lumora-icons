import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const RedoVariant: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M17 20v-1h-1v1zM10 8a6 6 0 1 0 0 12h4v-1h-4a5 5 0 0 1 0-10h7.09l-3.04 3.04.71.7L19 8.5l-4.24-4.24-.71.7L17.09 8z" /></IconBase>;
};
export default RedoVariant;