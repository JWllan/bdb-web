import React from 'react';

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-title">
                    <label>Meet a universe with the eyes of Bard.</label>
                </div>
                <div className="home-subtitle">
                    <label>Register yourself now.</label>
                    <button>Start here</button>
                </div>
            </div>
        );
    }
}