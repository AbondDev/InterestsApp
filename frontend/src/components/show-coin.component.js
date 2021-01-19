import React, {Component} from "react";
import axios from "axios";
// todo: move this into class
const Coin = props => (
  <div>
  <img src={props.coin.main_image} alt={props.coin.name}/>
  <h3>{props.coin.name}</h3>
  <h4>{props.coin.price}</h4>
  <p>{props.coin.description}</p>
  </div>
)
export default class ShowCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {coin: {name: '',
    price: '',
    description: '',
    main_image: ''}
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/coins/'+this.props.match.params.id)
    .then(response => {
      const coinData = response.data
      this.setState({coin: {name: coinData.name,
      price: coinData.price,
      description: coinData.description,
      main_image: coinData.main.url}})
    }).catch(function(error) {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <h3>Coin Info</h3>
        <Coin coin={this.state.coin}/>
      </div>
    )
  }
}
