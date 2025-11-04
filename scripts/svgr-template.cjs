// Custom SVGR template to wrap SVG content with IconBase and use IconProps
// Generates components shaped like existing icons (e.g., Account.tsx)

/* eslint-disable */
module.exports = function template(variables, { tpl }) {
  const t = require("@babel/types");
  const { componentName } = variables;
  // Use component name without the default `Svg` prefix
  const rawName =
    typeof componentName === "string" ? componentName : componentName.name;
  const cleanName = t.identifier((rawName || "Icon").replace(/^Svg/, ""));
  const jsx = variables.jsx;

  // Transform <svg ...>...</svg> -> <IconBase size={size} color={color} {...rest}>...</IconBase>
  if (jsx && jsx.openingElement && jsx.closingElement) {
    jsx.openingElement.name = t.jsxIdentifier("IconBase");
    jsx.closingElement.name = t.jsxIdentifier("IconBase");
    jsx.openingElement.attributes = [
      // size={size}
      t.jsxAttribute(
        t.jsxIdentifier("size"),
        t.jsxExpressionContainer(t.identifier("size"))
      ),
      // color={color}
      t.jsxAttribute(
        t.jsxIdentifier("color"),
        t.jsxExpressionContainer(t.identifier("color"))
      ),
      // {...rest}
      t.jsxSpreadAttribute(t.identifier("rest")),
    ];
  }

  return tpl`
import type { FC } from 'react';
import { IconBase } from '../components/IconBase';
import { IconProps } from '../types';

const ${cleanName}: FC<IconProps> = ({
	size = 24,
	color = 'currentColor',
	...rest
}) => {
	return (
		${jsx}
	);
};

export default ${cleanName};
`;
};
