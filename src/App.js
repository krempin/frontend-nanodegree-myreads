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

  /* TO DO: Create move shelf function 
  changeShelf = () => {

    Update so that changed books stay on their shelves when page is refreshed
    BooksAPI.update()

  }
  */

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks books={this.state.books} />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <Bookshelf title="Currently Reading" books={this.state.books} shelf="currentlyReading" />
              <Bookshelf title="Want to Read" books={this.state.books} shelf="wantToRead" />
              <Bookshelf title="Read" books={this.state.books} shelf="read" />
              
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