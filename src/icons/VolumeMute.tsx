import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const VolumeMute: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3zm10.96.33 2.83-2.83-2.83-2.83.71-.71 2.83 2.83 2.83-2.83.71.71-2.83 2.83 2.83 2.83-.71.71-2.83-2.83-2.83 2.83z" /></IconBase>;
};
export default VolumeMute;