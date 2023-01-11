import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import DemoContent from "./views/DemoContent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":demoId" element={<DemoContent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
