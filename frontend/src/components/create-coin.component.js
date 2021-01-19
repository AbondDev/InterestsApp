// Todo: add in validations
// Todo: change className usage to react components where possible
import React, {
  Component
} from 'react';
import axios from 'axios'

export default class CreateCoin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      coinGeckoId: '',
      description: '',
      price: 0,
      image: null
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCoingeckoId = this.onChangeCoingeckoId.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeCoingeckoId(e) {
    this.setState({
      coinGeckoId: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
  onFileChange(e) {
    this.setState({
      image: e.target.files[0]
    })
  }

  onSubmit(e) {
    e.preventDefault()
    // Todo: Remove conosole.logs
    console.log('Form Submitted');
    console.log(`Coin Name: ${this.state.name}`);
    console.log(`CoinGecko Id: ${this.state.coinGeckoId}`);
    console.log(`Coin Description: ${this.state.description}`);
    console.log(`Coin Price: ${this.state.price}`);

    const formData = new FormData();
    formData.append("coinName", this.state.name)
    formData.append("coineckoId",this.state.coinGeckoId)
    formData.append("description",this.state.description)
    formData.append("price",this.state.price)
    formData.append("image", this.state.image, this.state.image.name)
    // // todo: move this to .env(?) maybe
    axios.post(
      'http://localhost:8080/coins',
      formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    ).then(res => console.log(res.data))
    this.setState({
      name: '',
      coinGeckoId: '',
      description: '',
      price: 0,
      image: null
    })
    this.props.history.push('/')
  }


render() {
       return (
           <div className ='mt-2'>
               <h3>Add New Favorite Coin</h3>
               <form encType="multipart/form-data" onSubmit={this.onSubmit}>
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
                       <label>Price </label>
                       <input
                               type="number"
                               className="form-control"
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />
                   </div>
                   <div className="form-group">
                       <label>Image Upload </label>
                       <input type="file" onChange={this.onFileChange} />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Add Coin" className="btn btn-primary" />
                   </div>
               </form>
           </div>
       )
   }

}
