import React, {Component} from "react";

class Nav extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {
      data : this.props.data
    }
  }
  
  render() {
    return (
      <nav className="Nav" data-cpnt="Nav">
        <ul>
          {this.state.data.map((item, idx) => (
            <li key={idx}>
              <a
                href="/"
                data-id={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.fnChangeMode("read", Number(e.target.dataset.id));
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
