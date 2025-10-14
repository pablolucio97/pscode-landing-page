"use client";
import LandingHeader from "@/components/elements/LandingHeader";
import useTheme from "@/hooks/useTheme";
import { menuItems } from "@/mocks/app";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <LandingHeader.Root bordered>
      <LandingHeader.Left className="flex flex-col items-start justify-center h-full bg-background">
        <Image
          width={172}
          height={50}
          src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
          alt="Logo da PS Code"
          className="object-contain h-10 sm:h-14"
        />
      </LandingHeader.Left>
      <LandingHeader.Center>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href} className="inline-block mx-2">
                <a href={item.href} className="text-sm sm:text-base">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </LandingHeader.Center>
      <LandingHeader.Right>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <LandingHeader.MobileMenuToggle
          open={showMobileMenu}
          onToggle={() => setShowMobileMenu(!showMobileMenu)}
        />
      </LandingHeader.Right>
      <LandingHeader.MobileMenuPanel open={showMobileMenu}>
        <LandingHeader.Nav>
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.href} className="inline-block mx-2">
                <a href={item.href} className="text-sm sm:text-base">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </LandingHeader.Nav>
      </LandingHeader.MobileMenuPanel>
    </LandingHeader.Root>
  );
}
