import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import './Library.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../store/actions/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

const books = [
    {
      votes: [
        {
          _id: "5cef0354a4c4881f6ca7cb81",
          value: 3,
          book: "5ceefc79cdd9603998341b7c",
          user: "5ceef7fed231983bbc88c54d",
          createdAt: "2019-05-29T22:10:28.351Z",
          __v: 0
        }
      ],
      comments: [
        {
          _id: "5ceeffa4cac1593910653292",
          text: "The power is only in your words, Bard. I was there too and Warrior didn't go to the dragon's cave alone.",
          book: "5ceefc79cdd9603998341b7c",
          user: "5ceef7fed231983bbc88c54d",
          createdAt: "2019-05-29T21:54:44.999Z",
          __v: 0
        }
      ],
      favorites: [
        {
          _id: "5cef026691878511f04233aa",
          book: "5ceefc79cdd9603998341b7c",
          user: "5ceef7fed231983bbc88c54d",
          createdAt: "2019-05-29T22:06:30.574Z",
          __v: 0
        }
      ],
      _id: "5ceefc79cdd9603998341b7c",
      title: "Songs of the Warrior",
      description: "Songs about the incridible adventures of the Warrior!",
      gender: "Adventure",
      launchedIn: "1991-08-29T00:00:00.000Z",
      author: "Bard",
      createdAt: "2019-05-29T21:41:13.739Z",
      __v: 4
    }
  ]

const Library = ({}) => (
    <div className='library'>
        <div className='library-carousel'>
            <Carousel className='library-carousel-base'>
                {books.map(book => (
                    <Carousel.Item key={book._id}>
                        <div className='library-carousel-item'>
                            <h3>{book.title}</h3>
                            <h1>{book.author}</h1>
                            <p>{book.description}</p>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </div>
)

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Library);