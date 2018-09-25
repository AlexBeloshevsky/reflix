import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  
  render() {
    return (
<Router>
<div className="App">
  <div id="home-background"></div>
  <div id="main-links">
  <Link to="/">Home</Link>
  <Link to="/catalog">Catalog</Link>
  <img src={logo} alt="My logo" className="logo"/>
  </div>
  <Route path="/" exact component={Home}/>
  <Route path="/catalog" exact component={Catalog}/>
  <Route path="/movies/:index" exact render = {({ match }) => <MovieDetail match={match}/>}/>
</div>
</Router>
    );
  }
}

export default App;
