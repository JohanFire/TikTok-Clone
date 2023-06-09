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

    async follow(token, idUser, idUserFollowed){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                user: idUser,
                user_followed: idUserFollowed,
            }),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        // new records return 201
        if(response.status !== 201)throw result;

        return result
    }

    async unfollow(token, idFollow){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/${idFollow}/`;
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);

        // delete id records return 204
        if(response.status !== 204)throw "Error..."

        return true;
    }

    async get_following_id(token, idUser, idUserFollowed){
        const filter = `user=${idUser}&user_followed=${idUserFollowed}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 200) throw result;

        return result[0]
    }

    async get_all_following(token, idUser){
        const filter = `user=${idUser}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 200) throw result
        return result
    }

    async get_all_followers(token, idUser){
        const filter = `user_followed=${idUser}`
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 200) throw result;

        return result;
    }
}