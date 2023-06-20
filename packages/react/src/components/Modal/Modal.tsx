import { forwardRef, useEffect } from "react";
import { clsx } from "clsx";
import { classPrefix, loadStyles } from "../../utils/styles.utils";
import {
  type ModalOverlayProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalContentProps,
  type ModalBodyProps,
} from "./Modal.types";
import styles from "./Modal.module.scss";
import { useTheme } from "../../context/ThemeContext";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { Button } from "..";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      style = {},
      opened = false,
      onClose,
      title,
      showCloseButton = true,
      showOverlay = true,
      centered = false,
      fullScreen = false,
      closeOnEscape = true,
      closeOnClickOutside = true,
      ...restProps
    },
    ref
  ) => {
    const { themeStyles, themeClasses } = useTheme();

    const hasHeader = !!title || showCloseButton;

    // Close on 'Escape' key press
    useEffect(() => {
      if (closeOnEscape) {
        const close = (e: globalThis.KeyboardEvent) => {
          if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", close);
        return () => {
          window.removeEventListener("keydown", close);
        };
      }
    }, [closeOnEscape, onClose]);

    // Disable scrolling on body when modal is opened
    useEffect(() => {
      if (opened) document.body.classList.add(styles.Modal__noScroll);
      else document.body.classList.remove(styles.Modal__noScroll);
    }, [opened]);

    return opened
      ? createPortal(
          <div
            className={clsx(
              classPrefix("Modal"),
              styles.Modal,
              {
                [styles.Modal__opened]: opened,
                [styles.Modal__centered]: centered,
                [styles.Modal__hasHeader]: hasHeader,
                [styles.Modal__showCloseButton]: showCloseButton,
                [styles.Modal__fullscreen]: fullScreen,
                ...themeClasses,
              },
              className
            )}
            style={{
              ...themeStyles,
              ...loadStyles({}),
              ...style,
            }}
            role="dialog"
            ref={ref}
            {...restProps}
          >
            {showOverlay && (
              <ModalOverlay
                onClick={() => {
                  if (closeOnClickOutside) onClose();
                }}
              />
            )}
            <div
              className={clsx(
                classPrefix("Modal-inner"),
                styles.Modal__inner,
                {},
                className
              )}
            >
              <ModalContent>
                {hasHeader && (
                  <ModalHeader
                    onClose={onClose}
                    showCloseButton={showCloseButton}
                  >
                    {title}
                  </ModalHeader>
                )}
                <ModalBody>{children}</ModalBody>
              </ModalContent>
            </div>
          </div>,
          document.body,
          "boldui"
        )
      : null;
  }
);

Modal.displayName = "Modal";

const ModalOverlay = ({
  children,
  className,
  style = {},
  onClick,
}: ModalOverlayProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-overlay"),
        styles.Modal__overlay,
        {},
        className
      )}
      style={{
        ...loadStyles({}),
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ModalOverlay.displayName = "ModalOverlay";

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
        {},
        className
      )}
      style={{
        ...loadStyles({}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

ModalContent.displayName = "ModalContent";

const ModalHeader = ({
  children,
  className,
  style = {},
  onClose,
  showCloseButton,
}: ModalHeaderProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-header"),
        styles.Modal__header,
        {},
        className
      )}
      style={{
        ...loadStyles({}),
        ...style,
      }}
    >
      <div className={styles.Modal__headerLeftSection}>{children}</div>
      {showCloseButton && (
        <Button
          iconOnly
          compact
          size="small"
          kind="subtle"
          onClick={() => {
            onClose();
          }}
          className={styles.Modal__headerCloseButton}
        >
          <MdClose />
        </Button>
      )}
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

const ModalBody = ({ children, className, style = {} }: ModalBodyProps) => {
  return (
    <div
      className={clsx(
        classPrefix("Modal-body"),
        styles.Modal__body,
        {},
        className
      )}
      style={{
        ...loadStyles({}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

ModalBody.displayName = "ModalBody";
