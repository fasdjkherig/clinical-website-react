import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Toaster />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Fragment>
);
