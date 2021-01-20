import React, {Component} from "react";
import {Col, Row} from "react-bootstrap"
import axios from "axios";
import CreateFact from "./create-fact.component"
import FactList from "./fact-list.component"

// todo: move coins and facts into class
//Todo: center and format this view
//todo: make sure the coin for this view makes sense in this context. Ie, the price image, and description should be in the same order as it is on the list view
const Coin = props => (
  <div>
  <img className="img-fluid" src={props.coin.main_image} alt={props.coin.name}/>
  <h4><strong>Price: </strong>{props.coin.price}</h4>
  <p><strong>Description: </strong>{props.coin.description}</p>
  </div>
)
export default class ShowCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {coin: {name: '',
    price: '',
    description: '',
    main_image: '',
    facts: [{body: '', author:''}]}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/coins/'+this.props.match.params.id)
    .then(response => {
      const coinData = response.data
      this.setState({coin: {name: coinData.name,
      price: coinData.price,
      description: coinData.description,
      main_image: coinData.main.url,
      facts: coinData.facts}
      })
    }).catch(function(error) {
      console.log(error)
    })
  }
  
  render() {
    return (
      <div>
        <h3>{this.state.coin.name} Info</h3>
        <Row>
        <Col xs={12} md="6">
            <Row>
              <Coin coin={this.state.coin}/>
            </Row>
            <FactList facts={this.state.coin.facts} coinId={this.props.match.params.id} history={this.props.history}/>
        </Col>
        <Col xs={12} md="6">
          <CreateFact params={this.props.match.params} history={this.props.history}/>
        </Col>
        </Row>
      </div>
    )
  }
}
