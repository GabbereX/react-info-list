import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.local.scss";
import Main from "./components/common/smart/Main/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
