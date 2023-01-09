// react
import React from "react";
import ReactDOM from "react-dom/client";
// sylesheet
import "./index.css";
// routing
import { BrowserRouter } from "react-router-dom";
// state management (recoil js)
import { RecoilRoot } from "recoil";
// components
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
