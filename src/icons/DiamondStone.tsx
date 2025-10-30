import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const DiamondStone: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M6 3h11l3.9 5.57L11.5 22 2.1 8.57zm4.16 1-1.7 4h6.08l-1.7-4zM8.33 9l3.17 9.76L14.67 9zM3.72 8h3.66l1.7-4H6.5zm-.1 1 6.82 9.75L7.28 9zm15.66-1L16.5 4h-2.58l1.7 4zm.1 1h-3.66l-3.16 9.75z" /></IconBase>;
};
export default DiamondStone;