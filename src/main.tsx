import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { ErrorPage } from "./components";
import { Certificate, Manage, Root } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "manage",
        element: <Manage />,
      },
      {
        path: "certificate/:code",
        element: <Certificate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
