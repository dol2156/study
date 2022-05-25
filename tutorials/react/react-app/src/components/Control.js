import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <ul className="Content" data-cpnt="Content" >
        <li><button
          onClick={() => {
            this.props.onChangeMode("create");
          }}
        >CREATE</button></li>
        <li><button
          onClick={() => {
            this.props.onChangeMode("update");
          }}
        >UPDATE</button></li>
        <li><button
          onClick={() => {
            this.props.onChangeMode("delete");
          }}
        >DELETE</button></li>
      </ul >
    )
  }
}

export default Content;
