import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';



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

function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
    </div>
  )
}

function App() {
  return (
    <div id="app">
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/topics'>topics</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route>
          <Route path="/topics" element={<Topics />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
