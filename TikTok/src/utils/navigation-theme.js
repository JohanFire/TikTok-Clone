import { DefaultTheme } from "@react-navigation/native";

export function getNavigationTheme(theme){
    return{
        "colors": {
            ...DefaultTheme,
            background: theme.Default.background,
            card: theme.Default.background,
            text: theme.Text.style.color,
        },
    };
}