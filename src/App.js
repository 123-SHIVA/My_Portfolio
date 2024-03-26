import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Intro/>
  <Skill/>
  <Project/>
  <Contact/>
  <Footer/>
       
    </div>
  );
}

export default App;
