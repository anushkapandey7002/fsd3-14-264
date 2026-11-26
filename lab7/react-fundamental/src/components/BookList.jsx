//rafce - react arrow function component and export
//rafce - react function component and export


import Book from './Book.jsx';
import {books} from '../data.js';

function BookList () {
  return (
    <>
    <h1>
        Book List are : total {books.length}found
    </h1> 
    {
      books.map((item)=><Book {...item}/>) 
    }
    </>
  );
}

export default BookList
