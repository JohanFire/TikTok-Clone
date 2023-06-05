import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";

import { jwt, Auth } from "../api";

const authController = new Auth()

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
            const accessExpired = jwt.has_expired(response.access);
            
            if (accessExpired) {
                console.log("ACCESS TOKEN CADUCADO");

                const refreshExpired = jwt.has_expired(response.refresh)
                // console.log("refreshExpired: ", refreshExpired);

                if(refreshExpired){
                    logout();
                }else{
                    try {
                        // refresh the access token
                        console.log("Access token expired, updating with Refresh token");
                        const result = await authController.refresh_token(response.refresh);
                        
                        jwt.save_tokens(result.access, response.refresh);

                        login({
                            access: result.access,
                            refresh: response.refresh,
                        });
                    } catch (error) {
                        console.log(error);
                        console.error(error);
                        logout();
                    }
                }
            }else{
                login(response);
            }
        })();
    }, []);
    

    const login = (tokens) => {
        if (tokens.access && tokens.refresh) {
            // console.log('dentro del login');
            // console.log(`\nAccess: ${tokens.access} \n\nRefresh: ${tokens.refresh}\n.`);

            const decodedToken = jwtDecode(tokens.access)
            // console.log(decodedToken);
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

        jwt.remove_tokens();
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