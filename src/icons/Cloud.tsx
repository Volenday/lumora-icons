import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Cloud: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M5.5 20a5.5 5.5 0 0 1 0-11c1-2.35 3.3-4 6-4 3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20zm0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 1 0 0-7c-.56 0-1.1.13-1.57.37.07-.28.07-.57.07-.87a5.5 5.5 0 0 0-8.838-4.371A5.5 5.5 0 0 0 6.19 10.05z" /></IconBase>;
};
export default Cloud;