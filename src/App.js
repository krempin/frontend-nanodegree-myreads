import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {

  /* State array holding the books queried from API */
  state = {
    books:[]
  }

  /* Get 8 starter books from the API */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks books={this.state.books} changeShelf={this.changeShelf} />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <Bookshelf title="Currently Reading" books={this.state.books} shelf="currentlyReading" changeShelf={this.changeShelf} />
              <Bookshelf title="Want to Read" books={this.state.books} shelf="wantToRead" changeShelf={this.changeShelf} />
              <Bookshelf title="Read" books={this.state.books} shelf="read" changeShelf={this.changeShelf} />
              
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}
export default BooksApp