import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const PinOff: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="m2.79 4.46.71-.71L20.25 20.5l-.71.71L14.33 16H12v4.5l-.5 1.5-.5-1.5V16H6v-2l2-2V9.66zM14 12.41V5h1V4H8v1h1v2.84l-1-1V6h-.84L7 5.84V3h9v3h-1v6l2 2v1.83l-1-.99v-.43zm-5 0-2 2V15h6.34L9 10.66z" /></IconBase>;
};
export default PinOff;