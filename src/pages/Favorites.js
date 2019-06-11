import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../store/actions/user';
import * as BookActions from '../store/actions/book';

import './Favorites.scss';

const Favorites = ({user, books}) => (
    (user.loged) ?
        <div className="favorites">
            <div className="favorites-title">
                <label>Your favorites histories:</label>
            </div>
            <div className='favorites-list'>
                {user.favorites.map(fav => (
                    <div key={fav._id} className='favorites-list-item'>
                        <h2>{fav.book.title}</h2>
                        <h6> - {fav.book.author}</h6>
                        <h4>Rate: {fav.book.avg} stars</h4>
                        <p>{fav.book.description}</p>
                    </div>
                ))}
            </div>
        </div>
    :
        <Redirect to={`/`} />
)

const mapStateToProps = state => ({
    user: state.user,
    books: state.book
});

const mapDispatchToProps = dispatch => bindActionCreators({...UserActions, ...BookActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);