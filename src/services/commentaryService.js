import BaseService from './baseService';

export default class CommentaryService extends BaseService {
    constructor() {
        super('commentary');
    }

    async comment(commentary, bookId, token) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: commentary})
        }
        return fetch(this.URL + "/" + bookId, req)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.log(err);
        })
    }
}