import './App.css';
import React, {Component} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import WelComeContent from "./components/WelComeContent";
import Control from "./components/Control";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    this.state = {
      mode : "read",
      selected_nav_data_id : 1,
      header_data : {
        title : "WEB",
        sub : "World Wide Web!",
      },
      nav_data : [
        {id : 1, title : "HTML", desc : "HTML is ..."},
        {id : 2, title : "CSS", desc : "CSS is ..."},
        {id : 3, title : "JS", desc : "JS is ..."},
      ]
    }
    
    this.changeMode = this.changeMode.bind(this);
  }
  
  getContent() {
    let _cpnt_content = null;
    let _mode = this.state.mode;
    let _id = Number(this.state.selected_nav_data_id);
    let _nav_data = Array.from(this.state.nav_data);
    
    if (_mode === 'welcome') {
      _cpnt_content = <WelComeContent></WelComeContent>;
    } else {
      var _result = _nav_data.find((item) => {
        if (item.id === _id) {
          return true;
        }
      });
      _cpnt_content = <Content data={_result}></Content>;
    }
    
    return _cpnt_content;
  }
  
  changeMode(mode, id) {
    this.setState({
      mode : mode,
      selected_nav_data_id : id
    })
  }
  
  
  render() {
    let _content = this.getContent();
    
    return (
      <div className="App">
        <Header
          data={this.state.header_data}
          fnChangeMode={this.changeMode}
        ></Header>
        <Nav
          data={this.state.nav_data}
          fnChangeMode={this.changeMode}
        ></Nav>
        {_content}
        <Control></Control>
        <Form></Form>
      </div>
    )
  }
}

export default App;