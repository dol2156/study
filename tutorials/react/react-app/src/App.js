import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    console.clear();

    this.state = {
      mode: 'welcome',
      selected_content_idx: 1,
      /*  */
      subject: {
        title: 'WEB',
        sub: 'World Wid Web!!!',
      },
      toc: [
        { id: 1, title: 'HTML' },
        { id: 2, title: 'CSS' },
        { id: 3, title: 'Javascript' },
      ],
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
    let _title = null, _desc = null;
    let mode = this.state.mode;

    if (mode === 'welcome') {
      _title = this.state.contents_welcom.title;
      _desc = this.state.contents_welcom.desc;
    } else if (mode === 'read') {
      _title = this.state.contents[this.state.selected_content_idx].title;
      _desc = this.state.contents[this.state.selected_content_idx].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            console.log("Subject onChangePage");
            this.setState({
              mode: "welcome",
            })
          }}
        ></Subject>
        <Toc
          data={this.state.toc}
          onChangePage={(idx) => {
            console.log("Toc onChangePage", idx);
            this.setState({
              mode: "read",
              selected_content_idx: idx,
            })
          }}
        ></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;



