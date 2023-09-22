import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";
import "./index.css";

//const Loader = lazy(() => import("./components/table/Loader"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
