import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  hasDepth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
