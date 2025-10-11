'use client';

import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

export interface ColorInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo do campo (exibido acima do input). */
  label: string;
  /** Texto de ajuda (exibido abaixo do input quando não há erro). */
  helperText?: string;
  /** Mensagem de erro (prioridade sobre o helperText). */
  errorMessage?: string;
  /** Classe opcional para o contêiner externo. */
  containerClassName?: string;
}

/**
 * Campo de seleção de cores para formulários.
 */
const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      className,
      containerClassName,
      disabled,
      ...rest
    },
    ref
  ) => {
    const inputId = id ?? "input";
    const helpId = `${inputId}-help`;
    const errorId = `${inputId}-errorMessage`;


    return (
      <div className={clsx("w-full", containerClassName)}>
        <label
          htmlFor={inputId}
          className={clsx(
            "flex font-medium text-xs sm:text-sm text-foreground",
          )}
        >
          {label}
        </label>

          <input
            id={inputId}
            ref={ref}
            type="color"
            disabled={disabled}
            aria-invalid={!!errorMessage || undefined}
            aria-describedby={errorMessage ? errorId : helperText ? helpId : undefined}
            className={clsx(
              "flex w-10 h-10 rounded-md bg-background text-foreground placeholder:text-foreground/50 text-sm sm:text-base",
              "cursor-pointer border border-gray-300 dark:border-gray-600",
              "outline-none transition",
              "focus:border-primary-600 focus:ring-2 focus:ring-primary-300/30",
              "disabled:cursor-not-allowed disabled:opacity-70",
              "p-[2px] my-1",
              errorMessage &&
                "border-red-400 focus:border-red-400 focus:ring-red-400/40",
              className
            )}
            {...rest}
          />

        {errorMessage ? (
          <p
            id={errorId}
            className={clsx("text-red-400 text-xs sm:text-sm")}
          >
            {errorMessage}
          </p>
        ) : helperText  && !disabled ? (
          <p
            id={helpId}
            className={clsx("text-foreground/70 text-xs sm:text-sm")}
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

ColorInput.displayName = "ColorInput";
export default ColorInput;
