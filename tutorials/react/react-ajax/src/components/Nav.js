import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    console.clear();

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch('list.json')
      .then((result) => {
        return result.json();
      }).then((json) => {
        console.log(json);
        this.setState({
          list: json
        });
      })
  }


  render() {
    return (
      <nav className="Nav">
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}><a href='/'>{item.title}</a></li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav;