"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// create theme context
const ThemeContext = createContext();

// create provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");


  // get theme from localstorage and set the recently used theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("practice_theme")
    if(savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme
    }
  }, [])

  useEffect(() => {
    document.body.className = theme; // adds light or dark
    localStorage.setItem("practice_theme", theme)
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// consuming theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
