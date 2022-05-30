import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import { GeneralProvider } from "./contexts/GeneralContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GeneralProvider>
      <Main />
    </GeneralProvider>
  </React.StrictMode>
);
