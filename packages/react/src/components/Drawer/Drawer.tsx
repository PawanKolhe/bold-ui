import { forwardRef } from "react";
import { clsx } from "clsx";
import { Modal } from "../Modal";
import { type DrawerProps } from "./Drawer.types";
import styles from "./Drawer.module.scss";

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      position = "right",
      className,
      innerClassName,
      contentClassName,
      headerClassName,
      bodyClassName,
      ...restProps
    },
    ref
  ) => {
    return (
      <Modal
        className={clsx(className, styles.Drawer, {
          [styles.Drawer__positionLeft]: position === "left",
          [styles.Drawer__positionRight]: position === "right",
          [styles.Drawer__positionTop]: position === "top",
          [styles.Drawer__positionBottom]: position === "bottom",
        })}
        innerClassName={clsx(innerClassName, styles.Drawer__inner)}
        contentClassName={clsx(contentClassName, styles.Drawer__content)}
        headerClassName={clsx(headerClassName, styles.Drawer__header)}
        bodyClassName={clsx(bodyClassName, styles.Drawer__body)}
        {...restProps}
        ref={ref}
      />
    );
  }
);

Drawer.displayName = "Drawer";

// const TRANSITION_DURATION = 200;

// export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
//   (
//     {
//       children,
//       className,
//       style = {},
//       isOpen,
//       onClose,
//       title,
//       width,
//       padding,
//       showCloseButton = true,
//       closeButtonProps,
//       showBackdrop = true,
//       footer,
//       closeOnEsc = true,
//       closeOnClickOutside = true,
//       backdropClassName,
//       innerClassName,
//       contentClassName,
//       headerClassName,
//       bodyClassName,
//       footerClassName,
//       headerStyles,
//       bodyStyles,
//       footerStyles,
//       transitionDuration,
//       zIndex,
//       lockScroll = true,
//       preserveScrollBarGap = true,
//       trapFocus = true,
//       autoFocus = true,
//       returnFocus = true,
//       onBackdropClick,
//       target,
//       initialFocusRef,
//       finalFocusRef,
//       ...restProps
//     },
//     ref
//   ) => {
//     const { themeStyles, themeClasses } = useTheme();
//     const { isContentVisible, isTransitionClassApplied } = useMountTransition(
//       isOpen,
//       TRANSITION_DURATION
//     );

//     const drawerRef = useRef<HTMLDivElement>(null);
//     const drawerContentRef = useRef<HTMLDivElement>(null);

//     const hasHeader = !!title;
//     const hasFooter = !!footer;

//     // Handle keyboard shortcuts
//     const onEscape = useCallback(() => {
//       if (closeOnEsc) {
//         const drawers = getOverlayElements("Drawer");
//         const lastDrawer = drawers[drawers.length - 1];
//         if (lastDrawer && lastDrawer === drawerRef.current) onClose();
//       }
//     }, [closeOnEsc, onClose]);

//     const keyListenersMap = useMemo(
//       () => ({
//         Escape: onEscape,
//       }),
//       [onEscape]
//     );
//     useKeyboardShortcut(keyListenersMap);

//     // Disable browser scrolling when drawer is opened
//     useEffect(() => {
//       if (lockScroll) {
//         const drawers = getOverlayElements("Drawer");
//         const bodyClasses = [styles.Drawer__noScroll];
//         if (preserveScrollBarGap)
//           bodyClasses.push(styles.Drawer__preserveScrollBarGap);
//         if (isContentVisible && drawers.length === 1)
//           document.body.classList.add(...bodyClasses);
//         return () => {
//           if (drawers.length === 0)
//             document.body.classList.remove(...bodyClasses);
//         };
//       }
//     }, [lockScroll, isContentVisible, preserveScrollBarGap]);

//     const drawerContextValue = useMemo(() => ({ onClose }), [onClose]);

