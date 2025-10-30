import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Repeat: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m20 7.5-3.54 3.54-.7-.71L18.09 8H6v4H5V7h13.09l-2.33-2.33.7-.71zM17 17v-4h1v5H4.91l2.33 2.33-.7.71L3 17.5l3.54-3.54.7.71L4.91 17z" /></IconBase>;
};
export default Repeat;