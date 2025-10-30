import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Gift: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M4 13v8h7v-8zm8 0v8h7v-8zm8 0v9H3v-9H2V7h3.04L5 6.5a3.5 3.5 0 0 1 6.5-1.8A3.5 3.5 0 0 1 18 6.5l-.04.5H21v6zM3 8v4h8V8zm17 4V8h-8v4zm-3.05-5 .05-.5a2.5 2.5 0 0 0-5 0V7zM11 7v-.5a2.5 2.5 0 0 0-5 0l.05.5z" /></IconBase>;
};
export default Gift;