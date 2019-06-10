export function allBooks(books) {
    return {
        type: 'ALL_BOOKS',
        books
    }
}

export function selectBook(book) {
    return {
        type: 'SELECT_BOOK',
        book
    }
}

export function changeComment(comment) {
    return {
        type: 'CHANGE_COMMENT',
        comment
    }
}

export function sendComment(comment) {
    return {
        type: 'SEND_COMMENT',
        comment
    }
}