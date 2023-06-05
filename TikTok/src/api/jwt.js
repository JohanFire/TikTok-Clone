import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

import { ENV } from "../utils";

async function save_tokens(access, refresh) {
    await AsyncStorage.setItem(ENV.JWT.ACCESS, access)
    await AsyncStorage.setItem(ENV.JWT.REFRESH, refresh)
}

async function get_tokens() {
    const access = await AsyncStorage.getItem(ENV.JWT.ACCESS)
    const refresh = await AsyncStorage.getItem(ENV.JWT.REFRESH)

    return {
        access, refresh
    };
}

function has_expired(token) {
    if (!token) return false;

    const { exp } = jwtDecode(token)
    const currentDate = new Date().getTime();
    const expiredDate = new Date(exp * 1000).getTime();
    // console.log("currentDate: ", currentDate);
    // console.log("expiredDate: ", expiredDate);
    // console.log(" ");

    if (currentDate > expiredDate) {
        return true
    } else {
        return false
    }
}

export const jwt = {
    save_tokens,
    get_tokens,
    has_expired,
};