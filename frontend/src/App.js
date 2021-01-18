import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import CreateCoin from "./components/create-coin.component";
import ShowCoin from "./components/show-coin.component";
import CoinList from "./components/coin-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt="React Logo" />
            </a>
            <Link to="/" className="navbar-brand">Crypto Coin Interests App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Coins</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Coin</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={CoinList} />
          <Route path="/coin/:id" component={ShowCoin} />
          <Route path="/create" component={CreateCoin} />
        </div>
      </Router>
    );
  }
}

export default App;
