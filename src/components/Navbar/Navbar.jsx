import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    toggle: false,
  };

  handleMenuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
  return (
    <div>
    <nav className="navbar navbar-dark navbar-expand-lg primary-bg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" ></span>
      </button>
      <a class="navbar-brand" href="/">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/bookshelf" className="nav-link">
            <i className="fas fa-book" /> Bookshelf
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" className="nav-link">
            <i className="fas fa-search" /> Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    );
  }
}

export default Navbar;
