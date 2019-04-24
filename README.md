# BookShelf App
**[AlbanyCanCode Course](https://albanycancode.org/)**
- Projects: [2) Book Store App](https://docs.google.com/document/d/1nDpv2dALdW2HUSJ-DpsOM644FM9BbxNjrzYtyQCpj-M/edit?usp=sharing)
- Instructors: [Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345)
- [AlbanyCanCode's JavaScript Frameworks Class Spring 2019](https://github.com/AlbanyCanCodeCourses/JavaScript2019)
- [Demo Book Store App on codesandbox.io - TBD]( # )

## Introduction

**Book-Store-App** is a *ReactJS* application that searches the Google Book Rest API and allows users to assign books to specific shelves within their Bookshelf.
The app has a Nodejs Back-End Server created by our instructors [Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345). The Front-End has four main components — Navbar, Search, Bookshelf and Book Details.
Our API is a wrapper around the Google API, which is [rate limited](https://www.keycdn.com/support/rate-limiting). This means that after a certain number of requests per day (in the thousands), you will not be able to search for books. In order to get around this, the bookstore API will not search for books on every single request. It will only process the last request in a rapid succession of requests. When you get this response back from the server, you shoud simply ignore the response. When you receive this response, it simply means that the server is waiting for the user to finish typing, and you can ignore the response.

* __Navbar:__ Displays links to Bookshelf and Search.
* __Search:__ Allows the user to search for books and select from the list of results one to find out more about that specific book.
* __Bookshelf:__ Lists the user's books in three categories: Want to Read, Currently Reading and Read. It also allows the user to switch books to different shelfs or remove them completely.
* __BookDetails:__ Provides more detailed information about the specific book and lets the user add it to the Bookshelf.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Installation

The project requires the installation of both the API Server, which provides the books data, and the React App Server, which provides the application for viewing and manipulating the data.

### Step 1: Clone

Create a folder for this project called react projects folder, then inside the project folder, *Clone* or *Download* the repository from *GitHub* using your terminal by typing:

	$> cd react_projects/
	$> git clone https://github.com/lindakovacs/bookstore.git

The contents of the `bookstore` directory should contain all the files and directories as displayed in the Github repo.

### Step 2: API Server Start

To start the API Server execute these commands in the terminal:

	$> cd bookstore/server
	$> yarn install
	$> yarn start

Alternatively you can use `npm install` and `npm start` to start the app and the server.

This starts the API Server that allows access to the books database, which is available as *JSON* file. To view, open `http://localhost:7000` in your browser.

### Step 3: React App Start

To start the React App Server execute these command in the terminal:

	$> cd bookstore/
	$> yarn install
	$> yarn start

This starts the React Bookstore Application that is visible in the browser at `http://localhost:3000`.

## User Guide

### Searching for Books

User can search for books by typing keywords in the `Search Bookstore` field, either on the homepage (`/`) or on the **Search** page (`/search`) or clicking on **Search** link in the top navigation bar.
The results of the search will be displayed as a list of books.

### Book Details

Each book can be viewed by clicking on the thumbnail or title. The **Book Details** view lists additional information about the book, subtitles, author(s), publishing date, publisher, and categories. In addition, the **Reading Status** displays whether the current book is saved to the **Bookshelf** or not. That is, if `Not Selected` is displayed in the drop-down, it means that it is not saved to the **Bookshelf**.

### Shelves

There are three shelves available to choose from to add/remove from the **Bookshelf**:
* Want to Read
* Currently Reading
* Read
If the books does not exist in any of the shelves above, it will display **None**.

### Books in the Bookshelf

Click on the **Bookshelf** link in the top navigation bar to view a list of books in the various shelves that have been saved. The books are grouped by the shelf name as listed above.

### Adding Books to the Bookshelf

From the **Search** Results click on the thumbnail or title of the desired book to view its *details* and add or remove from the **Bookshelf**.

### Remove Books from the Bookshelf

From the **Change Shelf** drop-down menu, select `Remove` to remove book from any shelf.

### Move or Update the Bookshelf

From the **Change Shelf** drop-down menu, select a shelf to move book to another shelf.

## API Components

### NavBar

The **NavBar** component contains the links to the various sections of the website.

### Search

The **Search** component contains the main search box. The text typed in the search box will run the `search` function that accesses the database via `axios` to return the results of books.

### BookDetails

The **BookDetails** component contains the detailed information of a specific book. The `getBookDetails` function accesses data from the database via `axios` and with the `bookId` grabs the book details. The `BookList` function accesses data from the database via `axios` to move/update the shelf assignment for the current book.

### Bookshelf

The **Bookshelf** componenet contains the list of books assigned to shelves. The `getBookShelf` function accesses data from the database via `axios` and grabs a list of the books assigned to shelves. The `BookList` function accesses data from the database via `axios` to move/update the shelf assignment for the each of books in the bookshelf list.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Author

**[Linda Kovacs](https://github.com/lindakovacs)**

## Acknowledgments

* A big Thank You to [Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345) for their expert instruction guidance in AlbanyCanCode Bootcamp!