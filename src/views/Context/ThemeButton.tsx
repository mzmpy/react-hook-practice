import { useContext } from "react";
import contextExport from "./contextExport";

export default function ThemeButton(props: Iprops) {
  const themeContext = useContext(contextExport);

  return (
    <button
      style={{ backgroundColor: themeContext.theme }}
      onClick={themeContext.toggleTheme}
    >
      {props.children}
    </button>
  );
}

interface Iprops {
  children: string;
}
