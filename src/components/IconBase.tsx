import type { FC, PropsWithChildren } from 'react';
import { IconProps } from '../types';

export const IconBase: FC<PropsWithChildren<IconProps>> = ({
	size = 24,
	color = 'currentColor',
	className,
	title,
	ariaHidden = true,
	children
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			style={{ color }}
			fill="none"
			stroke={color}
			role="img"
			aria-hidden={ariaHidden && !title}
			aria-label={title}
			viewBox="0 0 24 24"
		>
			{title ? <title>{title}</title> : null}
			{children}
		</svg>
	);
};
