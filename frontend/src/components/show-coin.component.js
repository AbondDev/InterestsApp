import React, {Component} from "react";
import {Col, Row} from "react-bootstrap"
import axios from "axios";
import CreateFact from "./create-fact.component"
import FactList from "./fact-list.component"


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
    axios.get('https://interestsappserver.herokuapp.com/coins/'+this.props.match.params.id)
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
      <div className ="container-fluid">
        <h3>{this.state.coin.name} Info</h3>
        <Row className="justify-content-between">
        <Col xs={12} md="6">
            <Row className="text-center justify-content-center">
              <Coin coin={this.state.coin}/>
            </Row>
            <FactList facts={this.state.coin.facts} coinId={this.props.match.params.id} history={this.props.history}/>
        </Col>
        <Col xs={12} md="6">
        <Row className="text-left text-md-center justify-content-center justify-content-md-end">
          <CreateFact params={this.props.match.params} history={this.props.history}/>
          </Row>
        </Col>
        </Row>
      </div>
    )
  }
}
