import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import './Home.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../store/actions/user';

const Home = ({user}) => (
    (!user.loged) ?
        <div className="home">
            <div className="home-title">
                <label>Meet a universe with the eyes of Bard.</label>
            </div>
            <div className="home-subtitle">
                <label>Register yourself now.</label>
                <button>
                    <Link to='/registration'>Start here</Link>
                </button>
            </div>
        </div>
    :
        <Redirect to={`/library`} />
)

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);