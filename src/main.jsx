import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainDashProvider } from "./context/AppContext.jsx";
import { CursorProvider } from "./context/useCustomCursor.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrolling from "./components/Smooth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <MainDashProvider>
        <CursorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CursorProvider>
      </MainDashProvider>
    </SmoothScrolling>
  </React.StrictMode>
);
