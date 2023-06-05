const SERVER_IP = "192.168.1.13:8000";

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
    },

    JWT:{
        ACCESS: "access",
        REFRESH: "refresh",
    }
}