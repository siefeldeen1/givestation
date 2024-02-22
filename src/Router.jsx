import React from 'react'
import { Navigate, useRoutes, useNavigate, useLocation } from "react-router-dom";
import Landing from './pages/landing';

export default function Router() {
    return useRoutes([
        { path: "/", element: <Landing /> },
    ])
}
