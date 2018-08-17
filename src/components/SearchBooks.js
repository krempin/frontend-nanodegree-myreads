import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
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
		this.setState({ query: query })
	}
  
  	render() {

  		const { books } = this.props
  		const { query } = this.state

         /* Search function */
        let searchBooks
        if (query) {
	   		BooksAPI.search(query).then((searchBooks) => {
	      		this.setState({searchBooks})
	    	}) 
        } else {
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
	                {this.state.query.length > 0 &&
			         	<ol className="books-grid">
	                       	{this.state.searchBooks.map(book => (
	                            <li key={book.id} tabIndex="0">
	                                <Book book={book} shelf={this.props.shelf} />
	                            </li>
	                        ))}
			         	</ol>
		         	}
		        </div>
	      	</div>
	    );
  	}
}

export default SearchBooks