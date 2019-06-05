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