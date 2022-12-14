import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route>
        <Home></Home>
      </Route>
      {/* <Route path="/"><Home></Home></Route>
      <Route path="/topics"><Topics></Topics></Route>
      <Route path="/contact"><Contact></Contact></Route> */}
    </Routes>

  );
}

export default App;
