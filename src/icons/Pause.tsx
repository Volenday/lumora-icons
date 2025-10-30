import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const Pause: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M13 19V6h4v13zm-7 0V6h4v13zM7 7v11h2V7zm7 0v11h2V7z" /></IconBase>;
};
export default Pause;