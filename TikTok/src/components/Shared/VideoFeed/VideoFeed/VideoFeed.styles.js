import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
import { ENV } from "../../../../utils";

export const styles = StyleSheet.create({
    content: {
        height: height - ENV.TAB_MENU_HEIGHT,
        weight: width,
    },
    block__content: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection: "row",
    },
    block__left: {
        width: "85%",
        height: "100%",
        justifyContent: "flex-end",
    },
    block__right: {
        width: "15%",
        height: "100%",
        justifyContent: "flex-end",
        paddingBottom: 100,
    }
})