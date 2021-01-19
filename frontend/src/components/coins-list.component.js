import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
// Move this into another class
const Coin = props => (
  <div>
  <img src={props.coin.thumb.url} alt={props.coin.name}/>
  <h3>{props.coin.name}</h3>
  <h4>{props.coin.price}</h4>
  <p>{props.coin.description}</p>
  <div>
    <Link to={"/coin/"+props.coin._id}>
      <button type = "button" className = "btn btn-primary">View  Coin</button>
    </Link>
  </div>
  </div>
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
          {this.coinList()}
      </div>
    )
  }
}
