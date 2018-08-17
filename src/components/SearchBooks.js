import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {

	/* Save the search query as the component`s state */
  	state = {
    	query: '',
    	searchBooks : []
	}

	/* Pass changes from the input field to the state */
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}
  
  	render() {

  		const { books } = this.props
  		const { query } = this.state

         /* Search function */
        let searchBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            searchBooks = books.filter((book) => match.test(book.title))
        } else {
            /* Show all books in array */
            searchBooks = books;
        }

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
                       	{searchBooks.map(book => (
                            <li key={book.id} tabIndex="0">
                                <Book book={book} />
                            </li>
                        ))}
		         	</ol>
		        </div>
	      	</div>
	    );
  	}
}

export default SearchBooks