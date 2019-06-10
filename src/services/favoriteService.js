import BaseService from './baseService';

export default class FavoriteService extends BaseService {
    constructor() {
        super('favorite');
    }

    async favorite(bookId, token) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }
        return fetch(this.URL + "/" + bookId, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }

    async unfavorite(favoriteId, token) {
        const req = {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }
        return fetch(this.URL + "/" + favoriteId, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}