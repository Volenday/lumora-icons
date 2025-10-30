import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ContentCut: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M9 6.5c0 .79-.26 1.5-.7 2.1L20 20.29V21h-.71l-7.79-7.79-3.2 3.19a3.5 3.5 0 1 1-.7-.7l3.19-3.2L7.6 9.3A3.5 3.5 0 1 1 9 6.5m-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M19.29 4H20v.71l-7.15 7.14-.7-.7zM5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></IconBase>;
};
export default ContentCut;