import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatAlignMiddle: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 13v-1h17v1zm8-9h1v4.25L14.25 6l.75.66-3.5 3.5L8 6.66 8.75 6 11 8.25zm0 17v-4.25L8.75 19 8 18.34l3.5-3.5 3.5 3.5-.75.66L12 16.75V21z" /></IconBase>;
};
export default FormatAlignMiddle;