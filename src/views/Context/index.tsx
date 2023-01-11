import { useState } from "react";
import contextExport, { themes } from "./contextExport";
import ThemeButton from "./ThemeButton";

export default function Context() {
  const [theme, setTheme] = useState({
    theme: themes.dark,
    toggleTheme: () => {
      setTheme((state) => {
        return {
          theme: state.theme === themes.dark ? themes.light : themes.dark,
          toggleTheme: state.toggleTheme
        };
      });
    }
  });

  return (
    <div>
      <h1>Change Theme</h1>
      <contextExport.Provider value={theme}>
        <ThemeButton>ToggleTheme</ThemeButton>
      </contextExport.Provider>
    </div>
  );
}
