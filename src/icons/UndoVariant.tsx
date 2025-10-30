import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const UndoVariant: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 20v-1h1v1zm7-12a6 6 0 1 1 0 12H9v-1h4a5 5 0 1 0 0-10H5.91l3.04 3.04-.71.7L4 8.5l4.24-4.24.71.7L5.91 8z" /></IconBase>;
};
export default UndoVariant;