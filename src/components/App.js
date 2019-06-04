import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Home from '../pages/Home';
import store from '../store';
import Registration from '../pages/Registration';
import Library from '../pages/Library';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Provider store={store}>
                        <Header />
                        <div className="main-content">
                            <Route path='/' exact component={Home} />
                            <Route path='/registration' component={Registration} />
                            <Route path='/library' component={Library} />
                        </div>
                    </Provider>
                </div>
            </Router>
        );
    }
}