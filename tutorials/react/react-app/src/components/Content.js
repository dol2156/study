import React, {Component} from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const _title = this.props.data.title;
    const _desc = this.props.data.desc;
    
    return (
      <article className="Content" data-cpnt="Content">
        <h2>{_title}</h2>
        {_desc}
      </article>
    )
  }
}

export default Content;
