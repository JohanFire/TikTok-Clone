import { ENV } from "../utils";

export class Comment{
    async getCommentsVideo(token, idVideo){
        const filter = `video=${idVideo}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENT}/?${filter}`;
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