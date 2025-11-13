import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeSwitcher;