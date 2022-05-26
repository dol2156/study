import React, {Component} from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    let _data = this.props.data;
    
    return (
      <nav className="Nav" data-cpnt="Nav">
        <ul>
          {_data.map((item, idx) => (
            <li
              key={idx}
            >
              <a
                href="/"
                data-id={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  let _id = e.target.dataset.id;
                  this.props.fnChangeMode("read", _id);
                }}
              >{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav;
