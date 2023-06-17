import { Platform } from "react-native";

import { ENV } from "../utils";

export class Video {
    async create(token, data, idUser) {
        // console.log('token --->',  token);
        // console.log(data);
        // console.log('idUser --->', idUser);

        const formData = new FormData();
        formData.append("description", data.description);
        formData.append("user", idUser);

        const videoType = data.videoUri.substr(data.videoUri.lastIndexOf(".") + 1);
        // console.log(videoType);
        formData.append("video", {
            name: `video.${videoType}`,
            type: `videoType/${videoType}`,
            uri: Platform.OS === "ios"
                ? data.videoUri.replace("file://", "")
                : data.videoUri,
        });

        const imageType = data.imageUri.substr(data.imageUri.lastIndexOf(".") + 1);

        formData.append("image", {
            name: `image.${imageType}`,
            type: `imageType/${imageType}`,
            uri: Platform.OS === "ios"
                ? data.imageUri.replace("file://", "")
                : data.imageUri,
        })

        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.VIDEO}/`;
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 201) throw result;

        return result
    }

    async get_all_videos(token) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.VIDEO}/`;
        const params = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        return result;
    }

    async share_video(token, idVideo, total){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.VIDEO_ACTIONS}/${idVideo}/`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({shared_counter: total}),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result

        return result
    }

    async is_like(token, idVideo, idUser){
        const filter = `user=${idUser}&video=${idVideo}`;
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.VIDEO_LIKE}/?${filter}`;
        const params = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        if (result.length > 0 ) return true;
        return false;
    }
}