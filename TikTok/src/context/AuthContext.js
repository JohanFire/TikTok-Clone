import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({
    auth: undefined,
    accessToken: null,
    refreshToken: null,
    login: () => null,
    logout: () => null,
});

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined)
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)

    const login = (tokens) => {
        console.log(tokens);
    }

    const logout = () => {
        setAuth(null);
        setAccessToken(null);
        setRefreshToken(null);
    };

    const data = {
        auth,
        accessToken,
        refreshToken,
        login,
        logout,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}