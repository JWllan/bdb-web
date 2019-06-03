import React from 'react';
import { Provider } from 'react-redux';

import Header from './Header';
import Home from '../pages/Home';
import store from '../store';

export default class App extends React.Component {
    componentDidMount = () => {
        // bookService.books().then(data => {
        //     console.log(data);
        // });
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header />
                    <div className="main-content">
                        <Home />
                    </div>
                </Provider>
            </div>
        );
    }
}