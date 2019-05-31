import React from 'react';

import BookService from '../services/bookService';

const bookService = new BookService();

export default class App extends React.Component {
    componentDidMount = () => {
        bookService.get().then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}