import { createContext } from "react";

export const themes = {
  light: "#ffffff",
  dark: "#3c3c3c"
};

export default createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
