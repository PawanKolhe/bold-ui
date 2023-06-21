import { forwardRef, useEffect } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import {
  type ModalHeaderProps,
  type ModalProps,
  type ModalContentProps,
  type ModalBodyProps,
  type ModalInnerProps,
  type ModalCloseButtonProps,
  type ModalBackdropProps,
} from "./Modal.types";
import styles from "./Modal.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { Button } from "..";
import { useMountTransition } from "../../hooks/useMountTransition.hook";

const TRANSITION_DURATION = 200;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      style = {},
      isOpen,
      onClose,
      title,
      showCloseButton = true,
      closeButtonProps,
      showBackdrop = true,
      centered = false,
      fullScreen = false,
      closeOnEsc = true,
      closeOnClickOutside = true,
      backdropClassName,
      innerClassName,
      contentClassName,
      headerClassName,
      bodyClassName,
      transitionDuration,
      zIndex,
      blockScrollOnMount = true,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();
    const { isContentVisible, isTransitionClassApplied } = useMountTransition(
      isOpen,
      TRANSITION_DURATION
    );

    const hasHeader = !!title;

    // Close on 'Escape' key press
    useEffect(() => {
      if (closeOnEsc) {
        const close = (e: globalThis.KeyboardEvent) => {
          if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", close);
        return () => {
          window.removeEventListener("keydown", close);
        };
      }
    }, [closeOnEsc, onClose]);

    // Disable browser scrolling when modal is opened
    useEffect(() => {
      if (blockScrollOnMount) {
        const modals = document.body.getElementsByClassName("boldui--Modal");
        if (isContentVisible && modals.length === 1)
          document.body.classList.add(styles.Modal__noScroll);
        else if (modals.length === 0)
          document.body.classList.remove(styles.Modal__noScroll);
      }
    }, [blockScrollOnMount, isContentVisible]);

    return isContentVisible
      ? createPortal(
          <div
            className={clsx(
              classPrefix("Modal"),
              styles.Modal,
              {
                [styles.Modal__opened]: isOpen,
                [styles.Modal__centered]: centered,
                [styles.Modal__hasHeader]: hasHeader,
                [styles.Modal__fullscreen]: fullScreen,
                [styles.Modal__transition]: isTransitionClassApplied,
                ...themeClasses,
              },
              className
            )}
            style={{
              ...themeStyles,
              ...loadStyles({
                "--modal-transition-duration": `${
                  transitionDuration ?? TRANSITION_DURATION
                }ms`,
                "--modal-z-index": zIndex,
              }),
              ...style,
            }}
            role="dialog"
            ref={ref}
            {...restProps}
          >
            {showBackdrop && (
              <ModalBackdrop
                onClick={() => {
                  if (closeOnClickOutside) onClose();
                }}
                aria-hidden="true"
                className={backdropClassName}
              />
            )}
            <ModalInner className={innerClassName}>
              <ModalContent
                tabIndex={-1}
                aria-modal={true}
                aria-labelledby={title}
                className={contentClassName}
              >
                {hasHeader && (
                  <ModalHeader className={headerClassName}>{title}</ModalHeader>
                )}
                {showCloseButton && (
                  <ModalCloseButton
                    onClose={onClose}
                    closeButtonProps={closeButtonProps}
                  />
                )}
                <ModalBody className={bodyClassName}>{children}</ModalBody>
              </ModalContent>
            </ModalInner>
          </div>,
          document.body,
          "boldui-modal"
        )
      : null;
  }
);

Modal.displayName = "Modal";

const ModalBackdrop = ({
  children,
  className,
  style = {},
  onClick,
}: ModalBackdropProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-backdrop"),
        styles.Modal__backdrop,
        className
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ModalBackdrop.displayName = "ModalBackdrop";

const ModalInner = ({ children, className, style = {} }: ModalInnerProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-inner"),
        styles.Modal__inner,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

ModalInner.displayName = "ModalInner";

const ModalContent = ({
  children,
  className,
  style = {},
}: ModalContentProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-content"),
        styles.Modal__content,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

ModalContent.displayName = "ModalContent";

const ModalHeader = ({ children, className, style = {} }: ModalHeaderProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-header"),
        styles.Modal__header,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

const ModalBody = ({ children, className, style = {} }: ModalBodyProps) => {
  return (
    <div
      className={clsx(classPrefix("Modal-body"), styles.Modal__body, className)}
      style={style}
    >
      {children}
    </div>
  );
};

ModalBody.displayName = "ModalBody";

const ModalCloseButton = ({
  className,
  style = {},
  onClose,
  closeButtonProps,
}: ModalCloseButtonProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-close-button"),
        styles.Modal__closeButton,
        className
      )}
      style={style}
    >
      <Button
        iconOnly
        compact
        kind="subtle"
        onClick={() => {
          onClose();
        }}
        aria-label="Close"
        {...closeButtonProps}
      >
        <MdClose />
      </Button>
    </div>
  );
};

ModalCloseButton.displayName = "ModalCloseButton";
