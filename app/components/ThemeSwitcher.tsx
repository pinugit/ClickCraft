"use client";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", currentTheme);
  }, [currentTheme]);

  return (
    <button
      onClick={() =>
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    >
      click to switch theme
    </button>
  );
}
