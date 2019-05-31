const URL = 'http://localhost:3007/auth';

class AuthService {
    construtor() {}

    async registration() {
        return fetch(URL + '/registration')
        .then((res) => {
            
        })
    }
    
}


