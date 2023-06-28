import { ENV } from "../utils";

export class Notification {
    async create({
        token,
        idTargetUser,
        idUserFollower,
        idVideo,
        comment,
        typeNotification
    }) {
        try {
            const url = `${ENV.BASE_API}/${ENV.API_ROUTES.NOTIFICATION}/`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user: idTargetUser,
                    user_follower: idUserFollower,
                    video: idVideo,
                    comment: comment,
                    type_notification: typeNotification,
                }),
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 201) throw result;
            return true;
        } catch (error) {
            throw error;
        }
    }

    async get_user_notifications(token, idUser, read=false){
        const filter = `user=${idUser}&read=${read}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.NOTIFICATION}/?${filter}`;
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

    async mark_notification_as_read(token, idNotification){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.NOTIFICATION}/${idNotification}/`;
        const params = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({read: true}),
        };
        
        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 200) throw result;

        return result;
    }

}