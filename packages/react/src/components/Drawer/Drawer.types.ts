import { type ModalProps } from "../Modal/Modal.types";

export type DrawerProps = {
  position?: DrawerPositionValues;
} & Omit<ModalProps, "centered" | "fullScreen" | "scrollBehavior">;

export enum DrawerPosition {
  RIGHT = "right",
  LEFT = "left",
  TOP = "top",
  BOTTOM = "bottom",
}
type DrawerPositionValues = `${DrawerPosition}`;
