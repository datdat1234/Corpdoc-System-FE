import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./util/fontStyle.css";
import "./util/globalStyle.css";
import "./util/reset.css";
import "./util/spacing/margin.css";
import "./util/spacing/padding.css";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
