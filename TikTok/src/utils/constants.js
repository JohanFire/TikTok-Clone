const SERVER_IP = "192.168.1.13:8000";

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api`,

    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_TOKEN: "auth/refresh_token",
        VIDEO: "video",
        VIDEO_ACTIONS: "video/actions",
        VIDEO_LIKE: "video_like",
        COMMENT: "comment",
        USER_ME: "user/me",
        USERS: "users",
        FOLLOWING_COUNT: "follow/following/count",
    },

    JWT:{
        ACCESS: "access",
        REFRESH: "refresh",
    },

    TYPE_VIDEO: {
        FOLLOWING: "following",
        FOR_YOU: "forYou",
    },

    TAB_MENU_HEIGHT: 70,
}