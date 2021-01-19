import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Container, Navbar, Nav} from 'react-bootstrap'

import CreateCoin from "./components/create-coin.component";
import ShowCoin from "./components/show-coin.component";
import CoinList from "./components/coins-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">
              Crypto Coin Interests App
            </ Navbar.Brand >
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" >
              <Nav className = "mr-auto">
                <Nav.Link href="/" >Coins</ Nav.Link >
                <Nav.Link href="/create">Create Coin</ Nav.Link >
              </Nav>
            </ Navbar.Collapse >
          </Navbar>
          <br/>
          <Route path="/" exact component={CoinList} />
          <Route path="/coin/:id" component={ShowCoin} />
          <Route path="/create" component={CreateCoin} />
        </Container>
      </Router>
    );
  }
}

export default App;
