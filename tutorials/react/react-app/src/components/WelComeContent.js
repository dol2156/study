import React, {Component} from "react";

class WelcomeContent extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <article className="WelcomeContent" data-cpnt="WelcomeContent">
        <h2>Welcome</h2>
        Hello, React!!
      </article>
    )
  }
}

export default WelcomeContent;
