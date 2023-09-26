import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";
import "./index.css";

const Loader = lazy(() => import("./components/Loader"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
