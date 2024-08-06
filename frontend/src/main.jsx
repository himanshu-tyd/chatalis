import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.jsx";
import toast, { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Toaster position="top-center" toastOptions={{duration:"4000"}} />
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);
