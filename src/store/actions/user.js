export function actualUser(user) {
    return {
        type: 'ACTUAL_USER',
        user
    }
}

export function resetUser(user) {
    return {
        type: 'RESET_USER'
    }
}

export function changeName(name) {
    return {
        type: 'CHANGE_NAME',
        name
    }
}

export function changeEmail(email) {
    return {
        type: 'CHANGE_EMAIL',
        email
    }
}

export function changePassword(password) {
    return {
        type: 'CHANGE_PASSWORD',
        password
    }
}