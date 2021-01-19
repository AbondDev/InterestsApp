import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Col,Card, Button} from 'react-bootstrap';
// todo: Move this into another class
// todo: remove thumbnail processing. It is not necessary for cards
// todo: move styling to css
const Coin = props => (
<>
  <Card>
    <Card.Header className ="text-center">{props.coin.name}</Card.Header>
    <Card.Img variant="top" src={props.coin.main.url} alt={props.coin.name} />
    <Card.Body>
      <Card.Text>
        <ul style={{listStyleType:"none"}}>
          <li><strong>Description:</strong> {props.coin.description}</li>
          <li><strong>Price: </strong> {props.coin.price}</li>
        </ul>
        <h3>Factoids</h3>
        <ul>
        {props.coin.facts.map(function(currentFact, i){
   return (<li key={i}>{currentFact.body} - {currentFact.author}</li>)
 })}
        </ul>
        </Card.Text>
        <Link to={"/coin/"+props.coin._id}>
          <button type = "button" className = "btn btn-primary">View  Coin</button>
        </Link>

    </Card.Body>
  </Card>
</>
)

export default class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {coins: []}
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
  coinList(){
    return this.state.coins.map(function(currentCoin, i){
      return <Coin coin={currentCoin} key={i} />;
    })
  }
  render() {
    return (
      <div>
        <h3>My Favorite Coins</h3>

          <Col xs="6">
              {this.coinList()}
          </Col>

      </div>
    )
  }
}
