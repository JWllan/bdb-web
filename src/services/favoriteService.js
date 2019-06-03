import BaseService from './baseService';

export default class FavoriteService extends BaseService {
    constructor() {
        super('favorite');
    }

    async favorite(bookId) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json'
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

    async unfavorite(favoriteId) {
        const req = {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json'
            }
        }
        return fetch(this.URL + "/" + favoriteId, req)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}