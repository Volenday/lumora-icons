import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Paperclip: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M17 7v10.5a5.5 5.5 0 0 1-11 0V6a4 4 0 0 1 8 0v10.5a2.5 2.5 0 0 1-5 0V7h1v9.5a1.5 1.5 0 1 0 3 0V6a3 3 0 0 0-6 0v11.5C7 20 9 22 11.5 22s4.5-2 4.5-4.5V7z" /></IconBase>;
};
export default Paperclip;