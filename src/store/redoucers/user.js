const INITIAL_STATE = {
    name: '',
    email: '',
    _id: '',
    createdAt: new Date(),
    token: '',
    votes: [],
    comments: [],
    favorites: [],
    password: '',
    loged: false
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ACTUAL_USER':
            const { name, email, _id, createdAt, token, votes, comments, favorites } = action.user;
            state = { ...state, name, email, _id, createdAt, token, votes, comments, favorites, loged: true };
            break;
        case 'RESET_USER':
            state = INITIAL_STATE;
            break;
        case 'CHANGE_NAME':
            state = { ...state, name: action.name };
            break;
        case 'CHANGE_EMAIL':
            state = { ...state, email: action.email };
            break;
        case 'CHANGE_PASSWORD':
            state = { ...state, password: action.password };
            break;
    }

    return state;
}