import React from 'react';

import './Header.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../store/actions/user'

const Header = ({ name, enterHeader }) => (
    <div className="header">
        <div className="header-title">
            <label>Biblioteca do Bardo</label>
        </div>
        <div className="header-perfil">
            {
                name !== '' ?
                    <div className="heade-perfil-menu">
                        <label>Hello, {name}!</label>
                        <select>
                            <option>Edit perfil</option>
                            <option>Favorites</option>
                            <option>Leave</option>
                        </select>
                    </div>
                :
                    <div className="header-perfil-login">
                        <div>
                            <input type="text" placeholder="Log in"></input>
                            <input type="password" placeholder="Password"></input>
                            <button onClick={() => enterHeader()}>Enter</button>
                        </div>
                        <div>
                            <a href="#">Register</a>
                        </div>
                    </div>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    name: state.user.name
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);