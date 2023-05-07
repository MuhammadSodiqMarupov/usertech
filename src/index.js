import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'remixicon/fonts/remixicon.css'
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("app"));
=======
const root = ReactDOM.createRoot(document.getElementById('app'));
>>>>>>> 45d537607f2eae3973da3e32b097a037b413346f
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
