"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if(typeof window === "undefined") return "light";
  const saved = localStorage.getItem("@theme") as Theme | null;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "dark"
    : "light";
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("@theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
