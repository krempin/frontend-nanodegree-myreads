import React from 'react';

class Book extends React.Component{

  	render() {

  		/* Fallback for books without a cover */
	    let background = { backgroundColor: "#e3e3e3" };
      if ( typeof this.props.book.imageLinks !== 'undefined' ) {
          background = { backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }
      }

    	return (
    		<div className="book">
              	<div className="book-top">
                	<div className="book-cover" style={background}></div>
                		<div className="book-shelf-changer">
                  			<select>
	                            <option value="move" disabled>Move to...</option>
	                            <option value="currentlyReading">Currently Reading</option>
	                            <option value="wantToRead">Want to Read</option>
	                            <option value="read">Read</option>
	                            <option value="none">None</option>
                  			</select>
                		</div>
              		</div>
      			<div className="book-title">{this.props.book.title}</div>
      			<div className="book-authors">
		          	{this.props.book.authors && this.props.book.authors.map( (author, index) => (
		            	<div key={index}>
		              		{author}
		            	</div>
		          	))}
      			</div>
    		</div>
    	)
  	}
}

export default Book