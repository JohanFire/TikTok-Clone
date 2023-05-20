import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider as Theme } from "react-native-elements";
import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";

import { lightTheme } from "./LightTheme";
import { darkTheme } from "./DarkTheme";

export const ThemeContext = createContext({
    darkMode: true, // initialize the app with darMode activated
    toggleTheme: () => null,
    theme: {},
});

export function ThemeProvider(props) {
    const { children } = props;
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        (async () =>{
            const response = await AsyncStorage.getItem("theme")
            // console.log(`theme: ${response}`);
            if(response) setDarkMode(JSON.parse(response))
        })() 
    }, [])


    const toggleTheme = async () => {
        setDarkMode(!darkMode);
        await AsyncStorage.setItem("theme", JSON.stringify(!darkMode))
    }

    // info to export
    const data = {
        darkMode,
        toggleTheme,
        theme: darkMode ? darkTheme : lightTheme,
    };

    return (
        <ThemeContext.Provider value={data}>
            {/* <Theme theme={darkMode ? darkTheme : lightTheme}>{children}</Theme> */}
            <Theme theme={data.theme}>{children}</Theme>
        </ThemeContext.Provider>
    )
}