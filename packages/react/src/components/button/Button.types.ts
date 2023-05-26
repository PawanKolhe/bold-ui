import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
