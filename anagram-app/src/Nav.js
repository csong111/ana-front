import React, {Component} from 'react';
import { BrowserRouter, withRouter, Route, Link } from 'react-router-dom'
import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";
import logo from './logo.svg';
import './App.css';

class Nav extends Component {
  constructor () {
    super();
  }

  backHome = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="Nav">
        <ul style={{listStyleType: "none", width: "96vw"}} className="UL">
            <li className="navLogo"><button className="noButton" onClick={this.backHome}><img src="/logo.png" className="logo"/></button></li>
            <li className="navSearch"><SearchBar/></li>
        </ul>
      </div>
    );
  }
}
let Navi = withRouter(Nav);
export default Navi;