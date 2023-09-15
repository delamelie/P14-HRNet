import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeesList from "./pages/EmployeesList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/newEmployee" element={<CreateEmployee />} />
      <Route path="/employees" element={<EmployeesList />} />
    </Route>
  )
);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/newEmployee",
//         element: <CreateEmployee />,
//       },
//       // {
//       //   path: "/employees",
//       //   element: <Employees />,
//       // },
//     ],
//   },
// ]);
