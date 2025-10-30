import React from "react";
import { IconBase } from "../components/IconBase";
import { IconProps } from "../types";
const ChartHistogram: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...rest
}) => {
  return <IconBase size={size} color={color} {...rest}><path fill="currentColor" d="M3 4h1v9h3V7h5v4h4v4h4v6H3zm13 12v4h3v-4zm-4-4v8h3v-8zM8 8v12h3V8zm-4 6v6h3v-6z" /></IconBase>;
};
export default ChartHistogram;