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

export const jwt = {
    save_tokens,
    get_tokens,
};