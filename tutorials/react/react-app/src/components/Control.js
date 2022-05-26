import React, {Component} from "react";

class Control extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <article className="Control" data-cpnt="Control">
        <div><button type="button">CREATE</button></div>
        <div><button type="button">UPDATE</button></div>
        <div><button type="button">DELETE</button></div>
      </article>
    )
  }
}

export default Control;
