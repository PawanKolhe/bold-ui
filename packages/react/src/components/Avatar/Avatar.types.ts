import {
  type ImgHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type AvatarProps = {
  /** Custom placeholder content */
  children?: ReactNode;
  /** The name of the person in the avatar to compute initials that show show if `src` not provided or image fails to load */
  name?: string;
  /** Image url of avatar */
  src?: ImgHTMLAttributes<HTMLImageElement>["src"];
  /** List of sources to use for different screen resolutions */
  srcSet?: ImgHTMLAttributes<HTMLImageElement>["srcSet"];
  /** Style of avatar */
  kind?: AvatarKindValues;
  /** Width and height of avatar */
  size?: AvatarSizeValues | string;
  /** Shape of avatar */
  shape?: AvatarShapeValues;
  /** Color of avatar placeholder */
  color?: string;
  /** Border radius of avatar */
  borderRadius?: string;
  /** Custom icon for placeholder */
  icon?: ReactNode;
  /** Function called when image failed to load */
  onError?: () => void;
  getInitials?: (name: string) => string;
  loadingStrategy?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  /** <img /> element attributes */
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
} & HTMLAttributes<HTMLDivElement>;

export enum AvatarKind {
  LIGHT = "light",
  FILL = "fill",
  OUTLINE = "outline",
}
type AvatarKindValues = `${AvatarKind}`;

export enum AvatarSize {
  DEFAULT = "default",
  X_SMALL = "x-small",
  SMALL = "small",
  LARGE = "large",
  X_LARGE = "x-large",
}
type AvatarSizeValues = `${AvatarSize}`;

export enum AvatarShape {
  CIRCLE = "circle",
  SQUARE = "square",
}
type AvatarShapeValues = `${AvatarShape}`;

export type AvatarPlaceholderProps = {
  initials?: string;
  icon?: AvatarProps["icon"];
} & HTMLAttributes<HTMLDivElement>;
