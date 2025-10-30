import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ArrowLeftCircle: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M17 13H8.75L12 16.25l-.66.75-4.5-4.5 4.5-4.5.66.75L8.75 12H17zm-15-.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0m1 0a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0" /></IconBase>;
};
export default ArrowLeftCircle;