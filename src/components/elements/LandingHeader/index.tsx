"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Size = "sm" | "md" | "lg";

export interface LandingHeaderRootProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Tamanho do header */
  size?: Size;
  /** Adiciona borda inferior */
  bordered?: boolean;
  /** Classe adicional */
  sticky?: boolean;
  /** Largura máxima do container central (ex.: max-w-7xl) */
  maxWidthClassName?: string;
}

const Root: React.FC<LandingHeaderRootProps> = ({
  size = "md",
  bordered = false,
  sticky = true,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "w-full flex justify-center bg-background text-background z-80 py-1",
        sticky && "sticky top-0",
        bordered && "border-b border-foreground/10",
        className
      )}
    >
      <header
        {...rest}
        className={clsx("w-full text-foreground", "px-3 max-w-7xl")}
      >
        <div
          className={clsx(
            "mx-auto flex w-full items-center justify-between gap-3",
            size === "sm" && "h-14",
            size === "md" && "h-16",
            size === "lg" && "h-20"
          )}
        >
          {children}
        </div>
      </header>
    </div>
  );
};

/** Left / Center / Right rails */
export interface LeftProps {
  className?: string;
  children?: React.ReactNode;
}
const Left: React.FC<LeftProps> = ({ className, children, ...rest }) => (
  <div {...rest} className={clsx("min-w-0 flex items-center gap-2", className)}>
    {children}
  </div>
);

export interface CenterProps {
  className?: string;
  children?: React.ReactNode;
}
const Center: React.FC<CenterProps> = ({ className, children, ...rest }) => (
  <nav
    {...rest}
    className={clsx(
      "hidden md:flex min-w-0 flex-1 items-center justify-center",
      className
    )}
    aria-label="Navegação principal"
  >
    {children}
  </nav>
);

export interface RightProps {
  className?: string;
  children?: React.ReactNode;
}
const Right: React.FC<RightProps> = ({ className, children, ...rest }) => (
  <div
    {...rest}
    className={clsx("min-w-0 flex items-center justify-end gap-2", className)}
  >
    {children}
  </div>
);

/** Logo */
export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
  <Image
    src={src}
    alt={alt}
    width={120}
    height={36}
    className={clsx("block h-7 w-auto sm:h-8 lg:h-9 select-none", className)}
  />
);

/** Nav + Nav.Item para links do centro */
const Nav: React.FC<{ className?: string; children?: React.ReactNode }> & {
  Item: React.FC<{
    href?: string;
    target?: string;
    onClick?: () => void;
    children: React.ReactNode;
    active?: boolean;
  }>;
} = ({ className, children }) => (
  <ul
    className={clsx(
      "flex items-center gap-6 overflow-x-auto w-full",
      className
    )}
  >
    {children}
  </ul>
);

Nav.Item = ({ href = "#", target, onClick, children, active }) => (
  <li>
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center min-h-[44px] px-1",
        "text-sm font-medium whitespace-nowrap text-left",
        "text-foreground/90 hover:text-foreground",
        active && "text-primary"
      )}
    >
      {children}
    </a>
  </li>
);
Nav.Item.displayName = "LandingHeaderNavItem";

/** CTA (qualquer nó) */
interface CTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CTA: React.FC<CTAProps> = ({
  className,
  label,
  type = "button",
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg",
        "bg-primary-500 font-secondary hover:opacity-90",
        "px-4 py-2 text-xs sm:text-sm font-semibold text-white",
        "min-h-[44px] min-w-[44px]", // touch target
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
        className
      )}
      aria-label={label}
    >
      {label}
    </button>
  );
};

/** Mobile: botão que mostra/oculta o menu */
const MobileMenuToggle: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    open?: boolean;
    onToggle?: (open: boolean) => void;
  }
> = ({ open = false, onToggle, className, type = "button", ...rest }) => (
  <button
    aria-label={open ? "Fechar menu" : "Abrir menu"}
    aria-expanded={open}
    aria-controls="mobile-menu"
    onClick={() => onToggle?.(!open)}
    type={type}
    {...rest}
    className={clsx(
      "flex md:invisible items-center justify-center rounded-lg",
      "h-11 w-11", // 44×44px touch target
      "hover:bg-primary/10",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
      className
    )}
  >
    {open ? (
      <XIcon className="h-5 w-5" aria-hidden="true" />
    ) : (
      <ListIcon className="h-5 w-5" aria-hidden="true" />
    )}
  </button>
);

/** Mobile: painel simples com links + CTA */
const MobileMenuPanel: React.FC<{
  open?: boolean;
  children?: React.ReactNode;
  cta?: React.ReactNode;
}> = ({ open, children, cta }) => {
  if (!open) return null;
  return (
    <div
      id="mobile-menu"
      className="md:hidden absolute left-0 right-0 top-full z-30 w-full border-b border-foreground/10 bg-background/98 backdrop-blur transition"
      role="region"
      aria-label="Menu móvel"
    >
      <div className="mx-auto max-w-7xl px-3 py-3">
        <ul className="flex flex-col items-center gap-3">{children}</ul>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
    </div>
  );
};

const LandingHeader = {
  Root,
  Left,
  Center,
  Right,
  Logo,
  Nav,
  CTA,
  MobileMenuToggle,
  MobileMenuPanel,
};

export default LandingHeader;
