import React from "react";
import App from "./App";
import ResetPassword from "./ResetPassword";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
]);