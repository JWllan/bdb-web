const INITIAL_STATE = {
    books: [ ],
    book: null
};

export default function book(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ALL_BOOKS':
            const { books } = action.books;
            books.forEach(book => {
                var sum = 0;
                for( var i = 0; i < book.votes.length; i++ ){
                    sum += parseInt( book.votes[i].value, 10 );
                }
                
                book.avg = (sum > 0) ? sum / book.votes.length : 0;
            });
            state = { ...state, books };
            break;
        case 'SELECT_BOOK':
            const book = action.book;
            var sum = 0;
            for( var i = 0; i < book.votes.length; i++ ){
                sum += parseInt( book.votes[i].value, 10 );
            }
            
            book.avg = (sum > 0) ? sum / book.votes.length : 0;
            state = { ...state, book };
            break;
    }

    return state;
}