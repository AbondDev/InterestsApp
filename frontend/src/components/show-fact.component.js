import React, {Component} from "react";
import {Row} from "react-bootstrap"

export default class Fact extends Component {
  state = {
    fact: this.props.fact
  }
  render(){
    return(
      <>
      <div>
      <Row className ="justify-content-center">
        <p>{this.state.fact.body} - {this.state.fact.author}</p>
        <button className="btn btn-sm btn-outline-danger" onClick={() =>  this.props.onDelete(this.props.fact._id)}>
          Delete
        </button>
      </Row>
      </div>
      </>
    )
  }
}
