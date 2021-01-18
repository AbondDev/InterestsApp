import React, {Component} from 'react';
import axios from 'axios'

export default class CreateCoin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      coingeckoId: '',
      description: '',
      price: 0
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCoingeckoId = this.onChangeCoingeckoId.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeCoingeckoId(e){
    this.setState({
      coingeckoId: e.target.value
    })
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }
  onChangePrice(e){
    this.setState({
      price: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    // Todo: Remove conosole.logs
    console.log('Form Submitted');
    console.log(`Coin Name: ${this.state.name}`);
    console.log(`CoinGecko Id: ${this.state.coingeckoId}`);
    console.log(`Coin Description: ${this.state.description}`);
    console.log(`Coin Price: ${this.state.price}`);

    const newCoin = {
      name: this.state.name,
      coingeckoId: this.state.coingeckoId,
      description: this.state.description,
      price: this.state.price
    }
    // todo: move this to .env(?) maybe
    axios.post('http://localhost:8080/coins', newCoin)
    .then(res => console.log(res.data))

    this.setState({
      name: '',
      coingeckoId: '',
      description: '',
      price: 0
    })
    this.props.history.push('/')
  }

  render() {
         return (
             <div className ='mt-2'>
                 <h3>Add New Favorite Coin</h3>
                 <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                         <label>Name: </label>
                         <input  type="text"
                                 className="form-control"
                                 value={this.state.name}
                                 onChange={this.onChangeName}
                                 />
                     </div>
                     <div className="form-group">
                         <label>CoinGecko Id </label>
                         <input
                                 type="text"
                                 className="form-control"
                                 value={this.state.coingeckoId}
                                 onChange={this.onChangeCoingeckoId}
                                 />
                     </div>
                     <div className="form-group">
                         <label>Description </label>
                         <input
                                 type="text"
                                 className="form-control"
                                 value={this.state.description}
                                 onChange={this.onChangeDescription}
                                 />
                     </div>
                     <div className="form-group">
                         <label>Description </label>
                         <input
                                 type="number"
                                 className="form-control"
                                 value={this.state.price}
                                 onChange={this.onChangePrice}
                                 />
                     </div>

                     <div className="form-group">
                         <input type="submit" value="Create Todo" className="btn btn-primary" />
                     </div>
                 </form>
             </div>
         )
     }

}
