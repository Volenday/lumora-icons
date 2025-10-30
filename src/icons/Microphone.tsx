import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Microphone: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11 21v-3c-3.36-.27-6-3.08-6-6.5V11h1v.5a5.5 5.5 0 0 0 11 0V11h1v.5c0 3.42-2.64 6.23-6 6.5v3zm.5-18A2.5 2.5 0 0 1 14 5.5v6a2.5 2.5 0 0 1-5 0v-6A2.5 2.5 0 0 1 11.5 3m0 1A1.5 1.5 0 0 0 10 5.5v6a1.5 1.5 0 1 0 3 0v-6A1.5 1.5 0 0 0 11.5 4" /></IconBase>;
};
export default Microphone;