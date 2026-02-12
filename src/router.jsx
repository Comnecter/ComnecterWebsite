import React from "react";
import App from "./App";
import ResetPassword from "./ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GetTheApp from "./pages/GetTheApp";
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
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "/terms-of-service",
        element: <TermsOfService />,
    },
    {
        path: "/get-the-app",
        element: <GetTheApp />,
    },
]);