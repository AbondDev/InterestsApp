import React, {Component} from 'react';
import {Form, Row} from 'react-bootstrap'
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
        image: null,
        validated: true
      })
      this.props.history.push('/')
  }


render() {
       return (
         <Row className="justify-content-center text-left">
         <div className ='mt-2 col-12 col-md-4'>
             <h3>Add New Favorite Coin</h3>
             <Form encType="multipart/form-data" onSubmit={this.onSubmit}>
                 <Form.Group>
                     <Form.Label for="coinName">Coin Name: </Form.Label>
                     <Form.Control type="text"
                             value={this.state.name}
                             onChange={this.onChangeName}
                             placeholder="Bitcoin"
                             id="coinName"
                             required
                             maxlength="25"/>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label for="coinGeckoId">CoinGecko Id: </Form.Label>
                     <Form.Control
                             type="text"
                             placeholder="bitcoin"
                             value={this.state.coingeckoId}
                             id="coinGeckoId"
                             onChange={this.onChangeCoingeckoId}
                             />
                 </Form.Group>
                 <Form.Group>
                     <Form.Label for="description">Description: </Form.Label>
                     <Form.Control
                             type="text"
                             value={this.state.description}
                             onChange={this.onChangeDescription}
                             id="description"
                             placeholder="Bitcoin was the first cryptocurrency"
                             maxlength="100"
                             required/>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label for="price">Price: </Form.Label>
                     <Form.Control
                             type="number"
                             value={this.state.price}
                             onChange={this.onChangePrice}
                             id="price"
                             min="1"
                             max="100000"
                             required/>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label for="image">Image Upload: </Form.Label>
                     <input id="image" type="file" className="form-control-file" onChange={this.onFileChange} required accept=".png, .jpg, .jpeg"/>
                 </Form.Group>
                 <Form.Group>
                     <input type="submit" value="Add Coin" className="btn btn-primary btn-block" />
                 </Form.Group>
             </Form>
         </div>
         </Row>

       )
   }

}
