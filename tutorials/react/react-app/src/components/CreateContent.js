import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <form
        className="CreateContent"
        data-cpnt="CreateContent"
        onSubmit={(evt) => {
          evt.preventDefault();
          let title = evt.target.title;
          let desc = evt.target.desc;
          this.props.onSubmit(title.value, desc.value);
          title.value = "";
          desc.value = "";
          title.focus();
        }}
      >
        <h2>Create</h2>
        <div><input type="text" name="title" placeholder="title"></input></div>
        <div><input type="text" name="desc" placeholder="desc"></input></div>
        <div><input type="submit"></input></div>
      </form>
    )
  }
}

export default CreateContent;
