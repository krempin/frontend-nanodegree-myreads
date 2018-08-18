import React from 'react';
import Book from './Book'

class Bookshelf extends React.Component{ 
  
    render() {

      return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                        {/* First filter the books by shelf, then show each book one by one */}
                        {this.props.books
                        .filter(book => book.shelf === this.props.shelf)
                        .map(book => (
                            <li key={book.id} tabIndex="0">
                                <Book 
                                  book={book}
                                  shelf={this.props.shelf}
                                  changeShelf={this.props.changeShelf}
                                />
                            </li>
                        ))}
                  </ol>
                </div>
            </div>
      )
    }

}

export default Bookshelf