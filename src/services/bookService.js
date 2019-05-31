const URL = 'http://localhost:3007/book';

export default class BookService {
    construtor() {}

    async get() {
        const req = {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZWVmN2ZlZDIzMTk4M2JiYzg4YzU0ZCIsImlhdCI6MTU1OTMyMTI4MywiZXhwIjoxNTU5NDA3NjgzfQ.Ntk28bkrYHkLMMaFgAX9y6ufpc3RQUUt_ruvwtdcGqk"
            }
        }
        return fetch(URL, req)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            //error
        })
    }
    
}