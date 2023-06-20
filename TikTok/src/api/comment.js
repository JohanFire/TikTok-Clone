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

    async delete(token, idComment){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENT}/${idComment}/`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        
        const response = await fetch(url, params);

        if(response.status !== 204) throw "Error..."

        return true;
    }

    async create(token, comment, idUser, idVideo){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENT}/`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                text: comment,
                user: idUser,
                video: idVideo,
            }),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 201) throw result;

        return result;
    }
}