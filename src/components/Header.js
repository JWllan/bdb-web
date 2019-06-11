import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

import AuthService from '../services/authService';
import BookService from '../services/bookService';

import * as UserActions from '../store/actions/user';
import * as BookActions from '../store/actions/book';

import './Header.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

const authService = new AuthService();
const bookService = new BookService();

toast.configure();

function logIn(history, user, actualUser, allBooks) {
    let { email, password } = user;
    let credentials = { email, password };

    authService.authenticate(credentials).then(data => {
        if (data.ok) {
            data.json().then(element => {
                let newUser = { ...element.user, token: element.token }
                actualUser(newUser);

                bindBooks(newUser.token, allBooks, history);
            })
        } else {
            data.json().then(err => {
                toast.error(err.error, {autoClose: 2000});
            })
        }
    });
}

function logOut(history, resetUser) {
    resetUser();
    history.push('/');
}

function bindBooks(token, allBooks, history) {
    bookService.books(token).then(data => {
        if (data.ok) {
            data.json().then(books => {
                allBooks(books);
                history.push('/library');
            })
        } else {
            data.json().then(err => {
                toast.error(err.error, {autoClose: 2000});
            })
        }
    })
}

function goToFavs(history) {
    history.push('/favorites');
}

const Header = ({ user, actualUser, resetUser, changeEmail, changePassword, allBooks }) => (
    <div className="header">
        <div className="header-title">
            <Route render={({ history}) => (
                <label onClick={() => {history.push('/')}}>Biblioteca do Bardo</label>
            )} />
        </div>
        <div className="header-perfil">
            {
                user.loged ?
                    <div className="header-perfil-menu">
                        <Dropdown  className="header-perfil-submenu">
                            <Dropdown.Toggle variant="secondary">
                                {user.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Route render={({ history}) => (
                                    <Dropdown.Item onClick={() => {goToFavs(history)}}>Favorites</Dropdown.Item>
                                )} />
                                <Route render={({ history}) => (
                                    <Dropdown.Item onClick={() => {logOut(history, resetUser)}}>Leave</Dropdown.Item>
                                )} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                :
                    <div className="header-perfil-login">
                        <div>
                            <input type="text" onChange={(e) => changeEmail(e.target.value)} placeholder="Email"></input>
                            <input type="password" onChange={(e) => changePassword(e.target.value)} placeholder="Password"></input>
                            <Route render={({ history}) => (
                                <button onClick={() => {logIn(history, user, actualUser, allBooks)}}>Enter</button>
                            )} />
                        </div>
                        <div>
                            <Link to='/registration' tag='a'>Register</Link>
                        </div>
                    </div>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    user: state.user,
    book: state.book
});

const mapDispatchToProps = dispatch => bindActionCreators({...UserActions, ...BookActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);