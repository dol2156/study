import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header className="Subject">
        <h1>WEB</h1>
        world wide web!
      </header>
    )
  }
}

class Toc extends Component {
  render() {
    return (
      <ul className="Toc">
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
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article className="Content">
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
        Hello, React!!!
      </div>
    )
  }
}

export default App;



