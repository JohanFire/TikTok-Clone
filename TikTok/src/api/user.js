import { ENV } from "../utils";

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
}