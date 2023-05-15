import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
