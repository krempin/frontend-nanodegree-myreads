import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

	/* Save the search query as the component`s state */
  	state = {
    	query: '',
    	searchBooks: []
	}

	/* Pass changes from the input field to the state */
	updateQuery = (query) => {
		this.setState({ query: query })

         /* Search function: Get books from API, then set the state for render the books
         	if the books can not be rendered as a search query does not get results,
         	clean up the state  */
         
        if (this.state.query !== '') {
	   		BooksAPI.search(this.state.query).then((searchBooks) => {
	   			if (searchBooks.error) {
	      			this.setState({searchBooks:[]})
	      		} else {
	      			this.setState({searchBooks})
	      		}
	    	}) 
	    } else {
	    	this.setState({searchBooks:[]})
        }
        
	}
  
  	render() {

  		/* Defines the shelf for all books not in shelves yet. Default value is 'none' */
  		let shelf = 'none';

	    return (
	      	<div className="search-books">
	        	<div className="search-books-bar">
	          		<Link className="close-search" to="/">Close</Link>
	          		<div className="search-books-input-wrapper">
	            		<input 
	            			type="text" 
	            			placeholder="Search by title or author"
	            			value={this.state.query}
	            			onChange={(event) => this.updateQuery(event.target.value)}
	            		/>
	          		</div>
	        	</div>
		        <div className="search-books-results">
		         	<ol className="books-grid">

                       	{this.state.searchBooks.map(book => {

                       		this.props.books.map(booksinShelves => {
                       			if (booksinShelves.title === book.title) {
                       				shelf = booksinShelves.shelf
								}
                       		})

                       		return (
	                            <li key={book.id} tabIndex="0">
	                                <Book 
	                                	book={book}
	                                	shelf={shelf}
	                                	changeShelf={this.props.changeShelf}
	                                />
                            	</li>
                            )
                        })}
		         	</ol>
		        </div>
	      	</div>
	    );
  	}
}

export default SearchBooks