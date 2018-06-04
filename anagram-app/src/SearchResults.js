import React, { Component } from 'react';
import { BrowserRouter, withRouter, Route, Link } from 'react-router-dom';
import './App.css';
import SearchBar from "./SearchBar.js";
import Nav from "./Nav.js";

class SearchResults extends Component {
    constructor() {
      super();
  
      this.state = {
        anagrams: [],
        loaded: false,
        longest: false,
      }
    }
  
  componentDidMount = () => {
    this.getSearchResults(this.props.searchInput)
  }
  
  getSearchResults = (searchTerm) => {
    if (searchTerm==="longest") {
        fetch('/find-longest', { 
            method: "GET"
          })
        .then(res => res.text())
        .then(resB=> {
          let longestList = JSON.parse(resB);
          this.setState({anagrams: longestList, loaded: true, longest: true});
        })
    }
    else {fetch('/search', { 
        method: "POST",
        body: JSON.stringify({word: searchTerm})
      })
    .then(res => res.text())
    .then(resB=> {
      let anagramList = JSON.parse(resB);
      this.setState({anagrams: anagramList, loaded: true});
      })
        }
    }
  
  componentWillReceiveProps = (nextProps) => {
        if(nextProps.searchInput !== this.props.searchInput){
            this.getSearchResults(nextProps.searchInput);
        }
    }

  render() {
    let renderAnagrams = (anagramList) => {
        return anagramList.map(anagram=>{
            if (!this.state.longest) {
            return (<div className="square"><div className="textInSqr">{anagram}</div></div>)
            }
            else {
                return (<div className="squareLong"><div className="textInSqr">{anagram}</div></div>)
            }
        })
    }
    return (
      <div className="searchResults"  style={{flexWrap:"wrap",display:"flex"}}>
        <Nav/>
        <div className="Results">
            <h1 className="anaFound">ana found...</h1>
            {this.state.loaded ? this.state.anagrams.length !== 0 ? 
            <div className="renderSquare">{renderAnagrams(this.state.anagrams)}</div> : 
            <div className="renderSquare"><div className="square"><h3 className="textInSqr">oops! you got ana. no anagrams found!</h3></div></div> : null}
        </div>
    </div>
      )
    }
  }
  
let SearchPage = withRouter(SearchResults);
export default SearchPage;