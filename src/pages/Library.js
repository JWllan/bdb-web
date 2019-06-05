import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import './Library.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../store/actions/user';
import * as BookActions from '../store/actions/book';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

function itemClick(book, selectBook) {
    selectBook(book);
}

const Library = ({sBook, sUser, selectBook}) => (
    sUser.loged ?
        <div className='library'>
            <div className='library-carousel'>
                <Carousel className='library-carousel-base'>
                    {sBook.books.map(book => (
                        <Carousel.Item key={book._id} onClick={() => {itemClick(book, selectBook)}}>
                            <div className='library-carousel-item'>
                                <h2>{book.title}</h2>
                                <h6> - {book.author}</h6>
                                <h4>Rate: {book.avg} stars</h4>
                                <p>{book.description}</p>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            {sBook.book !== null ?
                <div>
                    <div className='library-book'>
                        <h2>{sBook.book.title}</h2>
                        <h6> - {sBook.book.author}</h6>
                        <h4>Rate: {sBook.book.avg} stars</h4>
                        <p>{sBook.book.description}</p>
                    </div>
                    <div className='library-book-comments'>
                        <h4>Comments</h4>
                        {sBook.book.comments.map(comment => (
                            <div className='library-book-comments-item'>
                                <p>{comment.text}</p>
                                <div>
                                    <h6>by {comment.user.name}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            :
                null
            }
        </div>
    :
        <Redirect to={`/`} />
)

const mapStateToProps = state => ({
    sUser: state.user,
    sBook: state.book
});

const mapDispatchToProps = dispatch => bindActionCreators({...UserActions, ...BookActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Library);