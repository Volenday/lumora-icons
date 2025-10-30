import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Lock: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3V6.5C7 4 9 2 11.5 2S16 4 16 6.5zM7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm8-1V6.5a3.5 3.5 0 1 0-7 0V8zm-3.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" /></IconBase>;
};
export default Lock;