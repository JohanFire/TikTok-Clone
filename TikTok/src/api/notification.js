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

}