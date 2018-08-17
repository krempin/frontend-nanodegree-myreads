# MyReads Project

This was made for book lovers! MyReads allows you to track your books, sort books by shelf (Want to Read, Currently Reading, Read) and search new books to add them to your shelf. This project was part of the Udacity Front End Nanodegree program to train working with React and refactoring static code into an interactive single page application.

 ### How to install this app

This app requires [Node.js](https://nodejs.org/) to run. If node is installed, download the repository zip and save it to a directory or just use the command line to drive to this directory and clone the repository, install npm and start the development server:

```sh
$ git clone https://github.com/krempin/reactnd-project-myreads-starter
$ npm install
$ npm start
```

Once started, a browser window will open and the app should be displayed. You can also navigate to [http://localhost:3000](http://localhost:3000/)

### Search

Please note that the search will actually work only with these queries:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

### Requirements for this project

**General**

- [x] Use React
- [x] Routing and Links from main to search page and vice cersa
- [x] JSX is formatted correctly
- [x] A README file is included detailing all steps required to successfully run the application.
- [x] Component state is passed down from parent components. The state variable is not modified directly - setState() function is used correctly

**Bookshelf**

- [x] Cover, title and author are displayed
- [x] The main page contains three bookshelves: Want to Read, Currently Reading, Read
- [ ] By refreshing the page, the books will stay at their current shelfes
- [ ] Books can be moved between the shelves or completely deleted from any shelf

**Search**

- [ ] Search input takes queries. Each time a new letter is added, search will be performed on the fly
- [x] The search works correctly when there is no book cover (test: "biography")
- [ ] Search shows no results if the text from the input field will be completely deleted
- [ ] Books have got the same shelf on the search as on the main page
- [ ] Search will grab results from the API
- [ ] Switching from search to main page, all new added books should be visible at the shelf
- [ ] Books can be added to a shelf
- [ ] Invalid search queries are handled and prior search results are shown

### Ressources

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* Starter Code from [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)