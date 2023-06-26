import { ENV } from "../utils";

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
}