import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Subject from "./components/Subject";
import Toc from "./components/Toc";
import Control from "./components/Control";
import Content from "./components/Content";
import CreateContent from "./components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    console.clear();

    this.state = {
      mode: 'create',
      selected_content_idx: 1,
      /*  */
      subject: {
        title: 'WEB',
        sub: 'World Wid Web!!!',
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML desc' },
        { id: 2, title: 'CSS', desc: 'CSS desc' },
        { id: 3, title: 'Javascript', desc: 'Javascript desc' },
      ],
      contents_welcom: {
        title: "Welcome",
        desc: 'Hello React!!!'
      },

    }
  }

  render() {
    let _title, _desc, _article = null;
    let mode = this.state.mode;

    if (mode === 'welcome') {
      _title = this.state.contents_welcom.title;
      _desc = this.state.contents_welcom.desc;
    } else if (mode === 'read') {
      _title = this.state.contents[this.state.selected_content_idx].title;
      _desc = this.state.contents[this.state.selected_content_idx].desc;
    } else if (mode === 'create') {
      _article =
        <CreateContent
          onSubmit={(_title, _desc) => {
            let addObj = {
              id: this.state.contents.length + 1,
              title: _title,
              desc: _desc,
            };
            console.log(addObj);

            // 기존 배열을 복제해서 데이터를 추가하는 방법으로 하는것이 좋다.
            // 왜인지는 더 깊이 배우면 알게된다.
            let newContentsArr = this.state.contents.concat(addObj);
            this.setState({
              contents: newContentsArr
            });
            console.log(this.state.contents);

          }}
        ></CreateContent>;
    }

    if (mode === 'welcome' || mode === 'read') {
      _article = <Content title={_title} desc={_desc}></Content>;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode: "welcome",
            })
          }}
        ></Subject>
        <Toc
          data={this.state.contents}
          onChangePage={(idx) => {
            this.setState({
              mode: "read",
              selected_content_idx: idx,
            })
          }}
        ></Toc>
        <Control
          onChangeMode={(_mode) => {
            console.log(_mode);
            this.setState({
              mode: _mode
            });
          }}
        ></Control>
        {_article}

      </div>
    )
  }
}

export default App;



