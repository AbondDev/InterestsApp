// Todo: add in validations
// Todo: change className usage to bootstrap-react components where possible
import React, {Component } from 'react';
import axios from 'axios'

export default class CreateFact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author: ''
    }
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault()
    const newFact = {
      body: this.state.body,
      author: this.state.author
    }
    // // todo: move this to .env(?) maybe
    axios.post(
      'http://localhost:8080/coins/'+this.props.params.id+'/facts',
      newFact,
    ).then(res => console.log(res.data))
    this.setState({
      body: '',
      author: ''
    })
    this.props.history.push('/')
  }
render() {
       return (
           <div className ='mt-2 container-fluid'>
               <h3>Add New Fact</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>author: </label>
                       <input  type="text"
                               className="form-control"
                               value={this.state.author}
                               onChange={this.onChangeAuthor}
                               />
                   </div>

                   <div className="form-group">
                       <label>Body </label>
                       <input  type="text"
                               className="form-control"
                               value={this.state.body}
                               onChange={this.onChangeBody}
                               />
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Add Fact" className="btn btn-primary btn-block" />
                   </div>
               </form>
           </div>
       )
   }

}
