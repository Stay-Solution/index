import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

import "./i18n";
import "./Variables.css";
import "./index.css";
import { RoomsContextProvider } from "./contexts/RoomsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoomsContextProvider>
      <RouterProvider router={router} />
    </RoomsContextProvider>
  </React.StrictMode>
);
