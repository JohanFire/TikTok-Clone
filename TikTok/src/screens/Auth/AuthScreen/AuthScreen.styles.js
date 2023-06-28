import { StyleSheet } from "react-native";
import { useTheme } from "react-native-elements";

/* cuando use styles sera porque quiero utilizar colores que no esten en el tema */
// export const styles = StyleSheet.create({
//     content: {
//         backgroundColor: "#f00"
//     }
// });

/* cuando use "styled" sera porque quiero utilizar colores del Tema darkMode/lightMode */
export const styled = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        content: {
            // backgroundColor: "#f0f", // because using Theme bg color
            height: "100%",
            justifyContent: 'space-between',
        },
        optionContent: {
            marginHorizontal: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 50,
        },
        titleColor: {
            color: "#b2edf5",
            fontWeight: "bold",
        },
        info: {
            marginTop: 15,
            textAlign: "center",
            color: '#ccc'
        },
        itemRegister: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: "#ccc",
            paddingVertical: 5,
            paddingHorizontal: 15,
            marginTop: 30,
            borderRadius: 4,
        },
        loginContent: {
            backgroundColor: theme.Default.backgroundSecondary,
            alignItems: "center",
            paddingVertical: 20,
        },
        login: {
            color: '#2186d0',
            fontWeight: "bold"
        },


        credits__content: {
            alignItems: "center",
            marginBottom: -350,
        },
        rb_sheet_container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: theme.Default.background,
        },
        header__content: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
        },
        credits__info: {
            alignItems: "center",
            marginTop: 20,
        },
        avatar: {
            backgroundColor: "#e74c3c",
            padding: 5,
        },
        name: {
            marginTop: 15,
            fontSize: 24,
        },
        username: {
            opacity: 0.4,
            fontSize: 16,
        },
    });
};