import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const MapMarker: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11.5 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4.7 4.36 4.7 7.73 4.7-7.73a5.5 5.5 0 1 0-9.4 0m10.25.52L11.5 22l-5.55-9.12a6.5 6.5 0 1 1 11.1 0" /></IconBase>;
};
export default MapMarker;