import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ClosedCaption: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M4 5h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm4.5 2c1 0 1.9.32 2.65.86l-.59.81C10 9.25 9.27 9 8.5 9a3.5 3.5 0 0 0 0 7c.77 0 1.5-.25 2.06-.67l.59.81c-.75.54-1.65.86-2.65.86C6 17 4 15 4 12.5S6 8 8.5 8m7.85 0c.99 0 1.91.32 2.65.86l-.59.81a3.499 3.499 0 0 0-5.56 2.83 3.499 3.499 0 0 0 5.56 2.83l.59.81c-.74.54-1.66.86-2.65.86-2.48 0-4.5-2-4.5-4.5S13.87 8 16.35 8" /></IconBase>;
};
export default ClosedCaption;