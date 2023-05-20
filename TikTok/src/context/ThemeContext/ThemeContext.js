import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider as Theme } from "react-native-elements";
import { AsyncStorageStatic } from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext({
    darkMode: true, // initialize the app with darMode activated
    toggleTheme: () => null,
    theme: {},
});

export function ThemeProvider(props) {
    const {children} = props;
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    // info to export
    const data =  {
        darkMode,
        toggleTheme,
        theme: {},
    };

    return (
        <ThemeContext.Provider value={data}>
            {/* <Theme theme={null}>{children}</Theme> */}
            {children}
        </ThemeContext.Provider>
    )
}