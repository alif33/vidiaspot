import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from "../../lib/CookieHandler"

const AuthGuard = ({ children }) => {
    const isAuthenticated = getAuth();

    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" />;
    }
};

export default AuthGuard;