import React, {Component} from "react";

class FormCreate extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <form className="FormCreate" data-cpnt="FormCreate">
        <h2>Create</h2>
        <div><input type="text" name="name" placeholder="title"></input></div>
        <div><input type="text" name="name" placeholder="desc"></input></div>
        <div>
          <button type="submit">CREATE</button>
        </div>
      </form>
    )
  }
}

export default FormCreate;
