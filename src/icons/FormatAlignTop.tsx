import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatAlignTop: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h17v1H3zm0 4h13v1H3zm8 13v-8.25L7.75 16 7 15.34l4.5-4.5 4.5 4.5-.75.66L12 12.75V21z" /></IconBase>;
};
export default FormatAlignTop;