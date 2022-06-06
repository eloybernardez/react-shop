import React from "react";
import ReactDOM from "react-dom/client";
import App from "@routes/App";

const appElement = document.getElementById("app");
const app = ReactDOM.createRoot(appElement);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
