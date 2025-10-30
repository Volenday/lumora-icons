import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const LightbulbOn: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2c-1.8-1.18-3-3.2-3-5.5a6.5 6.5 0 1 1 13 0c0 2.3-1.2 4.32-3 5.5zm-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6c1.78-.9 3-2.76 3-4.9a5.5 5.5 0 0 0-11 0c0 2.14 1.22 4 3 4.9zm-.87-6.88 2.37-2.37 2 2L14.25 8l.71.71-2.46 2.45-2-2-1.66 1.67z" /></IconBase>;
};
export default LightbulbOn;