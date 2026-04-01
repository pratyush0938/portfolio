import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#0b1220",
          color: "#e6f7ff",
          border: "1px solid rgba(34,211,238,0.25)",
          borderRadius: "16px",
        },
      }}
    />
  </React.StrictMode>
);