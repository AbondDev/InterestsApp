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
      <Row className =" flex-nowrap flex-xs-wrap justify-content-center justify-content-sm-between mx-0 mx-sm-2 mx-md-0">
        <p>{this.state.fact.body} - <span className="text-muted"> {this.state.fact.author} </span> </p>
        <button className="btn btn-sm btn-outline-danger d-none d-sm-flex" onClick={() =>  this.props.onDelete(this.props.fact._id)}>
          Delete
        </button>
      </Row>
      </div>
      </>
    )
  }
}
