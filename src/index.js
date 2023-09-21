import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<>loading</>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
