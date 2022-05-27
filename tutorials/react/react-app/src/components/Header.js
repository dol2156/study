import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
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
              this.props.fnChangeMode();
            }}
          >WEB</a>
        </h1>
        World Wide Web!
      </header>
    )
  }
}

export default Header;
