import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import TopScroll from "./utils/TopScroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TopScroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
