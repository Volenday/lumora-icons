export type IconSize = number | string;

export type IconProps = {
  // width/height; defaults to 24
  size?: IconSize;
  // stroke or fill color; defaults to currentColor
  color?: string;
  // additional class names
  className?: string;
  // accessible title; renders <title>
  title?: string;
  // hide from a11y tree when unlabeled; defaults true
  ariaHidden?: boolean;
};
