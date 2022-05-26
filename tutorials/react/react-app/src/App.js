import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import Control from "./components/Control";
import Content from "./components/Content";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    console.clear();
    
    this.state = {
      mode : 'update',
      selected_content_idx : 1,
      /*  */
      subject : {
        title : 'WEB',
        sub : 'World Wid Web!!!',
      },
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML desc'},
        {id : 2, title : 'CSS', desc : 'CSS desc'},
        {id : 3, title : 'Javascript', desc : 'Javascript desc'},
      ],
      contents_welcome : {
        title : "Welcome",
        desc : 'Hello React!!!'
      },
      
    }
  }
  
  getReadContent() {
    if (this.state.mode === 'welcome') {
      return this.state.contents_welcome;
    } else {
      return this.state.contents[this.state.selected_content_idx];
    }
  }
  
  getContent() {
    let _title, _desc, _article, _conetnt = null;
    let mode = this.state.mode;
    
    if (mode !== 'create') {
      _conetnt = this.getReadContent();
      _title = _conetnt.title;
      _desc = _conetnt.desc;
      _article = <Content title={_title} desc={_desc}></Content>;
    }
    
    if (mode === 'create') {
      _article =
        <CreateContent
          onSubmit={(_title, _desc) => {
            let addObj = {
              id : this.state.contents.length + 1,
              title : _title,
              desc : _desc,
            };
            console.log(addObj);
            
            // 기존 배열을 복제해서 데이터를 추가하는 방법으로 하는것이 좋다.
            // 왜인지는 더 깊이 배우면 알게된다.
            let newContentsArr = this.state.contents.concat(addObj);
            this.setState({
              mode:'read',
              contents : newContentsArr,
            });
            console.log(this.state.contents);
            
          }}
        ></CreateContent>;
    } else if (mode === 'update') {
      _article =
        <UpdateContent
          data={_conetnt}
          onSubmit={(_id, _title, _desc) => {
            let _contents = Array.from(this.state.contents);
            let _result = _contents.filter((item, idx) => {
              if (this.state.selected_content_idx === idx) {
                item.title = _title;
                item.desc = _desc;
                return true;
              }
            });
            this.setState({
              mode:'read',
              contents : _contents,
            })
          }}
        >
        </UpdateContent>;
    }
    
    return _article;
  }
  
  render() {
    
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode : "welcome",
            })
          }}
        ></Subject>
        <Toc
          data={this.state.contents}
          onChangePage={(idx) => {
            this.setState({
              mode : "read",
              selected_content_idx : idx,
            })
          }}
        ></Toc>
        <Control
          onChangeMode={(_mode) => {
            console.log(_mode);
            this.setState({
              mode : _mode
            });
          }}
        ></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;



