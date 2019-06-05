import BaseService from './baseService';

export default class BookService extends BaseService {
    constructor() {
        super('book');
    }

    async books(token) {
        const req = {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token
            }
        }
        return fetch(this.URL, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }

    async book(bookId) {
        const req = {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + this.token
            }
        }
        return fetch(this.URL + "/" + bookId, req)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}