//     return isContentVisible
//       ? createPortal(
//           <FocusLock
//             lockFocus={trapFocus}
//             autoFocusOnMount={autoFocus}
//             returnFocusOnClose={returnFocus}
//             initialFocusRef={initialFocusRef}
//             finalFocusRef={finalFocusRef}
//           >
//             <DrawerProvider value={drawerContextValue}>
//               <div
//                 className={clsx(
//                   classPrefix("Drawer"),
//                   styles.Drawer,
//                   {
//                     [styles.Drawer__opened]: isOpen,
//                     [styles.Drawer__centered]: centered,
//                     [styles.Drawer__hasHeader]: hasHeader,
//                     [styles.Drawer__hasFooter]: hasFooter,
//                     [styles.Drawer__fullscreen]: fullScreen,
//                     [styles.Drawer__transition]: isTransitionClassApplied,
//                     [styles.Drawer__scrollOutside]:
//                       scrollBehavior === "outside",
//                     ...themeClasses,
//                   },
//                   className
//                 )}
//                 style={{
//                   ...themeStyles,
//                   ...loadStyles({
//                     "--drawer-transition-duration": `${
//                       transitionDuration ?? TRANSITION_DURATION
//                     }ms`,
//                     "--drawer-z-index": zIndex,
//                     "--drawer-width": width,
//                     "--drawer-padding": padding,
//                   }),
//                   ...style,
//                 }}
//                 role="dialog"
//                 aria-modal={true}
//                 aria-labelledby={styles.Drawer__title}
//                 aria-describedby={styles.Drawer__body}
//                 tabIndex={-1}
//                 ref={mergeRefs(ref, drawerRef)}
//                 {...restProps}
//               >
//                 {showBackdrop && (
//                   <DrawerBackdrop
//                     onClick={() => {
//                       onBackdropClick?.();
//                       if (closeOnClickOutside) onClose();
//                     }}
//                     aria-hidden="true"
//                     className={backdropClassName}
//                   />
//                 )}
//                 <DrawerInner className={innerClassName} tabIndex={-1}>
//                   <DrawerContent
//                     className={contentClassName}
//                     role="document"
//                     ref={modalContentRef}
//                   >
//                     {hasHeader && (
//                       <DrawerHeader
//                         className={headerClassName}
//                         style={headerStyles}
//                       >
//                         <div
//                           id={styles.Drawer__title}
//                           className={styles.Drawer__title}
//                         >
//                           {title}
//                         </div>
//                         {showCloseButton && (
//                           <DrawerCloseButton
//                             onClose={onClose}
//                             closeButtonProps={closeButtonProps}
//                           />
//                         )}
//                       </DrawerHeader>
//                     )}
//                     {!hasHeader && showCloseButton && (
//                       <DrawerCloseButton
//                         onClose={onClose}
//                         closeButtonProps={closeButtonProps}
//                       />
//                     )}
//                     <DrawerBody className={bodyClassName} style={bodyStyles}>
//                       {children}
//                     </DrawerBody>
//                     {footer && (
//                       <DrawerFooter
//                         className={footerClassName}
//                         style={footerStyles}
//                       >
//                         {footer}
//                       </DrawerFooter>
//                     )}
//                   </DrawerContent>
//                 </DrawerInner>
//               </div>
//             </DrawerProvider>
//           </FocusLock>,
//           target ?? document.body
//         )
//       : null;
//   }
// );

// Drawer.displayName = "Drawer";

// const DrawerBackdrop = ({
//   children,
//   className,
//   style = {},
//   onClick,
//   ...restProps
// }: DrawerBackdropProps) => {
//   return (
//     <div
//       className={clsx(
//         classPrefix("Drawer-backdrop"),
//         styles.Drawer__backdrop,
//         className
//       )}
//       style={style}
//       onClick={onClick}
//       {...restProps}
//     >
//       {children}
//     </div>
//   );
// };

// DrawerBackdrop.displayName = "DrawerBackdrop";

// const DrawerInner = ({
//   children,
//   className,
//   style = {},
//   ...restProps
// }: DrawerInnerProps) => {
//   return (
//     <div
//       className={clsx(
//         classPrefix("Drawer-inner"),
//         styles.Drawer__inner,
//         className
//       )}
//       style={style}
//       {...restProps}
//     >
//       {children}
//     </div>
//   );
// };

// DrawerInner.displayName = "DrawerInner";

// export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
//   ({ children, className, style = {}, ...restProps }, ref) => {
//     return (
//       <section
//         className={clsx(
//           classPrefix("Drawer-content"),
//           styles.Drawer__content,
//           className
//         )}
//         style={style}
//         {...restProps}
//         ref={ref}
//       >
//         {children}
//       </section>
//     );
//   }
// );

// DrawerContent.displayName = "DrawerContent";

// const DrawerHeader = ({
//   children,
//   className,
//   style = {},
//   ...restProps
// }: DrawerHeaderProps) => {
//   return (
//     <div
//       className={clsx(
//         classPrefix("Drawer-header"),
//         styles.Drawer__header,
//         className
//       )}
//       style={style}
//       {...restProps}
//     >
//       {children}
//     </div>
//   );
// };

// DrawerHeader.displayName = "DrawerHeader";

// const DrawerBody = ({
//   children,
//   className,
//   style = {},
//   ...restProps
// }: DrawerBodyProps) => {
//   return (
//     <div
//       id={styles.Drawer__body}
//       className={clsx(
//         classPrefix("Drawer-body"),
//         styles.Drawer__body,
//         className
//       )}
//       style={style}
//       {...restProps}
//     >
//       {children}
//     </div>
//   );
// };

// DrawerBody.displayName = "DrawerBody";

// const DrawerFooter = ({
//   children,
//   className,
//   style = {},
//   ...restProps
// }: DrawerFooterProps) => {
//   return (
//     <div
//       className={clsx(
//         classPrefix("Drawer-footer"),
//         styles.Drawer__footer,
//         className
//       )}
//       style={style}
//       {...restProps}
//     >
//       {children}
//     </div>
//   );
// };

// DrawerFooter.displayName = "DrawerFooter";

// const DrawerCloseButton = ({
//   className,
//   style = {},
//   onClose,
//   closeButtonProps,
//   ...restProps
// }: DrawerCloseButtonProps) => {
//   return (
//     <div
//       className={clsx(
//         classPrefix("Drawer-close-button"),
//         styles.Drawer__closeButton,
//         className
//       )}
//       style={style}
//       {...restProps}
//     >
//       <Button
//         iconOnly
//         compact
//         kind="subtle"
//         onClick={() => {
//           onClose();
//         }}
//         aria-label="Close"
//         {...closeButtonProps}
//       >
//         <MdClose />
//       </Button>
//     </div>
//   );
// };

// DrawerCloseButton.displayName = "DrawerCloseButton";
