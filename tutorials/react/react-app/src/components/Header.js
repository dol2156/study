import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <header className="Header" data-cpnt="Header">
        <h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.fnChangeMode("welcome", null);
            }}
          >
            {this.props.data.title}
          </a>
        </h1>
        {this.props.data.sub}
      </header>
    )
  }
}

export default Header;
