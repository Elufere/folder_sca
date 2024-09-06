import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  Layout } from "./pages/layout/Layout";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import { Support } from "./pages/support/Support";
import Policy from "./pages/policy/Policy";
import { Refund } from "./pages/refund/Refund";
import { Team } from "./pages/team/Team";
import { AboutScavenge } from "./pages/aboutScavenge/AboutScavenge";
import { RequestReturn } from "./pages/requestReturn/RequestReturn";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/support",
          element: <Support />
        },
        {
          path: "/policy",
          element: <Policy />
        },
        {
          path: "/refund",
          element: <Refund />
        },
        {
          path: "/team",
          element: <Team />
        },
        {
          path: "/aboutScavenge",
          element: <AboutScavenge />
        },
        {
          path: "/requestReturn",
          element: <RequestReturn />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;