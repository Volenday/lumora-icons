import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const FormatQuoteClose: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M18 6v8l-1.95 4h-4.2l1.95-4H12V6zm-1 7.77V7h-4v6h2.4l-1.95 4h1.97zM11 6v8l-1.95 4h-4.2l1.95-4H5V6zm-1 7.77V7H6v6h2.4l-1.95 4h1.97z" /></IconBase>;
};
export default FormatQuoteClose;