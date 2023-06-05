import { ENV } from "../utils";

export class Auth{
    async register(data){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REGISTER}/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 201) throw result;

        return result;
    }

    async login(data) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.LOGIN}/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        return result;
    }

    async refresh_token(token){
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REFRESH_TOKEN}/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: token}),
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status !== 200) throw result;

        return result
    }

}