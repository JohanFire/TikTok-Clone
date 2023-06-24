import { ENV } from "../utils";
import { Platform } from "react-native";

export class User{
    async me(token){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER_ME}/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);

        const result = await response.json();

        if (response.status !== 200) throw result;

        return result;
    }

    async update_avatar(token, imageUri){
        const formData = new FormData();
        const imageType = imageUri.substr(imageUri.lastIndexOf(".") + 1);

        formData.append("avatar", {
            name: `avatar.${imageType}`,
            type: imageType,
            uri: Platform.OS === "ios" 
                ? imageUri.replace("file://", "") 
                : imageUri
        });

        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER_ME}/`;
        const params = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !== 200 )throw result;
        return result;
    }
}