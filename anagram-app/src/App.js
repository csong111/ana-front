import React, { Component } from 'react';
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import Home from "./Home.js"
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import Nav from "./Nav.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Route
            exact={true}
            path="/"
            render={()=>{return (<Home/>)}}
          />
          <Route
            exact={true}
            path="/searchResults/:searchInput"
            render={(routerData)=>{return(<SearchResults searchInput={routerData.match.params.searchInput}/>)}}
          />
        </div>
      </div>
    );
  }
}

let SearchPage = withRouter(App);
export default SearchPage;
