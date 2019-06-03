const INITIAL_STATE = {
    name: ''
};

export default function user(state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_NAME') {
        return { ...state, name: action.name };
    }
    return state;
}