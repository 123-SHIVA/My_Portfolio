import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Intro/>
  <Skill/>
  <Project/>
       
    </div>
  );
}

export default App;
