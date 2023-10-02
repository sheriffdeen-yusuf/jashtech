import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { IconButton } from "@mui/material";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden " />
      <Moon className="hidden h-5 w-5 dark:block" />
    </IconButton>
  );
}

export default ThemeToggle;
