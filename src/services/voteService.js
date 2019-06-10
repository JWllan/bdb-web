import BaseService from './baseService';

export default class VoteService extends BaseService {
    constructor() {
        super('vote');
    }

    async vote(value, bookId, token) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value})
        }
        return fetch(this.URL + "/" + bookId, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }

    async edit(value, voteId, token) {
        const req = {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value})
        }
        return fetch(this.URL + "/" + voteId, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}