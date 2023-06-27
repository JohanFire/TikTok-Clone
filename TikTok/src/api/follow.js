import { ENV } from "../utils";
import { size } from "lodash";

export class Follow{
    async get_following_count(token, idUser){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOWING_COUNT}/${idUser}/`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        return result.count;
    }

    async get_followers_count(token, idUser){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOWERS_COUNT}/${idUser}/`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        return result.count;
    }

    async is_following(token, idUser, idUserFollowed){
        const filter = `user=${idUser}&user_followed=${idUserFollowed}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        // will return an array, if it has content, means the user follows the other user
        // means no content, not following the user
        if(size(result) ===  0) return false

        return true; // if it has content
    }
}