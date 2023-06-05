import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";

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
        if (tokens.access && tokens.refresh) {
            console.log('dentro del login');
            console.log(`\nAccess: ${tokens.access} \n\nRefresh: ${tokens.refresh}\n.`);

            const decodedToken = jwtDecode(tokens.access)
            console.log(decodedToken);
            setAuth(decodedToken)

            setAccessToken(tokens.access)
            setRefreshToken(tokens.refresh)
        } else {
            logout();
        }
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