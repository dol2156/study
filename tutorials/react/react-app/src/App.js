import './App.css';
import React, {Component} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ContentWelcome from "./components/ContentWelcome";
import ContentNormal from "./components/ContentNormal";
import FormCreate from "./components/FormCreate";
import FormUpdate from "./components/FormUpdate";
import ControlBtns from "./components/ControlBtns";

class App extends Component {
  
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    console.clear();
    this.state = {
      mode : "welcome",
      selected_id : 0,
      nav_data : [
        {id : 1, title : "HTML", desc : "HTML is ..."},
        {id : 2, title : "CSS", desc : "CSS is ..."},
        {id : 3, title : "Javascript", desc : "Javascript is ..."},
      ]
    }
    
    // var arr = [1,2,3];
    // console.log(ControlBtns);
    // console.log(ArrayUtil);
    // console.log(ArrayUtil.reverse(arr));
  }
  
  getSelectedData() {
    const _nav_data = this.state.nav_data;
  }
  
  render() {
    console.log(window.ArrayUtil);
    
    return (
      <div className="App" data-cpnt="App">
        <Header
          fnChangeMode={() => {
            this.setState({
              mode : "welcome",
              selected_id : 0,
            })
          }}
        ></Header>
        <Nav
          data={this.state.nav_data}
          fnChangeMode={(mode, id) => {
            
            this.setState({
              mode : mode,
              selected_id : id,
            });
            console.log(this.state.selected_id);
          }}
        ></Nav>
        {this.state.mode === "welcome" &&
          <ContentWelcome></ContentWelcome>
        }
        {this.state.mode !== "welcome" &&
          <ContentNormal data={this.getSelectedData()}></ContentNormal>
        }
        <ControlBtns></ControlBtns>
        <FormCreate></FormCreate>
        <FormUpdate></FormUpdate>
      </div>
    )
  }
}

export default App;

