import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button class="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
