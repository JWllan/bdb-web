import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import { Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BookService from '../services/bookService';
import CommentaryService from '../services/commentaryService';
import FavoriteService from '../services/favoriteService';
import VoteService from '../services/voteService';

import * as UserActions from '../store/actions/user';
import * as BookActions from '../store/actions/book';

import './Library.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

const bookService = new BookService();
const commentaryService = new CommentaryService();
const favoriteService = new FavoriteService();
const voteService = new VoteService();

toast.configure();

function itemClick(book, selectBook) {
    selectBook(book);
}

function sendCommentary(commentary, bookId, token, allBooks, selectBook) {
    commentaryService.comment(commentary, bookId, token).then(data => {
        if (data.ok) {
            bindBooks(token, allBooks, bookId, selectBook);
        } else {
            data.json().then(err => {
                toast.error(err.error, {autoClose: 2000});
            })
        }
    })
}

function bindBooks(token, allBooks, bookId, selectBook) {
    bookService.books(token).then(data => {
        if (data.ok) {
            data.json().then(books => {
                allBooks(books);
                var book = books.books.filter((book) => { return book._id === bookId })[0];
                selectBook(book);
            })
        } else {
            data.json().then(err => {
                toast.error(err.error, {autoClose: 2000});
            })
        }
    })
}

function votedValue(sBook, user) {
    var vote = sBook.book.votes.filter(vote => vote.user === user._id);
    return vote.length > 0 ? vote[0] : {value:0};
}

function favorited(sBook, user) {
    var vote = sBook.book.favorites.filter(favorite => favorite.user === user._id);
    return vote;
}

function vote(value, bookId, voted, token, allBooks, selectBook) {
    if (voted.value === 0) {
        voteService.vote(value, bookId, token).then(data => {
            if (data.ok) {
                bindBooks(token, allBooks, bookId, selectBook);
            } else {
                data.json().then(err => {
                    toast.error(err.error, {autoClose: 2000});
                })
            }
        });
    } else {
        voteService.edit(value, voted._id, token).then(data => {
            if (data.ok) {
                bindBooks(token, allBooks, bookId, selectBook);
            } else {
                data.json().then(err => {
                    toast.error(err.error, {autoClose: 2000});
                })
            }
        });
    }
}

function favorite(favorited, bookId, token, allBooks, selectBook) {
    if(favorited.length === 0) {
        favoriteService.favorite(bookId, token).then(data => {
            if (data.ok) {
                bindBooks(token, allBooks, bookId, selectBook);
            } else {
                data.json().then(err => {
                    toast.error(err.error, {autoClose: 2000});
                })
            }
        });
    } else {
        favoriteService.unfavorite(favorited[0]._id, token).then(data => {
            if (data.ok) {
                bindBooks(token, allBooks, bookId, selectBook);
            } else {
                data.json().then(err => {
                    toast.error(err.error, {autoClose: 2000});
                })
            }
        });
    }
}

const Library = ({sBook, sUser, selectBook, changeComment, allBooks}) => (
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
                        <div>
                            <h2>{sBook.book.title}</h2>
                            <FontAwesomeIcon icon='heart' size='3x'
                                className={('library-book-favorite ' + (favorited(sBook, sUser).length > 0 ? 'library-book-favorite-checked' : ''))}
                                onClick={() => favorite(favorited(sBook, sUser), sBook.book._id, sUser.token, allBooks, selectBook)}
                            />
                        </div>
                        <h6> - {sBook.book.author}</h6>
                        <h4>Rate: {sBook.book.avg} stars</h4>
                        <p>{sBook.book.description}</p>
                        <h4>Vote:</h4>
                        {[1, 2, 3, 4, 5].map(v => (
                            <FontAwesomeIcon key={v} icon='star'
                                className={('library-book-vote ' + (v <= votedValue(sBook, sUser).value ? 'library-book-vote-checked' : ''))}
                                onClick={() => vote(v, sBook.book._id, votedValue(sBook, sUser), sUser.token, allBooks, selectBook)}
                            />
                        ))}
                    </div>
                    <div className='library-book-comments'>
                        <h4>Comments</h4>
                        {sBook.book.comments.map(comment => (
                            <div key={comment._id} className='library-book-comments-item'>
                                <p>{comment.text}</p>
                                <div>
                                    <h6>by {comment.user.name}</h6>
                                </div>
                            </div>
                        ))}
                        <div className='library-book-comments-your'>
                            <textarea placeholder="Write your comment" onChange={(e) => changeComment(e.target.value)} value={sBook.comment}>
                            </textarea>
                            <div>
                                <button onClick={() => sendCommentary(sBook.comment, sBook.book._id, sUser.token, allBooks, selectBook)}>Comment</button>
                            </div>
                        </div>
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