import { type HTMLAttributes, type ReactNode } from "react";

export type InputProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLInputElement>;
