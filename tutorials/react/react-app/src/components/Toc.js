import React, { Component } from "react";

class Toc extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}><a href="1.html">{data[i].title}</a></li>);
      i++;
    }
    console.log(lists);


    return (
      <nav className="Toc" data-cpnt="Toc">
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default Toc;
