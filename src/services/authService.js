import BaseService from "./baseService";

export default class AuthService extends BaseService {
    constructor() {
        super('auth');
    }

    async registration(newUser) {
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        return fetch(this.URL + '/register', req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        })
    }

    async authenticate(credentials) {
        const req = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
        return fetch(this.URL + '/authenticate', req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        })
    }
}


