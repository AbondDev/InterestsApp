import React, {Component} from "react";
import axios from "axios";
import Fact from './show-fact.component'

export default class FactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      facts: this.props.facts,
      coinId: this.props.coinId
    }
  }
  handleDelete = factId => {
    const facts = this.state.facts.filter(fact=>fact._id !== factId)
    axios.delete(
      'https://interestsappserver.herokuapp.com/coins/'+this.state.coinId+'/facts/'+factId
    ).then(res => console.log(res.data))
    .catch(function(error) {
      console.log(error)
    })
    this.setState({facts: facts})
    this.props.history.push('/')
  }

render() {
  return(
    <div>
  <h3>Facts</h3>
         {this.props.facts.map(fact=> (
           <Fact key={fact._id} fact={fact} onDelete={this.handleDelete}/>
         ))}
   </div>
)}
}
