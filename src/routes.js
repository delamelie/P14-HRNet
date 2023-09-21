import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import Home from "./pages/Home";
// import CreateEmployee from "./pages/CreateEmployee";
// import EmployeesList from "./pages/EmployeesList";
const Home = lazy(() => import("./pages/Home"));
const CreateEmployee = lazy(() => import("./pages/CreateEmployee"));
const EmployeesList = lazy(() => import("./pages/EmployeesList"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/newEmployee" element={<CreateEmployee />} />
      <Route path="/employees" element={<EmployeesList />} />
    </Route>
  )
);
