import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const UnfoldLessVertical: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m18.71 16.74-4.25-4.24 4.25-4.24.7.7-3.53 3.54 3.53 3.54zm-14.42 0-.7-.7 3.53-3.54-3.53-3.54.7-.7 4.25 4.24z" /></IconBase>;
};
export default UnfoldLessVertical;