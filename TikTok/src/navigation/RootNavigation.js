import { StatusBar } from "react-native";

import { useTheme, useAuth } from "../hooks";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./AuthNavigation";

export function RootNavigation() {
    const { auth } = useAuth();
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <StatusBar
                animated
                barStyle={darkMode ? "light-content" : "dark-content"}
            />
            {auth ? <AppNavigation /> : <AuthNavigation />}
        </>
    );
}