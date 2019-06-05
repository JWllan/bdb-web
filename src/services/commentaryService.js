import BaseService from './baseService';

export default class CommentaryService extends BaseService {
    constructor() {
        super('commentary');
    }

    async comment(commentary, bookId) {
        const req = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentary)
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