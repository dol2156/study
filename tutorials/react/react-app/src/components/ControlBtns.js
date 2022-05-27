import React, {Component} from "react";

class ControlBtns extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <ul className="ControlBtns" data-cpnt="ControlBtns">
        <li>
          <button type="button">CREATE</button>
        </li>
        <li>
          <button type="button">UPDATE</button>
        </li>
        <li>
          <button type="button">DELETE</button>
        </li>
      </ul>
    )
  }
}

export default ControlBtns;
