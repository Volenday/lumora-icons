import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const AccountAlert: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M10.5 14c4.14 0 7.5 1.57 7.5 3.5V20H3v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13zM10.5 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M20 16v-1h1v1zm0-3V7h1v6z" /></IconBase>;
};
export default AccountAlert;