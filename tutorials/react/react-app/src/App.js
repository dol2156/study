import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header className="Subject" data-cpnt="Subject">
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    )
  }
}

class Toc extends Component {
  render() {
    return (
      <nav className="Toc" data-cpnt="Toc">
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">Javascript</a>
          </li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article className="Content" data-cpnt="Content">
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Toc></Toc>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    )
  }
}

export default App;



