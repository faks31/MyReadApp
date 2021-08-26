import React, { Component, useState,useEffect } from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI.js";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";


const BooksApp = () => {
  const [books, setbooks] = useState([]);

  /* Returns a Promise which resolves to a JSON object containing a collection of book objects.
  This collection represents the books currently in the bookshelves in your app. */
  const retrieveBooksInfo = () => {
    BooksAPI.getAll().then( books => {
      setbooks( books );
    })
  }

  // This hook runs after the component output has been rendered to the DOM


  useEffect(() => {
    
    
      retrieveBooksInfo();
    
  }, [])

   // Todo: implement a notification system to tell the user the book has been moved to the corresponding shelf
   const alertChange = () => {
    alert("book successfully moved to the chosen shelf: " /* + current shelf */);
  }

  
  const arrangeShelf = ( newBook, newShelf ) => {
    BooksAPI.update( newBook, newShelf ).then(( response ) => {
      // Notify the user about the shelf change
      alertChange();
      // Arrange the shelf
      newBook.shelf = newShelf;
      // Sort the books
      const updatedBooks = books.filter( book => book.id !== newBook.id );
      // Push the new books into the array, and then merge the state
      updatedBooks.push( newBook )
      setbooks( updatedBooks );
    })
  }
  return (
    <div className="app">
    {/* Routing */}
      <Route path="/search" render={( { history }) => (
        <SearchBooks
          books={ books }
          arrangeShelf={ arrangeShelf }
        />
      )} />
      <Route exact path="/" render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooks
            books={ books }
            arrangeShelf={ arrangeShelf }
          />
          <div className="open-search">
            <Link to="/search">Search</Link>
          </div>
        </div>
      )} />
    </div>
  )
  
}

// class BooksApp extends Component {
//     // Set initial state
//     state = {
//     books: []
//   };

  

//   // This hook runs after the component output has been rendered to the DOM
//   componentDidMount() {
//     this.retrieveBooksInfo();
//   }

 


//   render() {
//     const { books } = this.state;
   
//     }
//   }
  
export default BooksApp;