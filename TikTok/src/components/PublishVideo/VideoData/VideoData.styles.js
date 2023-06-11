import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    input__container: {
        width: "75%",
        borderWidth: 0,
        borderColor: "transparent",
    },
    input: {
        fontSize: 14,
    },
    image__container: {
        width: "25%",
        height: 110,
        backgroundColor: "#e2e2e2"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    image__text:{
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: 5,
    },
})