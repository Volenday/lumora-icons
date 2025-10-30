import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const HelpCircle: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M11.5 4a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m0-1a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19M11 17h1v2h-1zm.5-11A3.5 3.5 0 0 1 15 9.5c0 .9-.7 1.5-1.44 2.18l-.93.9c-.59.67-.66 1.95-.63 2.39V15h-1c0-.05-.1-1.96.87-3.08l1.03-.99c.6-.53 1.1-.98 1.1-1.43a2.5 2.5 0 0 0-5 0H8A3.5 3.5 0 0 1 11.5 6" /></IconBase>;
};
export default HelpCircle;