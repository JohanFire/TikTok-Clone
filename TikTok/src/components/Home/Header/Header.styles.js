import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    inactive: {
        fontSize: 18,
        opacity: 0.6,
    },
    active: {
        fontSize: 18,
        fontWeight: "bold",
    }
})