import './App.css';
import 헤더 from "./헤더";
import 네비 from "./네비";
import {useState} from "react";
import 푸터 from "./푸터";

function App() {
  
  let [title, setTitle] = useState("Hi React");
  let [id, setId] = useState(null);
  
  const topics = [
    {id : 1, title : 'html', body : 'is ...'},
    {id : 2, title : 'css', body : 'is ...'},
    {id : 3, title : 'javascript', body : 'is ...'},
  ];
  
  return (
    <div className="App">
      <div id="page">
        <헤더 title={title} title2="NICE!" onChangeMode={(evt) => {
          evt.preventDefault();
          
          console.log(setTitle("Click!"));
        }}></헤더>
        <네비 topics={topics} onClick={(evt) => {
          console.log(evt.target.id);
        }}></네비>
        <main>MAIN</main>
        {/*<footer>FOOTER</footer>*/}
        <푸터>
          <div>FOOTER</div>
        </푸터>
      </div>
    </div>
  );
}

export default App;
