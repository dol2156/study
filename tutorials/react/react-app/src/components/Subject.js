import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header className="Subject" data-cpnt="Subject">
        <h1><a href="/" onClick={(evt) => {
          evt.preventDefault();
          this.props.onChangePage();
        }}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    )
  }
}

export default Subject;
