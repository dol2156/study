import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      subject : {
        title : 'WEB',
        sub : 'World Wid Web!!!',
      },
      content : {
        title : 'HTML',
        desc : 'HTML is Hyper Text Markup Language.',
      }
      
    }
  }
  
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Toc></Toc>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
      </div>
    )
  }
}

export default App;



