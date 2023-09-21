import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

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
