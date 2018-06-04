import React, {Component} from 'react';
import {withRouter, Route, BrowserRouter, Link} from "react-router-dom";
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import Nav from "./Nav.js";
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  constructor () {
    super();
  }

  findLongest = () => {
      this.props.history.push("/searchResults/longest")
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="banner" onClick={this.findLongest}>
          <div className="background"></div>
          <div className="bgOverlay">welcome.<br/>type a couple words!<br/> ana will find you some anagrams from her dictionary.<br/>or click anywhere to see some of the longest words!</div>
        </div>
      </div>
    );
  }
}

let HomeBase = withRouter(Home)
export default HomeBase;