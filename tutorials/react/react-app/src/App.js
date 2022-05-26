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
      mode : "welcome",
      selected_nav_data_id : null,
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
    
    if (_mode === 'read') {
      var _result = _nav_data.find((item) => {
        if (item.id === _id) {
          return true;
        }
      });
      _cpnt_content = <Content data={_result}></Content>;
    } else {
      _cpnt_content = <WelComeContent></WelComeContent>;
    }
    
    return _cpnt_content;
  }
  
  changeMode(mode, id = this.state.selected_nav_data_id) {
    
    this.setState({
      mode : mode,
      selected_nav_data_id : id
    })
    
  }
  
  visibleControl() {
    let _cpnt_control = null;
    let _mode = this.state.mode;
    
    if (_mode === "read") {
      _cpnt_control =
        <Control
          fnChangeMode={this.changeMode}
        ></Control>;
    }
    return _cpnt_control;
    
  }
  
  visibleForm() {
    let _cpnt_form, _selected_obj = null;
    let _mode = this.state.mode;
    
    if (_mode === "create" || _mode === "update") {
      _cpnt_form =
        <Form
          parent={this}
          fnCreateSubmit={(title, desc) => {
            let _nav_data = Array.from(this.state.nav_data);
            let _new_id = _nav_data.length + 1;
            
            let _new_obj = {
              id : _new_id,
              title : title,
              desc : desc
            };
            _nav_data.push(_new_obj);
            
            this.setState({
              mode : "welcome",
              nav_data : _nav_data
            });
          }}
          fnUpdateSubmit={(title, desc) => {
            const _selected_id = Number(this.state.selected_nav_data_id);
            const _nav_data = Array.from(this.state.nav_data);
            
            let len_i = _nav_data.length;
            for (let i = 0; i < len_i; i++) {
              let _item = _nav_data[i];
              if (_item.id === _selected_id) {
                _item.title = title;
                _item.desc = desc;
                break;
              }
            }
            
            this.setState({
              nav_data : _nav_data
            })
          }}
        >
        </Form>;
    }
    return _cpnt_form;
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
        {this.visibleControl()}
        {this.visibleForm()}
      </div>
    )
  }
}

export default App;