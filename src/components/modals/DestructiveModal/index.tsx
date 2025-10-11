'use client';

import { XIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export interface DestructiveModalProps {
  open: boolean;
  onClose: () => void;

  title?: string;
  description?: string;
  children?: React.ReactNode;

  center?: boolean;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  cancelButtonClassName?: string;
  confirmButtonClassName?: string;
  confirmButtonDisabled?: boolean;
  confirmMessage?: string;

  size?: Size;

  className?: string;
  overlayClassName?: string;
  containerClassName?: string;

  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

export default function DestructiveModal({
  open,
  onClose,
  title,
  description,
  children,
  center = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  size = "md",
  className,
  overlayClassName,
  containerClassName,
  ariaLabelledby,
  ariaDescribedby,
  confirmButtonLabel,
  cancelButtonLabel,
  onConfirm,
  confirmButtonDisabled,
  cancelButtonClassName,
  confirmButtonClassName,
  confirmMessage,
}: DestructiveModalProps) {
  const titleId = title
    ? ariaLabelledby ?? "destructive-modal-title"
    : undefined;
  const descId = description
    ? ariaDescribedby ?? "destructive-modal-description"
    : undefined;

  return (
    <Modal
      open={open}
      onClose={onClose}
      center={center}
      closeOnOverlayClick={closeOnOverlayClick}
      showCloseIcon={showCloseButton}
      closeIcon={<XIcon size={22} weight="bold" />}
      classNames={{
        overlay: clsx(
          "bg-black/50 dark:bg-black/70 backdrop-blur-[2px]",
          overlayClassName
        ),
        modal: clsx(
          center
            ? "!bg-transparent m-4 sm:m-0"
            : "!bg-transparent !p-0 !m-0 !shadow-none !mt-4",
          "w-[calc(100vw-1.5rem)] sm:w-auto", // small devices fit
          containerClassName
        ),
        closeButton: "top-3 right-3 text-foreground/70 hover:text-foreground",
      }}
      styles={{
        modal: {
          background: "transparent",
          padding: 0,
          margin: 0,
          boxShadow: "none",
        },
      }}
      focusTrapped
      blockScroll
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div
        className={clsx(
          "bg-background text-foreground rounded-xl border border-foreground/15 shadow-xl",
          "w-full",
          "max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] overflow-auto",
          sizeMap[size],
          className
        )}
      >
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5">
          <div className="min-w-0">
            <h2 id={titleId} className="text-sm sm:text-base font-semibold">
              {title ?? "Confirmação de Remoção"}
            </h2>
            {description && (
              <p
                id={descId}
                className="mt-1 text-xs sm:text-sm text-foreground/70"
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="p-4 sm:p-5">
          {children ? (
            children
          ) : (
            <p>{confirmMessage ?? "Deseja realmente remover este item?"}</p>
          )}
        </div>

        <div className="flex items-center justify-end gap-4 p-4 sm:p-5">
          <button
            onClick={onClose}
            className={clsx(
              "px-4 py-2 rounded-md text-foreground/70 text-xs sm:text-sm bg-transparent",
              cancelButtonClassName
            )}
          >
            {cancelButtonLabel || "Cancelar"}
          </button>
          <button
            onClick={onConfirm}
            className={clsx(
              "px-4 py-2 rounded-md text-white text-xs sm:text-sm bg-red-500",
              "disabled:opacity-50",
              confirmButtonClassName
            )}
            disabled={confirmButtonDisabled}
          >
            {confirmButtonLabel || "Confirmar"}
          </button>
        </div>
      </div>
    </Modal>
  );
}


