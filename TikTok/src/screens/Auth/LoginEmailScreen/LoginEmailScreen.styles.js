import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    content: {
        height: "100%",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
    form: {
        marginTop: Platform.OS === "ios" ? 20 : 70,
    },
    btn__container: {
        marginBottom: 20,
    }
})