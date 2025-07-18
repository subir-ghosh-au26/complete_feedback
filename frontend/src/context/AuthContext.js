import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// This is the secret key that the admin will type.
// For better security, this should be fetched from an environment variable.
const ADMIN_KEY_FRONTEND = "SUPERADMIN123";

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminKey, setAdminKey] = useState('');

    const login = (key) => {
        if (key === ADMIN_KEY_FRONTEND) {
            setIsAdmin(true);
            setAdminKey(key); // Store the key for API calls
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        setAdminKey('');
    };

    const value = {
        isAdmin,
        adminKey,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};