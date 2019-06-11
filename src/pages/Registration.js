import React from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import AuthService from '../services/authService';

import * as UserActions from '../store/actions/user';

import './Registration.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const authService = new AuthService();

function finishRegistration(history, user, resetUser) {
    let { name, email, password } = user;
    let newUser = { name, email, password };

    authService.registration(newUser).then(data => {
        if (data.ok) {
            toast.success('Registration complete.', {autoClose: 2000});
            resetUser();
            history.push('/');
        } else {
            data.json().then(err => {
                toast.error(err.error, {autoClose: 2000});
            })
        }
    });
}

const Registration = ({ user, resetUser, changeName, changeEmail, changePassword }) => (
    <div className="registration">
        <div className='registration-content'>
            <div className='registration-content-header'>
                <label>Registration</label>
            </div>
            <div className='register-content-group'>
                <label>Name:</label>
                <input type='text' onChange={(e) => changeName(e.target.value)} value={user.name}></input>
            </div>
            <div className='register-content-group'>
                <label>Email:</label>
                <input type='email' onChange={(e) => changeEmail(e.target.value)} value={user.email}></input>
            </div>
            <div className='register-content-group'>
                <label>Password:</label>
                <input type='password' onChange={(e) => changePassword(e.target.value)} value={user.password}></input>
            </div>
            <div className='register-content-footer'>
                <button><Link to='/'>Cancel</Link></button>
                <Route render={({ history}) => (
                    <button type='button' onClick={() => {finishRegistration(history, user, resetUser)}} >
                        Finish
                    </button>
                )} />
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);