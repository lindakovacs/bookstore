import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Search from "./Search/Search";
import BookDetails from "./BookDetails/BookDetails";
import Bookshelf from "./Bookshelf/Bookshelf";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/bookshelf" component={Bookshelf} />
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route path="/book/:id" component={BookDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
