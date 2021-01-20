import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';
import TinderCard from 'react-tinder-card'
import {Card} from "react-bootstrap";
// todo: remove thumbnail processing. It is not necessary for cards

export default class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {coins: [],
                lastDirection: ''}
    this.onswipe = this.onswipe.bind(this)
    this.outOfFrame = this.outOfFrame.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:8080/coins/')
      .then(response => {
        this.setState({coins: response.data});
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  onswipe(direction,nameToDelete){
    this.setState({
      lastDirection: direction
    })
  }
  outOfFrame(name) {
    console.log(name)
  }

  render() {
    return (
      <div>
          <Col xs="6">
          <Row className="justify-content-center text-center">
            <div className='cardContainer'>
              {this.state.coins.map((coin) =>
              <TinderCard className='swipe' key={coin.name} onSwipe={(dir) => this.onswipe(dir, coin.name)} onCardLeftScreen={() => this.outOfFrame(coin.name)}>
                <Card>
                  <Card.Img variant="top" src={coin.main.url}></Card.Img>
                  <Card.Body>
                    <Card.Title>
                      {coin.name}
                    </Card.Title>
                      <Card.Text>
                        <Row className ="justify-content-center">
                          <p><strong>Description:</strong> {coin.description}</p>
                        </Row>
                        <Row className ="justify-content-center">
                          <p><strong>Price: </strong> ${coin.price}</p>
                        </Row>
                      <h3>Facts</h3>
                      <Row className ="justify-content-center">
                      {coin.facts.slice(0,2).map(function(currentFact, i){
                 return (<p key={i}>{currentFact.body} - <span className="text-muted">{currentFact.author}</span></p>)
               })}
                      </Row>
                      </Card.Text>
                      <Link to={"/coin/"+coin._id}>
                        <button type = "button" className = "btn btn-block btn-primary">View  Coin</button>
                      </Link>
                  </Card.Body>
                </Card>
              </TinderCard>
            )}
            </div>
          </Row>
          </Col>
      </div>
    )
  }
}
