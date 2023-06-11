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
}