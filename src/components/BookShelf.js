import React from "react";
import Book from "./Book";


const BookShelf=({books,arrangeShelf})=>{

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book
          book={book}
          books={books}
          key={book.id}
          arrangeShelf={arrangeShelf}
        />
      ))}
    </ol>
  );
}

//class BookShelf extends Component {
  //render() {
    //const { books, arrangeShelf } = this.props;

    
  //}
//}

export default BookShelf;