import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const RepeatOff: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.79 4.46.71-.71L20.25 20.5l-.71.71-3.2-3.21H4.91l2.33 2.33-.7.71L3 17.5l3.54-3.54.7.71L4.91 17h10.43l-9-9H6v4H5V7h.34zM20 7.5l-3.54 3.54-.7-.71L18.09 8H9.16l-1-1h9.93l-2.33-2.33.7-.71zM17 13h1v3.84l-1-1z" /></IconBase>;
};
export default RepeatOff;