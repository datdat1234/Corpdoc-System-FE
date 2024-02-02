import "bootstrap/dist/css/bootstrap.min.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import React from "react";
import ReactDOM from "react-dom/client";
import "util/css/font.css";
import "util/css/grid.css";
import "util/css/text.css";
import "util/css/color.css";
import "util/css/global.css";
import "util/css/border.css";
import "reset.css";
import "util/css/spacing/margin.css";
import "util/css/spacing/padding.css";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
