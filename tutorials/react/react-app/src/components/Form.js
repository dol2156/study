import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <article className="Form" data-cpnt="Form">
        <form>
          <div>
            <input type="text" placeholder="title"></input>
          </div>
          <div>
            <input type="text" placeholder="desc"></input>
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </article>
    )
  }
}

export default Form;
