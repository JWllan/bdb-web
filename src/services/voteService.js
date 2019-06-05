import BaseService from './baseService';

export default class VoteService extends BaseService {
    constructor() {
        super('vote');
    }

    async vote(value, bookId) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }
        return fetch(this.URL + "/" + bookId, req)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            // console.log(err);
        })
    }

    async edite(value, voteId) {
        const req = {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }
        return fetch(this.URL + "/" + voteId, req)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}