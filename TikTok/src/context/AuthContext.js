import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";

import { jwt } from "../api";

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

    useEffect(() => {
        (async () => {
            const response = await jwt.get_tokens();
            login(response)
        })();
    }, []);
    

    const login = (tokens) => {
        if (tokens.access && tokens.refresh) {
            console.log('dentro del login');
            console.log(`\nAccess: ${tokens.access} \n\nRefresh: ${tokens.refresh}\n.`);

            const decodedToken = jwtDecode(tokens.access)
            console.log(decodedToken);
            setAuth(decodedToken)

            
            setAccessToken(tokens.access)
            setRefreshToken(tokens.refresh)

            jwt.save_tokens(tokens.access, tokens.refresh)
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

    if(auth === undefined) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}