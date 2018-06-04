import React, { Component } from 'react';
import { BrowserRouter, withRouter, Route, Link } from 'react-router-dom'
import Nav from "./Nav.js";
import './App.css';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      anagrams: [],
    }
  }

handleSearchChange = (event) => {
  this.setState({searchInput: event.target.value})
}

handleSearchSubmit = (event) => {
  event.preventDefault();
  this.props.history.push("/searchResults/" + this.state.searchInput);
  this.setState({searchInput: ""});
}

render() {
  return (
    <div className="search">
      <form onSubmit={this.handleSearchSubmit}>
        <input required className="searchInput" placeholder="eg. e last" type="text" value={this.state.searchInput} onChange={this.handleSearchChange}></input>
        <button className="searchButton" type="submit" value=""><img src="/searchLogo.png" className="searchLogo"/></button>
      </form>
    </div>
    )
  }
}

let SearchBox = withRouter(SearchBar);
export default SearchBox;