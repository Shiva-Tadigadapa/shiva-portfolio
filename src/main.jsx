import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainDashProvider } from "./context/AppContext.jsx";
import { CursorProvider } from "./context/useCustomCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainDashProvider>
      <CursorProvider>
        <App />
      </CursorProvider>
    </MainDashProvider>
  </React.StrictMode>
);
