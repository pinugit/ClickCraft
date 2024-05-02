"use client";
import { useEffect, useState } from "react";

/**
 * A component that allows the user to switch between light and dark theme
 */
export function ThemeSwitcher() {
  /**
   * The current theme. Can be either 'light' or 'dark'
   */
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  /**
   * Update the color-scheme attribute on the <html> element
   * whenever the theme changes
   */
  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", currentTheme);
  }, [currentTheme]);

  return (
    <button
      /**
       * Handle the user clicking on the button
       */
      onClick={() =>
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    >
      {/* The text to display on the button */}
      click to switch theme
    </button>
  );
}
