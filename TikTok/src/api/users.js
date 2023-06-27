import { ENV } from "../utils";

export class Users {
    async obtains(token, searchText = ""){
        try {
            const filter = `search=${searchText}`
            const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USERS}/?${filter}`;
            const params = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;

        } catch (error) {
            throw error
        }
    }
}