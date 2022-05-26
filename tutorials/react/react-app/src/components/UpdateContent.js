import React, {Component} from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.data.id,
      title : this.props.data.title,
      desc: this.props.data.desc,
    }
    
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  
  inputFormHandler(evt){
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }
  
  render() {
    console.log(this.props);
    console.log('UpdateContent render');
    return (
      <form
        className="UpdateContent"
        data-cpnt="UpdateContent"
        onSubmit={(evt) => {
          evt.preventDefault();
          let title = evt.target.title;
          let desc = evt.target.desc;
          this.props.onSubmit(
            this.state.id,
            title.value,
            desc.value
          );
        }}
      >
        <h2>Update</h2>
        <input type="hidden" value={this.state.id}></input>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.inputFormHandler}
          >
          </input>
        </div>
        <div>
          <input
            type="text"
            name="desc"
            placeholder="desc"
            value={this.state.desc}
            onChange={this.inputFormHandler}
          >
          </input>
        </div>
        <div><input type="submit"></input></div>
      </form>
    )
  }
}

export default UpdateContent;
